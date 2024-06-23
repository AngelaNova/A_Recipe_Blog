"use client";

import { SessionProvider } from "next-auth/react";

//used for authentication client rendering information - typically not a good idea to render user data on client side
const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
