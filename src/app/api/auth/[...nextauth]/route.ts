import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("🔐 Authorizing user with credentials:", credentials);
        // 🧠 Sanity check
        if (!credentials?.email || !credentials?.password) {
          console.warn("⚠️ Missing credentials");
          return null;
        }

        // 🔍 Look up user
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          console.warn("❌ No user found with that email");
          return null;
        }

        // 🔑 Verify password
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          console.warn("🚫 Invalid password attempt for", credentials.email);
          return null;
        }

        // ✅ Return sanitized user object
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
        };
      },
    }),
  ],

  // 🧩 Use JWT-based session
  session: { strategy: "jwt" },

  // 🚪 Tell NextAuth to use your custom login page instead of its own
  pages: {
    signIn: "/admin/login", // 👈 this prevents the double-login issue
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id!;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
