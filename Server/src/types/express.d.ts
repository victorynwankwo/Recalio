// import { User as PrismaUser } from "@prisma/client";
// import { AuthUserPayload } from "../types/auth";
import "express";

declare global {
  namespace Express {
    interface User {
      id: string;
      username: string;
    }

    interface Request {
      authUser?: {
        id: string;
        username: string;
      };
    }
  }
}
