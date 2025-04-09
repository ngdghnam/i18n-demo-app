"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NavBar = () => {
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

  return (
    <div className="py-3 flex items-center justify-between border-b">
      <h1 className="text-lg font-bold">LOGO</h1>
      <div className="flex items-center gap-3">
        <button
          onClick={() => changeLocale("en")}
          className={`border p-2 font-bold rounded-md text-sm ${
            locale === "en" && "bg-white text-black"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => changeLocale("fr")}
          className={`border p-2 font-bold rounded-md text-sm ${
            locale === "fr" && "bg-white text-black"
          }`}
        >
          FR
        </button>
        <button
          onClick={() => changeLocale("vn")}
          className={`border p-2 font-bold rounded-md text-sm ${
            locale === "vn" && "bg-white text-black"
          }`}
        >
          VN
        </button>
      </div>
    </div>
  );
};

export default NavBar;
