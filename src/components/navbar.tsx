import { siteConfig } from "@/app/config";
import { Brand } from "@/components/brand";
import { Link, type LinkProps } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUiNavbar,
} from "@nextui-org/navbar";
import { GithubIcon, TwitterIcon } from "lucide-react";
import NextLink from "next/link";

type MenuItems = Pick<
  LinkProps,
  "href" | "children" | "isExternal" | "color"
>[];

const menuItems: MenuItems = [
  {
    href: "/#hero",
    children: "Home",
  },
  {
    href: "/#features",
    children: "Features",
  },
  {
    href: "/#mission",
    children: "Mission",
  },
  {
    href: "/#faq",
    children: "FAQ",
  },
  {
    href: "https://discord.gg/SERySfj8Eg",
    children: "Discord",
    isExternal: true,
  },
];

const mobileMenuItems: MenuItems = [
  ...menuItems,
  {
    href: siteConfig.github,
    children: "Github",
    isExternal: true,
  },
  {
    href: siteConfig.twitter,
    children: "Twitter",
    isExternal: true,
  },
  {
    href: "/waitlist",
    children: "Join Waitlist!",
    color: "primary",
  },
];

export const Navbar = () => {
  return (
    <NextUiNavbar>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" srOnlyText="Toggle menu" />
        <NavbarBrand>
          <Link
            as={NextLink}
            href="/"
            color="foreground"
            className="flex items-center gap-3"
          >
            <Brand size={35} />
            <span className="font-semibold">Noodle</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-6 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link as={NextLink} color={item.color ?? "foreground"} {...item} />
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden gap-6 sm:flex" justify="end">
        <NavbarItem>
          <Link color="foreground" href={siteConfig.github} isExternal>
            <GithubIcon size={20} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={siteConfig.twitter} isExternal>
            <TwitterIcon size={20} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {mobileMenuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link as={NextLink} color={item.color ?? "foreground"} {...item} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
};
