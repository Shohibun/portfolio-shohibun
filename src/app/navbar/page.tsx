"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white shadow-sm fixed top-0 z-50 py-3">
      <div className="w-10/12 mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand: Avatar + Name */}
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/images/logo.jpg" alt="@shadcn" />
          </Avatar>
          <Link
            href="/"
            className="text-xl font-bold text-blue-400 hover:text-blue-700 transition-colors"
          >
            Shohibun Najam Ilma
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {[
            ["#about", "About"],
            ["#experience", "Experience"],
            ["#project", "Project"],
            ["#skill", "Skill"],
            ["#certificate", "Certificate"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-500 font-bold hover:text-blue-400"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu (hamburger) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-blue-400" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pl-10">
              <nav className="mt-6 flex flex-col gap-4">
                {[
                  ["#about", "About"],
                  ["#experience", "Experience"],
                  ["#project", "Project"],
                  ["#skill", "Skill"],
                  ["#certificate", "Certificate"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-gray-700 hover:text-blue-400"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
