import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "الريفي لنقل العفش",
    description: "شركة نقل أثاث رائدة في المملكة العربية السعودية",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF7",
    theme_color: "#1E3A5F",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}