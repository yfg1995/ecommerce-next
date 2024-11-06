import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";

interface IVerifyEmail {
  token: string;
}

const VerifyEmail = ({ token }: IVerifyEmail) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2 text-center">
        <XCircle className="w-8 h-8 text-red-600" />
        <h3 className="font-semibold text-xl">There was a problem</h3>
        <p className="text-muted-foreground text-sm">
          This token is not valid or might be expired. Please try again.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 text-muted-foreground">
          <img src="/email-sent.png" alt="email sent image" />
        </div>

        <h3 className="font-semibold text-2xl">You&apos;re all set!</h3>
        <p className="text-muted-foreground text-center mt-1">
          Thank you for verifying your email.
        </p>
        <Link className={buttonVariants({ className: "mt-4" })} href="/sign-in">
          Sign In
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2 text-center">
        <Loader2 className="animate-spin w-8 h-8 text-green-600" />
        <h3 className="font-semibold text-xl">Verifying...</h3>
        <p className="text-muted-foreground text-sm">This won&apos;t long.</p>
      </div>
    );
  }
};

export default VerifyEmail;
