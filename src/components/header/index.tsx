import Link from "next/link";
import { it } from "node:test";
import React from "react";
import { Button } from "../ui";
import { CircleUserRound } from "lucide-react";

const navLink = [
  {
    href: "/",
    name: "ماڵ",
  },
  {
    href: "/about",
    name: "سەبارەت بە ئێمە",
  },
  {
    href: "/blog",
    name: "بلاگ",
  },
];

function Header() {
  return (
    <header className="w-full bg-background shadow">
      <div className="container mx-auto w-[90%] flex justify-between items-center py-4 ">
        <div className="text-4xl font-bold">ئارگا</div>
        <nav className="flex gap-3">
          {navLink.map((item) => {
            return (
              <Link
                className="text-2xl text-red-400 font-bold hover:text-yellow-300"
                key={item.name}
                href={`${item.href}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div>
          <Button>
            Login
            <CircleUserRound className="size-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
