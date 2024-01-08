import hero from "../assets/image/hero.png";
import animation from "../assets/animation/emoji.json";
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
      title: "Aesthetic Notes: Elevate Your Learning Experience",
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
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria xixixixixi",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#DF826C",
  },
  {
    title: "Clément Chapillon",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#F8FFD2",
  },
  {
    title: "Zissou",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#D0F288",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#8ADAB2",
  },
];
