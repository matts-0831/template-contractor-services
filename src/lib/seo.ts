import { site } from "@/lib/site";

export function getSiteUrl() {
  const configured = site.siteUrl.replace(/\/$/, "");
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

  if (configured && !configured.includes("yourbusiness.com")) {
    return configured;
  }

  if (vercelHost) {
    return `https://${vercelHost.replace(/^https?:\/\//, "")}`;
  }

  return configured;
}

export const indexablePaths = ["/"] as const;

export function absoluteUrl(path = "/") {
  const origin = getSiteUrl();
  if (path === "/") return origin;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}
