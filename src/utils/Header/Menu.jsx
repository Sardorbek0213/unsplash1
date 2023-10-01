import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const menu = {
  menuOne: [
    { id: 1, title: "About", path: "/about" },
    { id: 2, title: "History", path: "/history" },
    { id: 3, title: "Join the team", path: "/hiring" },
    { id: 4, title: "Blog", path: "/blog" },
    { id: 5, title: "Press", path: "/press" },
    { id: 6, title: "Contact us", path: "/contact-us" },
    { id: 7, title: "Help Center", path: "/help-center" },
  ],
  menuTwo: [
    { id: 1, title: "Developers/API", path: "/developers" },
    { id: 2, title: "Unsplash Dataset", path: "/data" },
    { id: 3, title: "Unsplash for iOS", path: "/iOS" },
    { id: 4, title: "Apps & Plugins", path: "/apps" },
  ],
  menuThree: [
    { id: 1, title: "Become a Contributor", path: "/community" },
    { id: 2, title: "Topics", path: "/t" },
    { id: 3, title: "Collections", path: "/collections" },
    { id: 4, title: "Trends", path: "/trends" },
    { id: 5, title: "Unsplash Awards", path: "/awards" },
    { id: 6, title: "Stats", path: "/stats" },
  ],
  menuIcons: [
    {
      id: 1,
      link: "https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral",
      tooltip: "Follow Unsplash on Twitter",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https://www.facebook.com/unsplash/?utm_source=unsplash&utm_medium=referral",
      tooltip: "Follow Unsplash on Facebook",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "https://www.instagram.com/unsplash/?utm_source=unsplash&utm_medium=referral",
      tooltip: "Follow Unsplash on Instagram",
      icon: <FaInstagram />,
    },
  ],
};
