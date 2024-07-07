import {
  IconBrandFigma,
  IconBrandGmail,
  IconBrandNotion,
  IconBrandSlack,
  IconBrandZoom,
  IconBrandGraphql,
  IconBrandNodejs,
  IconBrandAws,
} from "@tabler/icons-react";

export const apps = [
  {
    name: "Gmail",
    logo: <IconBrandGmail />,
    connected: false,
    desc: "요청시 GMAIL, 등 각종 시스템 integration 가능",
    href: "",
  },
  {
    name: "GraphQL",
    logo: <IconBrandGraphql />,
    connected: true,
    desc: "API 접목 쿼리 언어 사용 예정",
    href: "https://www.apollographql.com/docs/",
  },
  {
    name: "Figma",
    logo: <IconBrandFigma />,
    connected: true,
    desc: "Modu Management - 아키텍쳐 초안. 그래프큐엘 베이스, 1페이즈 1페이즈",
    href: "https://www.figma.com/design/cexBMLPnj1X6CzRNCrJ9kW/Modu-Management?node-id=2202-1638&t=hvsOU2Y65KY4aL9N-1",
  },

  {
    name: "Node",
    logo: <IconBrandNodejs />,
    connected: true,
    desc: "Nestjs - 자바스크립트 베이스 프레임워크",
    href: "https://nestjs.com/",
  },
  {
    name: "AWS",
    logo: <IconBrandAws />,
    connected: true,
    desc: "호스팅, 등등 기타. ",
    href: "",
  },
  // {
  //   name: "Stripe",
  //   logo: <IconBrandStripe />,
  //   connected: false,
  //   desc: "Easily manage Stripe transactions and payments.",
  // },
  // {
  //   name: "Gmail",
  //   logo: <IconBrandGmail />,
  //   connected: true,
  //   desc: "Access and manage Gmail messages effortlessly.",
  // },
  // {
  //   name: "Medium",
  //   logo: <IconBrandMedium />,
  //   connected: false,
  //   desc: "Explore and share Medium stories on your dashboard.",
  // },
  // {
  //   name: "Skype",
  //   logo: <IconBrandSkype />,
  //   connected: false,
  //   desc: "Connect with Skype contacts seamlessly.",
  // },
  // {
  //   name: "Docker",
  //   logo: <IconBrandDocker />,
  //   connected: false,
  //   desc: "Effortlessly manage Docker containers on your dashboard.",
  // },
  // {
  //   name: "GitHub",
  //   logo: <IconBrandGithub />,
  //   connected: false,
  //   desc: "Streamline code management with GitHub integration.",
  // },
  // {
  //   name: "GitLab",
  //   logo: <IconBrandGitlab />,
  //   connected: false,
  //   desc: "Efficiently manage code projects with GitLab integration.",
  // },
  // {
  //   name: "Discord",
  //   logo: <IconBrandDiscord />,
  //   connected: false,
  //   desc: "Connect with Discord for seamless team communication.",
  // },
  // {
  //   name: "WhatsApp",
  //   logo: <IconBrandWhatsapp />,
  //   connected: false,
  //   desc: "Easily integrate WhatsApp for direct messaging.",
  // },
];
