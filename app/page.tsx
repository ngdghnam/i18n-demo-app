import { AbstractIntlMessages, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const message: AbstractIntlMessages = await getMessages({ locale });
  const title = message.TabTitles?.home;
  return {
    title,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex flex-col gap-8 items-center">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="next-logo"
        width={180}
        height={38}
      ></Image>
      <ol className="list-decimal list-inside text-sm text-center sm:text-left">
        <li className="mb-2">
          {t("list1")}
          <code className="bg-black/[.05] dark:bg-white[.06] px-1 py-5">
            app/page.tsx
          </code>
        </li>
        <li className="mb-2">{t("list2")}</li>
      </ol>
    </main>
  );
}
