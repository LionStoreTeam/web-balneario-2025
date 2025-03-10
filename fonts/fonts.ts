import { DynaPuff, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const dynaPuff = DynaPuff({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
