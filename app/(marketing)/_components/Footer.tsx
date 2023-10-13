import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <div className="hidden md:flex items-center gap-x-2">
        <Image src="/logo.png" height="25" width="25" alt="Logo" />
        <p className="font-semibold">Insightful</p>
      </div>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
