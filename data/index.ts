import exc from "../app/assets/exc.svg";
import team from "../app/assets/team.svg";
import res from "../app/assets/res.svg";
import qua from "../app/assets/qua.svg";
import uiux from "../app/assets/service-uiux.svg";
import web from "../app/assets/service-web.svg";
import app from "../app/assets/service-app.svg";
import testing from "../app/assets/service-testing.svg";
import management from "../app/assets/service-management.svg";
import development from "../app/assets/service-development.svg";
import experience from "../app/assets/Users.svg";
import smiley from "../app/assets/Smiley.svg";
import project from "../app/assets/Briefcase.svg";
import project1 from "../app/assets/image 18.png";
import project2 from "../app/assets/image 17.png";
import project3 from "../app/assets/image 18-1.png";
import project4 from "../app/assets/image 18-2.png";
import project5 from "../app/assets/image 18-3.png";
import project6 from "../app/assets/image 18-4.png";
import project7 from "../app/assets/image 18-5.png";
import project8 from "../app/assets/image 18-8.png";
import project9 from "../app/assets/image 18-9.png";
import project10 from "../app/assets/image 18-6.png";
import project11 from "../app/assets/image 18-7.png";
import facebook from "@/app/assets/Social.svg";
import instagram from "@/app/assets/insta.svg";
import linkedin from "@/app/assets/Social-1.svg";
import whatsapp from "@/app/assets/Group 1410094688.svg";

