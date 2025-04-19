import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 0,
    title: "Code Pointers",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*Pt2ySS6G2FoBoThit3yQbQ.png",
    desc: "Code Pointers is a VS Code extension I created to solve a common developer frustration — keeping track of important lines of code during collaboration, debugging, or reviews. Instead of manually noting file paths and line numbers in a separate app, this tool lets you simply right-click on any line in the editor and save it. It captures the file path, line number, line content, and timestamp, and stores it in a Markdown file called code_book.md at the root of your project.Each saved entry is a clickable link that instantly navigates back to the exact line in your code, making it incredibly handy for quick context switching or revisiting previous thoughts. The extension also ensures duplicate lines aren’t saved twice and works seamlessly across all file types. This project also gave me the opportunity to dive into VS Code extension development — something I hadn’t explored before but thoroughly enjoyed building.",
    github_link: "https://github.com/ScarcePulkit/codePointerVscodeExtension",
  },
  {
    id: 1,
    title: "Cross Langauage Plagiarism Detection",
    img: "https://blog.moodlearning.com/content/images/size/w1920/2023/03/Plagarism-01-3.png",
    desc: "An efficient N-grams algorithm was designed and integrated to analyze and measure similarity between documents, significantly improving plagiarism detection accuracy by 10% compared to traditional methods. This enhancement was validated through rigorous testing on diverse multilingual datasets. Additionally, manual verification time was reduced by 50% by incorporating easy-to-understand visuals, making it faster and more intuitive to identify copied content in documents.",
    github_link: "https://github.com/ScarcePulkit/Cross-Lang-Plag-Detection",
  },
  {
    id: 2,
    title: "3D Visualisation of Hostel Room",
    img: "https://archicgi.com/wp-content/uploads/2021/04/3d-architectural-visualization-projects-7-questions-view01.jpg",
    desc: "Led the development of a detailed project in OpenGL, focused on rendering a hostel room with over 15 props, showcasing solid-colored rendering without textures. Computational geometry techniques were executed to ensure precise prop placement, and Phong rendering was seamlessly integrated to simulate lifelike light effects. Proficiency in computational geometry and camera manipulation techniques, including panning, zooming, and rolling, was demonstrated, enhancing user interaction and facilitating immersive scene exploration.",
    github_link: "https://github.com/ScarcePulkit/Hostel-Room-3D",
  },
  {
    id: 3,
    title: "Decomposition of Polygon into Convex Parts",
    img: "https://www.artsindia.com/cdn/shop/articles/Polygon_Art.png?v=1680238809",
    desc: "The implementation of a DCEL (Doubly-Connected Edge List) efficiently represented and stored decomposed convex polygons, enabling rapid access to polygon data and facilitating geometric computations. Visualizations were rendered, and coordinates for each decomposed polygon were sequentially mapped. Code organization was improved by dividing core functionality into multiple files, ensuring easier maintenance and reuse.",
    github_link: "https://github.com/ScarcePulkit/Decomposition-of-arbitrary-polygon",
  },
  {
    id: 4,
    title: "Gym Management System",
    img: "https://images.unsplash.com/photo-1649068618811-9f3547ef98fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Forayed into web development by contributing to a full-stack web application as part of a DBMS course. Implemented role-based authentication and gained experience in backend design. Facilitated seamless collaboration between frontend and backend teams while gaining hands-on experience with project lifecycle management using Git and GitHub.",
    github_link: "https://github.com/ScarcePulkit/Gym_Management_System"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.github_link}>Github link</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
