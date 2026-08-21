// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthUserPayload } from "../types/jwt.types";

// This is deliberately its OWN type, separate from Express.User —
// the JWT only ever contains id + username, never the full user record.

interface AuthenticatedRequest extends Request {
  authUser?: AuthUserPayload;
}



export const verifyUser = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("🔐 verifyUser started");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string,
    ) as JwtPayload;

    if (
      !decoded ||
      typeof decoded !== "object" ||
      typeof decoded.id !== "string" ||
      typeof decoded.username !== "string"
    ) {
      return res.status(401).json({ message: "Invalid token payload." });
    }

    req.authUser = {
      id: decoded.id,
      username: decoded.username,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};