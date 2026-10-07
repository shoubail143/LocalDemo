"use client";

import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const AuthActions = () => (
  <div>
    <SignInButton>
      <Button variant="ghost" size="sm" className="text-sm dark:text-white">
        Sign in
      </Button>
    </SignInButton>
    <SignUpButton>
      <Button className="bg-blue-500">Sign up</Button>
    </SignUpButton>
  </div>
);

export const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isDashboardPage = pathname === "/dashboard";

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Image
            src="/trello.png"
            alt="Logo"
            width={80}
            height={80}
            className="ml-0"
          />
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          {isHomePage ? (
            isSignedIn ? (
              <UserButton />
            ) : (
              <AuthActions />
            )
          ) : isSignedIn ? (
            <div className="flex flex-col items-end space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <UserButton />
              {/*<span className="hidden text-sm text-gray-500 sm:block">
                Welcome,{" "}
                {user?.firstName ??
                  user?.emailAddresses[0]?.emailAddress ??
                  "there"}
              </span> */}
              {!isDashboardPage && (
                <Link href="/dashboard">
                  <Button className="ml-2 flex items-center gap-1">
                    To dashboard <ChevronRight />
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <AuthActions />
          )}
        </div>
      </div>
    </header>
  );
};
