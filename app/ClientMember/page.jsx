"use client";
//we cannot use getServerSession on the client page!!!
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientMember = async () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/api/auth/signin?callbackUrl=/ClientMember");
  }
  //{
  //   required: true,
  //   unauthenticated: () => {
  //     redirect("/api/auth/signin?callbackUrl=/ClientMember");
  //   },
  // }

  console.log({ session, status });

  return (
    <div>
      <h1>Member Client Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default ClientMember;
