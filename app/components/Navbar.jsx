"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Icons } from "@/components/icons";
import Logo from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function Navbar() {
  return (
    <NavigationMenu className="flex justify-between items-center w-full p-4 max-w-full md:px-32">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink>
              <Button>Get Started</Button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
export default Navbar;
