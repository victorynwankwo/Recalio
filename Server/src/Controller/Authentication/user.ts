import { Request, Response } from "express";
import prisma from "../../Config/db";
import { hashPassword, comparePassword } from "../../util/bycrypt";
import jwt from "jsonwebtoken"

export const register = async (req: Request, res: Response) => {
  // confirmPassword only exists here for validation — never stored in the DB
  const { username, email, password, confirmPassword } = req.body;

  try {
    // 1. Basic presence check
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Password match check (this is the confirmPassword validation)
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // 3. Basic password strength check
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    // 4. Check if user already exists (email or username taken)
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Email or username already in use" });
    }

    // 5. Hash the password before storing (confirmPassword is discarded here — never hashed or saved)
    const hashedPassword = await hashPassword(password);

    // 6. Create the user in the database
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,

      },
    });

   
    const { password: _, ...userWithoutPassword } = user;

    console.log(user)

    return res.status(201).json({
      message: "User registered successfully",
      user: userWithoutPassword,
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // 1. Basic presence check
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // 2. Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // 3. If no user found — don't reveal whether it's the email or password that's wrong
    // (this is a security best practice — avoids leaking which accounts exist)
    if (!user || !user.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 4. Compare the plain-text password against the stored hash
    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 5. Generate the access token — short-lived (1 hour)
    const accessToken = jwt.sign(
      { id: user.id, username: user.username },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "1h" }
    );

    // 6. Generate the refresh token — long-lived (30 days)
    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "30d" }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    });

    // 8. Strip password before sending user data back
    const { password: _, ...userWithoutPassword } = user;

    // 9. Send access token in the response body (frontend keeps this in memory, not localStorage)
    return res.status(200).json({
      message: "Login successful",
      accessToken,
      user: userWithoutPassword,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};



export const googleCallback = async (req: Request, res: Response) => {
  try {
    const user = req.user as any // ✅ properly typed now, no `any` needed

    if (!user) {
      return res.redirect("http://localhost:5173/login?error=google_auth_failed");
    }

    // TypeScript now knows user.id, user.username, etc. are valid and correctly typed
    const accessToken = jwt.sign(
      { id: user.id, username: user.username },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "1h" }
    );

    // ...rest stays the same
  } catch (err) {
    console.error("Google callback error:", err);
    res.redirect("http://localhost:5173/login?error=server_error");
  }
};