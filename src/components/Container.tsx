import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface IContainer extends PropsWithChildren {
  className?: string;
}

export const Container: FC<IContainer> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
