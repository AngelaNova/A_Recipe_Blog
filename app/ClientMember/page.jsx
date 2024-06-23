"use client";
// We cannot use getServerSession on the client page!!!
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ClientMember = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin?callbackUrl=/ClientMember");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return (
      <div>
        <h1>Member Client Session</h1>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.role}</p>
      </div>
    );
  }

  // Render nothing or a placeholder until redirect completes
  return null;
};

export default ClientMember;
