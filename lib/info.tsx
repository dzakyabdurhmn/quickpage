import hero from "../assets/image/hero.png";
import animation from "../assets/animation/clock.json";
//

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
export const name = "KOLABORASI DENGAN PSEUDONIM YANG AUTENTIK.";
export const description =
  "Mempersiapkan diri untuk menjadi anggota Pelajar Muhammadiyah dan bergabung dalam komunitas di mana setiap keahlian diapresiasi tanpa batasan.";

export const heroImage = hero;

// This is a feature section

export const lottie = animation;

export const featureContent = () => {
  return [
    {
      id: 0,
      header: "Edukasi Harmoni Muhammadiyah",
      heading: "Fitur yang kami sediakan",
      description:
        "Keterlibatan aktif dalam belajar melalui tugas-tugas online yang terhubung secara dinamis, membawa pengalaman pembelajaran personal dan teradaptasi untuk setiap anggota Kumonitas Muhammadiyah.  Melampaui batas platform, fitur ini menghadirkan Kumonitas Muhammadiyah sebagai jaringan komunitas pendidikan yang saling terhubung, memfasilitasi pertukaran ide, pengalaman, dan kolaborasi yang menginspirasi.",
    },
    {
      id: 1,
      label: "Interaktif",
      title: "Pusat Pertukaran Tugas Lintas Sekolah",
      content:
        "Kumonitas Muhammadiyah ini memperkenalkan konsep tugas pendidikan yang interaktif dan relevan. Setiap anggota dapat mengakses dan menyelesaikan tugas secara online, memberikan pengalaman pembelajaran yang terpersonal dan sesuai dengan perkembangan kemampuan masing-masing.",
    },
    {
      id: 2,
      label: "Catatan",
      title: "Tingkatkan Pengalaman Belajar Anda",
      content:
        "Dalam perjalanan menuju optimalisasi pendidikan, Kumonitas Muhammadiyah menyediakan fitur notasi/catatan pembelajaran yang mendalam. Anggota dapat mencatat pemahaman, ide, dan pertanyaan, memfasilitasi pemahaman yang lebih baik dan kolaborasi dalam proses pembelajaran.",
    },
    {
      id: 3,
      label: "Diskusi",
      title: "Pusat Pertukaran Pengetahuan Interaktif",
      content:
        " Mendorong pertukaran gagasan dan pandangan, Kumonitas Muhammadiyah membawa konsep diskusi berbasis pemikiran kritis. Diskusi online yang terbimbing memungkinkan anggota untuk menjelajahi topik pendidikan terkini, mengasah keterampilan berpikir kritis, dan membangun perspektif yang luas.",
    },
    {
      id: 4,
      label: "Terhubung",
      title: "Memberdayakan Komunitas Belajar",
      content:
        "Kumonitas Muhammadiyah ini tidak hanya sebuah platform, tetapi juga jaringan komunitas pendidikan yang erat terhubung. Melalui fitur ini, anggota dapat berbagi pengalaman, memperoleh wawasan baru, dan memperluas jejaring dalam upaya bersama mencapai standar pendidikan yang unggul dan berkemajuan.",
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
    title: "Identitas Unggul Muhammadiyah",
    description:
      "Mengacu pada ciri khas sekolah Muhammadiyah, ISMUBA menonjolkan diri sebagai pilar pembelajaran unggul yang menjadi daya tarik utama bagi orangtua. Mata pelajaran ISMUBA di dalam kurikulum sekolah Muhammadiyah dianggap mampu membekali siswa dengan keilmuan dan akhlak yang baik.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#F6B17A",
  },
  {
    // @ts-ignore
    lottie: lottieDoor,
    title: "Transformatif dan Terintegrasi dengan Kehidupan Nyata",
    description:
      "Pembelajaran ISMUBA di sekolah Muhammadiyah bukan hanya memberikan bekal teori yang dapat diaplikasikan dalam berbagai situasi, tetapi juga menekankan transformasi pribadi dan sosial.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#AE445A",
  },
  {
    // @ts-ignore
    lottie: lottieAstro,
    title: "Pendidikan Holistik Integratif",
    description:
      "Konsep pendidikan holistik di sekolah Muhammadiyah menekankan pada keutuhan peserta didik, mengasumsikan bahwa setiap individu memiliki potensi untuk berkembang. Pendekatan ini mencakup aspek moral, etis, religius, psikologis, filosofis, dan sosial secara menyeluruh, membentuk hubungan yang kokoh antara peserta didik dan lingkungannya.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#662549",
  },
  {
    // @ts-ignore
    lottie: lottieCheckDocs,
    title: "Penguatan Ideologi dan Kaderisasi",
    description:
      "ISMUBA diarahkan sebagai wahana untuk penguatan ideologi dan kaderisasi Muhammadiyah. Melalui pendekatan kreatif, inovatif, dan contextual teaching and learning.",
    src: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702880068/paralax-assets/x8ctsedtpaoyu7ek2eqh.svg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#451952",
  },
];

export const company = [
  {
    id: 1,
    logo: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg",
  },
  {
    id: 2,
    logo: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg",
  },
  {
    id: 3,
    logo: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg",
  },
  {
    id: 4,
    logo: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg",
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799205/company-lorem/fejuatxvuylb7vcaytrf.png",
  },
  {
    id: 1,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799206/company-lorem/x5lanwhznyqxxpnorkbp.png",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799206/company-lorem/bksz8hhmpbzxebktqadi.png",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799205/company-lorem/gpea9v15flddve9dzrdg.png",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799205/company-lorem/sqyvc2ig8hzbfqmcsqcx.png",
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799205/company-lorem/fejuatxvuylb7vcaytrf.png",
  },
  //
];

export const companyRight = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799204/company-lorem/wuivrxid8yakautpsijf.png",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799203/company-lorem/n5uxwn4dzhxfqec7eqel.png",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799203/company-lorem/oythqjccagzev8ruypjb.png",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799203/company-lorem/nduyb5lcxgi7tp4rb0pn.png",
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799204/company-lorem/hvysd7ybzbanwkulrd9f.png",
  },
  {
    id: 1,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799204/company-lorem/wuivrxid8yakautpsijf.png",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799203/company-lorem/n5uxwn4dzhxfqec7eqel.png",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799203/company-lorem/oythqjccagzev8ruypjb.png",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799203/company-lorem/nduyb5lcxgi7tp4rb0pn.png",
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705799204/company-lorem/hvysd7ybzbanwkulrd9f.png",
  },
];
