import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text"},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials : any): Promise<any> {
        const user = { id: 1, name: "admin", password: "password" };
        if (credentials.username === user.name && credentials.password === user.password) {
          return user;
        }
        else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
