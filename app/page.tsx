import Navbar from "@/components/Navbar";
import { AbstractIntlMessages, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const message: AbstractIntlMessages = await getMessages({ locale });
  const title = message.appName;
  return {
    title,
  };
}

export default function Home() {
  const t = useTranslations("mainPage");
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="p-4 flex flex-col gap-4">
        <div>{t("section_1")}</div>
        <div>{t("section_2")}</div>
      </div>
    </div>
  );
}
