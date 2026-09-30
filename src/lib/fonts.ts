import { Tajawal } from "next/font/google";

export const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "800", "900"],
  preload: true,
});