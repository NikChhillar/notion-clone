"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        A Unified Workspace for Your Ideas, Documents, and Plans. Welcome to{" "}
        <span className="underline">Insightful</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Insightful: Your Gateway to Streamlined Productivity <br /> and Creative
        Excellence
      </h3>
      <Button>
        Get Started
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
