import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import XIcon from '@mui/icons-material/X';
export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/skills",
    text: "Skills",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "R.Vishnu Siddhan",
    post: "Front-End Developer",
    design: "Youtuber",
    desc: "Hello! I'm R. Vishnu Siddhan, a passionate individual who recently graduated with a Bachelor's degree in Computer Science and Engineering from Sethu Institute of Technology. With a strong foundation in my academic journey, I have ventured into the dynamic world of technology, specializing as a Front-End Developer.",
  },
]
export const about = [
  {
    desc : "Hello! I'm R. Vishnu Siddhan, a passionate individual who recently graduated with a Bachelor's degree in Computer Science and Engineering from Sethu Institute of Technology. With a strong foundation in my academic journey, I have ventured into the dynamic world of technology, specializing as a Front-End Developer.",
    desc1 : "My commitment to creating seamless and visually appealing user experiences drives my work. Through my academic pursuits and hands-on experiences, I have honed my skills in web development, with a focus on front-end technologies. I thrive on turning innovative ideas into functional and aesthetically pleasing websites that leave a lasting impression.",
    desc2: "During my undergraduate studies, I gained valuable insights into the world of computer science, and I continue to stay abreast of the latest industry trends and advancements. I am excited about the limitless possibilities that technology offers and am dedicated to contributing my skills to create impactful digital solutions.",
    cover: "./images/man.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
]
export const skills = [
  {
    id: 1,
    text: "HTML defines the structure of your content, CSS determines the style and layout, and JavaScript makes the content interactive; therefore, it makes the most sense to learn them in that order. JavaScript incorporates valuable skills such as object-oriented, functional, and imperative styles of programming.",
    image: "./images/testimonials/team-1.png",
    name: "HTML, CSS, Javascript",
    post: "Basics skills for front-end development",
  },
  {
    id: 2,
    text: "Today, front-end frameworks and libraries are becoming an essential part of the modern web development stack. React. js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community.",
    image: "./images/testimonials/team-2.png",
    name: "React js",
    post: "React Framework",
  },
  {
    id: 3,
    text: "SQL databases are used to store structured data while NoSQL databases like MongoDB are used to save unstructured data.",
    image: "./images/testimonials/team-3.png",
    name: "SQL, MongoDB",
    post: "Database",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
]
export const social = [
  {
    icon: <Facebook />,
    text: "Facebook"
  },
  {
    icon: <XIcon/>,
    text: "X"

  },
  {
    icon: <Instagram />,
    text: "Instagram"

  },
  {
    icon: <YouTube />,
    text: "Youtube"

  },
]
