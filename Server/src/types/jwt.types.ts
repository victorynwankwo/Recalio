// src/types/express/index.d.ts
declare global {
  namespace Express {
    interface User {
      id: number;
      username: string;
    }
  }
}

export {};