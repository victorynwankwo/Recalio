import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { TokenPayload } from "../../types/refresh.types";
export const refreshAccessToken = (
  req: Request,
  res: Response,
) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token not found.",
    });
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string,
    ) as JwtPayload;

    if (
      !decoded ||
      typeof decoded !== "object" ||
      typeof decoded.id !== "number" ||
      typeof decoded.username !== "string"
    ) {
      return res.status(401).json({
        message: "Invalid refresh token payload.",
      });
    }

    const payload: TokenPayload = {
      id: decoded.id,
      username: decoded.username,
    };

    // Generate new access token
    const newAccessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET as string,
      {
        expiresIn: "20m",
      },
    );

    // Generate new refresh token
    const newRefreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET as string,
      {
        expiresIn: "30d",
      },
    );

    // Replace old refresh token with new one
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite:
        process.env.NODE_ENV === "production"
          ? "none"
          : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Access token refreshed successfully.",
      accessToken: newAccessToken,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired refresh token.",
    });
  }
};
















