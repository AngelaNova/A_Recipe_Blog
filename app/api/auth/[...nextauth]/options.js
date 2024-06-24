//import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

//import User from '@models/user';
//import { connectToDB } from '@utils/database';

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email == process.env.ADMIN_EMAIL) {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        if (profile?.email == process.env.ADMIN_EMAIL) {
          userRole = "admin";
        }

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  /*
  ({
    name: "Credentials",
    credentials: {
      email: {
        label: "email:",
        type: "text",
        placeholder: "your-email",
      },
      password: {
        label: "password:",
        type: "password",
        placeholder: "your-password",
      },
    },
    async authorize(credentials) {
      try {
        const foundUser = await User.findOne({ email: credentials.email })
          .lean()
          .exec();

        if (foundUser) {
          console.log("User Exists");
          const match = await bcrypt.compare(
            credentials.password,
            foundUser.password
          );

          if (match) {
            console.log("Good Pass");
            delete foundUser.password;

            foundUser["role"] = "Unverified Email";
            return foundUser;
          }
        }
      } catch (error) {
        console.log(error);
      }
      return null;
    },
  })], */
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  /*
  callbacks: {       
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({ email: session.user.email });
        session.user.id = sessionUser._id.toString();
        return session;
      } catch (error) {
        console.error('Error fetching user session:', error);
        return session;
      }
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.error('Error during sign-in:', error);
        return false;
      }
    },
    async signOut({ token, session }) {
      // Custom signOut logic if necessary
      console.log(`User with token ${token} and session ${session} signed out`);
      // Additional clean-up tasks can be added here
    },
  },*/
  secret: process.env.SECRET,
};
