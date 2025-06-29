import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ja", "zh", "ko"],
  defaultLocale: "ja",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
