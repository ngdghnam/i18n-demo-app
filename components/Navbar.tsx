"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [locale, setLocale] = React.useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh();
  };

  const t = useTranslations("nav");

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 text-black">
      <div className="text-xl font-bold">{t("title")}</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-5 mx-px">
          <div>{t("home")}</div>
          <div>{t("shop")}</div>
          <div>{t("about")}</div>
          <div>{t("blog")}</div>
          <div>{t("contactus")}</div>
        </div>
        <div className="flex items-center gap-2 mr-1">
          <Button variant="ghost">
            <User></User>
          </Button>
          <Button variant="ghost">
            <ShoppingCart></ShoppingCart>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">Langs</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <Button
                  variant={"ghost"}
                  onClick={() => changeLocale("en")}
                  className={`${locale === "en" ? "font-bold" : ""}`}
                >
                  EN
                </Button>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <Button
                  variant={"ghost"}
                  onClick={() => changeLocale("vn")}
                  className={`${locale === "vn" ? "font-bold" : ""}`}
                >
                  VN
                </Button>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
