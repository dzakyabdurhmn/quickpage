import hero from "../assets/image/hero.png";
import animation from "../assets/animation/clock.json";
//
import adobe from "../assets/image/company/adobe.png";
import amazone from "../assets/image/company/amazone.png";
import asana from "../assets/image/company/asana.png";
import evernote from "../assets/image/company/evernote.png";
import google from "../assets/image/company/google.png";
import microsoft from "../assets/image/company/microsoft.png";
import paypal from "../assets/image/company/paypal.png";
import shopify from "../assets/image/company/shopify.png";
import spotify from "../assets/image/company/spotify.png";
import uber from "../assets/image/company/uber.png";

//

import lottieDocs from "@/assets/animation/docs.json";
import lottieDoor from "@/assets/animation/dorr.json";
import lottieAstro from "@/assets/animation/docsring.json";
import lottieCheckDocs from "@/assets/animation/checkdocs.json";

export const isProduction = true;

// This is a site information

export const sitename = "just for development xixixi";
export const sitedescription = "just for development";

export const siteurl = "http://localhost:3000";

// This is a hero section
export const name = "MEETING ALL STUDENT NEEDS IN ONE GRASP";
export const description =
  " One-stop platform for all student learning resources, empowering them to thrive in school.";

export const heroImage = hero;

// This is a feature section

export const lottie = animation;

export const featureContent = () => {
  return [
    {
      id: 0,
      header: "Read this",
      heading: "Features that  you'll  ever need.",
      description:
        "Innovative platform facilitating collaboration and exchange of assignments among students from various schools. With a widely accessible assignment upload feature, this application enables students to share projects, assignments, and relevant information with their peers from different schools. Here are some key features that make",
    },
    {
      id: 1,
      label: "Send assignment",
      title: "Cross-School Task Exchange Hub",
      content:
        "Innovative platform facilitating collaboration and exchange of assignments among students from various schools. With a widely accessible assignment upload feature, this application enables students to share projects, assignments, and relevant information with their peers from different schools. Here are some key features that make",
    },
    {
      id: 2,
      label: "Notation",
      title: "Elevate Your Learning Experience",
      content:
        "The Aesthetic Notes feature in this application provides students with a more immersive experience beyond traditional note-taking. With the ability to create aesthetically pleasing notes, students can express their creativity while enhancing the effectiveness of their learning.",
    },
    {
      id: 3,
      label: "Discussion",
      title: "Interactive Knowledge Exchange Hub",
      content:
        "Within this application, it bridges students to a dedicated interactive space designed for in-depth exploration and interest-based discussions. Meticulously connecting individuals based on their interests and expertise, this feature establishes a foundation for meaningful knowledge exchange.",
    },
    {
      id: 4,
      label: "Connected",
      title: "Empowering Learning Communities",
      content:
        "This application forms communities based on interests and talents, creating a space for deep knowledge exchange and collaboration. All features are carefully integrated, crafting a comprehensive learning experience without overlooking privacy. The application becomes a valuable tool in supporting personal growth and more meaningful learning.",
    },
  ] as const;
};

export const accordion = () => {
  return [
    {
      id: 1,
      label: "Send assignment",
      lottie: 3,
      content:
        "Innovative platform facilitating collaboration and exchange of assignments among students from various schools. With a widely accessible assignment upload feature, this application enables students to share projects, assignments, and relevant information with their peers from different schools. Here are some key features that make",
    },
    {
      id: 2,
      label: "Notation",
      content:
        "The Aesthetic Notes feature in this application provides students with a more immersive experience beyond traditional note-taking. With the ability to create aesthetically pleasing notes, students can express their creativity while enhancing the effectiveness of their learning.",
    },
    {
      id: 3,
      label: "Discussion",
      content:
        "Within this application, it bridges students to a dedicated interactive space designed for in-depth exploration and interest-based discussions. Meticulously connecting individuals based on their interests and expertise, this feature establishes a foundation for meaningful knowledge exchange.",
    },
    {
      id: 4,
      label: "Connected",
      content:
        "This application forms communities based on interests and talents, creating a space for deep knowledge exchange and collaboration. All features are carefully integrated, crafting a comprehensive learning experience without overlooking privacy. The application becomes a valuable tool in supporting personal growth and more meaningful learning.",
    },
  ] as const;
};

export const projects = [
  {
    // @ts-ignore
    lottie: lottieDocs,
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria xixixixixi",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#7F58AF",
  },
  {
    // @ts-ignore
    lottie: lottieDoor,
    title: "Clément Chapillon",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#64C5EB",
  },
  {
    // @ts-ignore
    lottie: lottieAstro,
    title: "Zissou",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#E84D8A",
  },
  {
    // @ts-ignore
    lottie: lottieCheckDocs,
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#FEB326",
  },
];

export const company = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857789/company/yslmkzamhtmiftwya0u6.png",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857789/company/bl2krhgxhshfnbljzyxl.png",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857789/company/zpk7yukyz4l8uxyclc7c.png",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857789/company/sjtreillctteunctbmri.png",
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/bfcqjcy6nq9a14gqfegh.png",
  },
  //
  {
    id: 1,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/ehrdtgnu8xwx0ak70oai.png",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/dpphaotrcpvfe66itpg2.png",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/j1zvk0vzgpst9uncmomj.png",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/y535jmmaxnwqevkinzuz.png",
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/r69ioxchmbunfpkfjyt9.png",
  },
];

export const companyRight = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/ehrdtgnu8xwx0ak70oai.png",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/dpphaotrcpvfe66itpg2.png",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/j1zvk0vzgpst9uncmomj.png",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/y535jmmaxnwqevkinzuz.png",
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/r69ioxchmbunfpkfjyt9.png",
  },
  //
  {
    id: 1,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857789/company/yslmkzamhtmiftwya0u6.png",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857789/company/bl2krhgxhshfnbljzyxl.png",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857789/company/zpk7yukyz4l8uxyclc7c.png",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857789/company/sjtreillctteunctbmri.png",
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/derwgb2aj/image/upload/v1704857788/company/bfcqjcy6nq9a14gqfegh.png",
  },
];
