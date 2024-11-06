"use client";

import VerifyEmail from "@/components/VerifyEmail";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const toEmail = searchParams.get("to");

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6">
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 w-[500px] h-60">
              <Image
                src="/email-sent.png"
                alt="email sent image"
                fill
                priority
                sizes="(max-width: 1920px) 100%, 100%"
              />
            </div>

            <h3 className="font-semibold text-2xl">Check your email</h3>

            {toEmail ? (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to{" "}
                <span className="font-semibold">{toEmail}</span>.
              </p>
            ) : (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to your email.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