export const navItems = [
  { name: "Home", link: "" },
  { name: "Services", link: "#services" },
  { name: "About Us", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Blog", link: "#blog" },
  { name: "Our Team", link: "#team" },
];

export const values = [
  {
    id: 1,
    title: "Quality",
    description:
      "At Progo, we believe that quality is not just a standard but an ingrained philosophy in our daily work. We are committed to providing world-class products and services that meet our customers&apos; aspirations and add value to their businesses.",
    icon: qua,
  },
  {
    id: 2,
    title: "Teamwork",
    description:
      "We believe that teamwork is the cornerstone of success. Through collaboration, we combine expertise and skills to deliver the best solutions and achieve our clients&apos; goals effectively.",
    icon: team,
  },
  {
    id: 3,
    title: "Excellence",
    description:
      "We place excellence at the core of everything we do, always striving to deliver innovative solutions that provide real value to our clients and exceed their expectations.",
    icon: exc,
  },
  {
    id: 4,
    title: "Responsibility",
    description:
      "We take full responsibility for everything we deliver, committed to meeting our clients’ needs and achieving results that exceed expectations with professionalism and integrity.",
    icon: res,
  },
];

export const services = [
  {
    id: 1,
    title: "UI & UX Design",
    description:
      "We provide attractive and user-friendly UI designs, enhancing the user experience for smooth and enjoyable interaction.",
    icon: uiux,
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "We offer website development services, from design to launch, ensuring an exceptional user experience with fast and secure performance.",
    icon: web,
  },
  {
    id: 3,
    title: "Application Development",
    description:
      "We offer custom application development services across various platforms, ensuring high performance and an exceptional user experience that meets clients&apos; needs.",
    icon: app,
  },
  {
    id: 4,
    title: "Website and App Testing",
    description:
      "We provide website and app testing services to ensure smooth performance and error-free functionality, ensuring compatibility across all devices and platforms.",
    icon: testing,
  },
  {
    id: 5,
    title: "Project Management",
    description:
      "We provide project management services by planning, organizing, and overseeing all project stages to ensure efficient execution and timely delivery.",
    icon: management,
  },
  {
    id: 6,
    title: "Project Development",
    description:
      "We offer project development services from start to finish, focusing on turning ideas into reality while meeting client needs and ensuring the required quality.",
    icon: development,
  },
];

export const numbersAndDetails = [
  {
    id: 1,
    number: "10+",
    description: "Years of Experience",
    icon: experience,
  },
  {
    id: 2,
    number: "50+",
    description: "Happy Clients",
    icon: smiley,
  },
  {
    id: 3,
    number: "20+",
    description: "Completed Projects",
    icon: project,
  },
];

export const teamMembers = [];

export const projects = [
  {
    id: 1,
    title: "Dashboard - HR system",
    description: "Web Application",
    image: project1,
    // fullImg: project1_full,
  },
  {
    id: 2,
    title: "Restaurant Mobile App",
    description: "Mobile App",
    image: project2,
    // fullImg: project2_full,
  },
  {
    id: 3,
    title: "Hi Community",
    description: "UI/UX Design",
    image: project3,
    // fullImg: project3_full,
  },
  {
    id: 4,
    title: "E-commerce",
    description: "Mobile App",
    image: project4,
    // fullImg: project4_full,
  },
  {
    id: 5,
    title: "internship opportunity - AI",
    description: "Mobile App",
    image: project5,
    // fullImg: project5_full,
  },
  {
    id: 6,
    title: "Dashboard - LibyaZon",
    description: "Web application",
    image: project6,
    // fullImg: project6_full,
  },
  {
    id: 7,
    title: "Online store - Web",
    description: "Web Application",
    image: project7,
    // fullImg: project7_full,
  },
  {
    id: 8,
    title: "Online store - App",
    description: "Mobile App",
    image: project8,
    // fullImg: project8_full,
  },
  {
    id: 9,
    title: "Dashboard - E-commerce ",
    description: "Mobile App",
    image: project9,
    // fullImg: project9_full,
  },
  {
    id: 10,
    title: "Alarm - Pharmacies system",
    description: "Web Application",
    image: project10,
    // fullImg: project10_full,
  },
  {
    id: 11,
    title: "Dashboard - Suq Aljameuh",
    description: "Mobile App",
    image: project11,
    // fullImg: project11_full,
    isPrivate: true,
  },
  {
    id: 12,
    title: "Dashboard - Suq Aljameuh",
    description: "Mobile App",
    image: project11,
    // fullImg: project12_full,
    isPrivate: true,
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://avatar.vercel.sh/james",
  },
];

export const faq = [
  {
    id: 1,
    question:
      "Can you cover the software development process from start to finish?",
    answer: `Certainly! This is our core service. We are a specialized software design and development company, capable of providing end-to-end coverage of the software development process. We have a strong team of IT experts, including consultants, engineers, and developers, who are responsible for all aspects of software development, from gathering and deriving requirements to software design, programming, deployment, and support`,
  },
  {
    id: 2,
    question: "Can we get the software quickly?",
    answer: `Yes, you can get your software quickly. Depending on the project&apos;s size, we can deliver the Minimum Viable Product (MVP) within a timeframe ranging from one month to four months. Get in touch with us, and we&apos;ll meet your needs with professionalism and precision.`,
  },
  {
    id: 3,
    question: "What is the cost of software development?",
    answer: `The costs of developing medium to large-scale software applications typically range from $2,000 to $15,000 USD. The total cost primarily depends on the number of software features and their complexity, the number of supported core systems (web, mobile, desktop), and the type of development (custom development, low-code development, platform-based development). Additionally, the uniqueness and complexity of user interface design, the number of software integration processes, as well as requirements for availability, security, and performance, also play a significant role in determining the development cost.<br> You can request a project cost estimate for free from Progo or learn more details about software development costs in our recently published guide.`,
  },
  {
    id: 4,
    question: "What are your policies for post-launch?",
    answer: `During the first 3 months after software deployment, our team does the following:<br>Responds to your inquiries and user questions, and resolves any user issues (if any).<br>Provides support related to incident management, configuration changes, and updates. After the initial 3-month period, and upon agreement, we offer continuous maintenance and upgrades for your software, in addition to providing on-demand support from Level 1 to Level 3. We have extensive experience in fostering long-term partnerships and ensuring our clients&apos; long-term satisfaction.`,
  },
  {
    id: 5,
    question: "How do you ensure the quality of the software you provide?",
    answer: `Ensuring the Quality of Our Software We ensure the quality of the software we provide through several measures and practices, including:<li><strong>Adherence to standard development practices:</strong> We adhere to international development standards and best practices in the software development industry.</li><li><strong>Quality testing:</strong> We conduct comprehensive software testing using a variety of software testing techniques to ensure its correct performance according to the required specifications.</li><li><strong>Code review:</strong> Our team regularly reviews the written code to ensure its quality and compliance with best practices and standards.</li><li><strong>Adoption of the development lifecycle:</strong> We follow regular and organized development processes and establish clear plans for project management and monitoring.</li><li><strong>Continuous improvement:</strong> We continue to provide continuous improvements to the software based on customer feedback and user experiences.</li><li><strong>Commitment to security:</strong> We ensure the security of the software through secure development practices and continuous security testing.</li>    Through these measures and practices, we strive to deliver high-quality software that meets the needs of our customers and exceeds their expectations.`,
  },
  {
    id: 6,
    question:
      "What is the average time required to create a complete profile for my company?",
    answer: `The average time required to create your profile depends on several factors, including the size of your company and the specific market requirements relevant to your business. We provide detailed estimates based on initial consultation with our clients.`,
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "facebook",
    link: "https://www.facebook.com/progo.eg/",
    icon: facebook,
  },
  {
    id: 2,
    name: "instagram",
    link: "https://www.instagram.com/progo.eg/",
    icon: instagram,
  },
  {
    id: 3,
    name: "whatsapp",
    link: "https://wa.me/+201099402670",
    icon: whatsapp,
  },
  {
    id: 4,
    name: "linkedin",
    link: "https://www.linkedin.com/company/progo-soft/",
    icon: linkedin,
  },
  // {
  //   id: 5,
  //   name: "behance",
  //   link: "https://www.behance.net/progo_eg",
  //   icon: behance,
  // },
];
