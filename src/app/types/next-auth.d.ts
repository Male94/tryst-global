import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  // 👤 Extend the built-in User model
  interface User extends DefaultUser {
    id: string;
    email: string;
    name?: string | null;
    isAdmin?: boolean;
  }

  // 🧠 Extend the Session type
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name?: string | null;
      isAdmin?: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  // 🔐 Add custom fields to the JWT token
  interface JWT {
    id?: string;
    isAdmin?: boolean;
  }
}
