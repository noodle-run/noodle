import { siteConfig } from "@/app/config";
import { Brand } from "@/components/brand";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-screen-xl flex-wrap gap-3 px-6 py-24">
        <div className="order-2 flex flex-col justify-center gap-6 lg:order-1">
          <div className="flex items-center gap-3">
            <Brand size={35} />
            <span className="font-semibold">{siteConfig.name}</span>
          </div>
          <p className="text-default-500">
            &copy;{new Date().getFullYear()} NOODLE RUN LTD. All Rights
            Reserved.
          </p>
        </div>
        <div className="order-1 mb-12 flex flex-1 flex-col flex-wrap gap-6 md:flex-row lg:order-2 lg:mb-0 lg:justify-end lg:gap-24">
          <div>
            <h3 className="pb-4 font-medium text-default-500">Product</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link as={NextLink} color="foreground" href="/#hero">
                  Home
                </Link>
              </li>
              <li>
                <Link as={NextLink} color="foreground" href="/#features">
                  Features
                </Link>
              </li>
              <li>
                <Link as={NextLink} color="foreground" href="/#mission">
                  Mission
                </Link>
              </li>
              <li>
                <Link as={NextLink} color="foreground" href="/#faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link as={NextLink} color="foreground" href="/waitlist">
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="pb-4 font-medium text-default-500">Social Media</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link isExternal href={siteConfig.github} color="foreground">
                  Github
                </Link>
              </li>
              <li>
                <Link isExternal color="foreground" href={siteConfig.twitter}>
                  Twitter
                </Link>
              </li>
              <li>
                <Link isExternal color="foreground" href={siteConfig.discord}>
                  Discord
                </Link>
              </li>
              <li>
                <Link isExternal color="foreground" href={siteConfig.instagram}>
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="pb-4 font-medium text-default-500">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link color="foreground" as={NextLink} href="/terms">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link color="foreground" as={NextLink} href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link color="foreground" as={NextLink} href="/cookies">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
