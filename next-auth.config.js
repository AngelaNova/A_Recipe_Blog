// next-auth.config.js
import Providers from 'next-auth/providers';

export default {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Add other providers as needed
  ],
  
};
