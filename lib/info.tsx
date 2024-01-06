import hero from "../assets/image/hero.png";
import animation from "../assets/animation/emoji.json";
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
