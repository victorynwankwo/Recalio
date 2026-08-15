import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import prisma from "./db";

console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
console.log("HIT")

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const googleId = profile.id;
        const username = profile.displayName;
        // const avatar = profile.photos?.[0]?.value;

        if (!email) {
          return done(new Error("No email found from Google profile"));
        }

        // Check if a user already exists with this email or googleId
        let user = await prisma.user.findFirst({
          where: {
            OR: [{ googleId }, { email }],
          },
        });

        if (!user) {
          // No existing user — create one (this is effectively "sign up")
          user = await prisma.user.create({
            data: {
              username,
              email,
              googleId,
            },
          });
        } else if (!user.googleId) {
          // Existing email/password user is now linking their Google account
          user = await prisma.user.update({
            where: { id: user.id },
            data: { googleId },
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err as Error);
      }
    }
  )
);

passport.serializeUser((user: Express.User, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;