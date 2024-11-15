import { FC } from "react";
import { Container } from "../Container";
import Link from "next/link";
import { NavItems } from "./NavItems";
import { buttonVariants } from "../ui/Button";
import { Cart } from "./Cart";

// export interface INavbar {}

export const Navbar: FC = () => {
  const user = null;

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <Container>
          <div className="flex h-16 items-center">
            <div className="ml-4 flex lg:ml-0">
              <Link href="/" className="text-green-600 font-bold text-2xl">
                Logo
              </Link>
            </div>

            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 font-bold">
                {user ?? (
                  <Link
                    href="/sign-in"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Sign In
                  </Link>
                )}

                {user ?? (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                )}

                {user ? (
                  <p></p>
                ) : (
                  <Link
                    href="/sign-up"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Create account
                  </Link>
                )}

                {user ? (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                ) : null}

                {user ? null : (
                  <div className="flex lg:ml-6">
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>
                )}

                <div className="ml-4 flow-root lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};
