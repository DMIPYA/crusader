import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // ponytail: static export is sufficient for the current storefront prototype.
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/crusader" : "",
  assetPrefix: isGitHubPages ? "/crusader/" : undefined,
};

export default nextConfig;
