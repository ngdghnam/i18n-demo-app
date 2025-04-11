// eslint-disable-next-line @typescript-eslint/no-require-imports
const createNextIntPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntPlugin("./i18n/requests.ts");

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
