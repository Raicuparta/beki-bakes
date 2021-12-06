import { Facebook, WhatsApp, Instagram } from "@mui/icons-material";

export const socialProfiles = [
  {
    url: "https://www.instagram.com/bekibakes",
    icon: Instagram,
    title: "Instagram",
  },
  {
    url: "https://wa.me/+34623006482",
    icon: WhatsApp,
    title: "WhatsApp",
  },
  {
    url: "https://www.facebook.com/bekibakeshop",
    icon: Facebook,
    title: "Facebook",
  },
] as const;
