import { Facebook, Instagram, Twitch, Youtube } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mt-20 min-h-40 w-screen bg-black py-2 transition-colors">
      <div className="max-w-8xl mx-auto py-8 pr-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-widest text-white">
              TRXVL
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              About About
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Contact Contact
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Privacy Privacy
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Terms Terms
            </span>
            <Button
              variant="outline"
              className="mt-6 border-gray-600 text-gray-400"
            >
              Find out More
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              About
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Contact
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Privacy
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Terms
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              About
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Contact
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Privacy
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Terms
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              About
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Contact
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Privacy
            </span>
            <span className="text-muted-foreground underline-offset-8 hover:text-white/80 hover:underline">
              Terms
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <Instagram className="text-muted-foreground hover:text-white/90" />
          <Twitch className="text-muted-foreground hover:text-white/90" />
          <Facebook className="text-muted-foreground hover:text-white/90" />
          <Youtube className="text-muted-foreground hover:text-white/90" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
