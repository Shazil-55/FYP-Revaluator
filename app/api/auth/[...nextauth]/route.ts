import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter";

const clientIdG = process.env.GOOGLE_CLIENT_ID!;
const clientSecretG = process.env.GOOGLE_CLIENT_SECRET!;

const clientIdT = process.env.GOOGLE_CLIENT_ID!;
const clientSecretT = process.env.GOOGLE_CLIENT_SECRET!;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: clientIdG,
      clientSecret: clientSecretG,
    }),
    TwitterProvider({
      clientId: clientIdT,
      clientSecret: clientSecretT
    })
  ],
});
export { handler as GET, handler as POST }