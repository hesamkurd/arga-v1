"use client";

import Link from "next/link";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
import { AlignJustify, CircleUserRound, X } from "lucide-react";

const navLink = [
  {
    href: "/",
    name: "خانه",
  },
  {
    href: "/about",
    name: "درباره ما",
  },
  {
    href: "/blog",
    name: "بلاگ",
  },
];

function Header() {
  return (
    <header className="w-full bg-background shadow fixed top-0 left-0 h-14 md:h-16 z-50 ">
      <div className="container mx-auto w-[90%] flex justify-between items-center py-4 ">
        {/* Mobile Menu */}
        <div className="flex md:hidden" role="button">
          <Drawer direction="right">
            <DrawerTrigger>
              <AlignJustify />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerClose className="flex justify-end p-4">
                <X />
              </DrawerClose>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription asChild={true}>
                  {/* navbar */}
                  <nav className="md:hidden flex flex-col gap-3">
                    {navLink.map((item) => {
                      return (
                        <Link
                          className="text-2xl text-red-400 font-bold hover:text-yellow-300"
                          key={item.name}
                          href={`${item.href}`}
                        >
                          <DrawerClose>{item.name}</DrawerClose>
                        </Link>
                      );
                    })}
                  </nav>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        {/* Logo */}
        <div className="hidden md:flex text-4xl font-bold">ئارگا</div>
        {/* navbar */}
        <nav className="hidden md:flex gap-3">
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
        {/* Registery */}
        <div>
          <Button>
            ثبت نام
            <CircleUserRound className="size-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
