"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/Spinner";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScrollTop();

  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="hidden md:flex items-center gap-x-2">
        <Image src="/logo.png" height="25" width="25" alt="Logo" />
        <p className="font-semibold">Insightful</p>
      </div>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Started</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Insightful</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
