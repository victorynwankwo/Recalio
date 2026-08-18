// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Matches your Prisma User model — id is a number (Int, autoincrement),
// not a string. This must stay consistent with src/types/express/index.d.ts
type AuthenticatedRequest = Request & {
  user?: Express.User;
};

export const verifyUser = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  // Safely extract Bearer Token from HTTP Headers
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // No fallback secret — if ACCESS_TOKEN_SECRET is missing, fail loudly
    // rather than silently signing/verifying with a guessable default.
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string,
    ) as JwtPayload;

    if (
      !decoded ||
      typeof decoded !== "object" ||
      typeof decoded.id !== "number" ||
      typeof decoded.username !== "string"
    ) {
      return res.status(401).json({ message: "Invalid token payload." });
    }

    // Assign only the decoded fields but cast to `Express.User` to satisfy
    // the global `Express.User` augmentation which expects full Prisma User
    // properties. The runtime value contains at least `id` and `username`.
    req.user = {
      id: decoded.id,
      username: decoded.username,
    } as unknown as Express.User;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};
