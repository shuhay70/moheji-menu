import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ja", "zh-CN"],
  defaultLocale: "ja",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
