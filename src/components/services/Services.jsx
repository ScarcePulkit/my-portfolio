import { useRef } from "react";
import "./services.scss";
import { delay, m, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  visible: (i)=> ({
    opacity: 1,
    transition: { delay: i * 0.2 }
  }),
  hidden: {opacity: 0},
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const items = ["Data Structures and Algorithms", "Database Management Systems", "Computer Networks", "Game Theory & Applications", "Discrete Mathematics", "Theory of Computation"]
  const items2 = ["Object Oriented Programming", "Machine Learning", "Operating Systems","Computer Graphics", "Compiler Construction", "Logic in Computer Science"]
  const softwareEngineerItems = [ 
    "Worked on AI-driven hiring solutions by building intelligent agents using Langraph and LangChain, reducing manual intervention in recruitment processes.",
    "Automated email notifications using DAG, delivering timely updates on candidate status and ownership details",
    "Managed on-call tickets to streamline issue resolution and provide efficient support for the Talent Acquisition"
  ]

  const internItems = [ 
    "Designed CSV schema and implemented end-to-end file ingestion feature reducing manual data entry time for users",
    "Enhanced the approval workflow by implementing improvements, optimizing processes for greater efficiency",
    "Achieved unitest coverage of up to 99% and playwright tests ensuring comprehensive testing and robust code quality"
  ]

  const internItems2 = [
    "Designed and incorporated an efficient N-grams algorithm for analyzing and measuring similarity between documents",
    "Improved plagiarism detection accuracy by 10% compared to traditional methods, validated through rigorous testing on diverse multilingual datasets",
    "Reduced manual verification time by 50% using easy-to-understand visuals, making it faster to spot copied content in documents"
  ]

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="flex-container">
          <motion.div className="main-block" style={{marginLeft: "100px"}}>
            <motion.h1 className="title">Education</motion.h1>
            <br/>
            <motion.div>
              <motion.h2 whileHover={{color:"orange"}}>Birla Institute of Technology and Science, Pilani</motion.h2>
              <motion.h4 className="timeline">2020 - 2024</motion.h4>
              <motion.div className="innerDiv">
                <p><em>B.E Computer Science, Minor in Computational Economics</em></p>
                <p>CGPA: 9.01/10</p>
              </motion.div>
              <br/>
              <h3>Courses</h3>
              <motion.div className="courses" >
                <motion.ul initial="hidden" animate="visible" variants={variants}>
                  {items.map((item,i) => (
                    <motion.li variants={variants} key={item} custom={i} className="listClass">
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.ul initial="hidden" animate="visible" variants={variants}>
                  {items2.map((item,i) => (
                    <motion.li variants={variants} key={item} custom={i} className="listClass">
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
            <br/>
            
            <motion.h1 className="title">Technical Skills</motion.h1>
            <br/>
            <motion.div>
              <motion.h2 style={{marginBottom: "4px"}}>Programming Languages</motion.h2>
              <motion.div className="innerDiv">
                <p><em>C/C++, Java, Python, SQL, JavaScript, HTML/CSS</em></p>
              </motion.div>
            </motion.div>
            <br/>
            <motion.div>
              <motion.h2 style={{marginBottom: "4px"}}>Frameworks, Libraries & Tools:</motion.h2>
              <motion.div className="innerDiv">
                <p><em>React, Flask, Git, Github, LaTeX, Node.js, Express.js, Postman, REST APIs</em></p>
              </motion.div>
            </motion.div>
            <br/>
            <br/>
            
            <motion.h1 className="title">Coding Profiles</motion.h1>
            <motion.div style={{marginTop: "8px"}}>
              {/* <motion.div className="innerDiv"> */}
                <p><em>LeetCode</em>: <a style={{ textDecoration: "none", color: "orange"}} href="https://leetcode.com/u/admirerider12/" target="_blank" rel="noopener noreferrer">admirerider</a></p>
                <p><em>Codeforces</em>: <a style={{textDecoration: "none", color: "orange"}} href="https://codeforces.com/profile/admirerider" target="_blank" rel="noopener noreferrer">admirerider (Specialist)</a></p>
                
              {/* </motion.div> */}
            </motion.div>
            <br/>
            {/* <motion.div>
              <motion.h2 style={{marginBottom: "4px"}}>Achievements</motion.h2>
              <motion.div className="innerDiv">
                <p><em>LeetCode: 1000+ problems solved, 1800+ rating</em></p>
                <p><em>Codeforces: 1400+ rating</em></p>
                <p><em>CodeChef: 4★ rating</em></p>
              </motion.div>
            </motion.div> */}
          </motion.div>

        <motion.div 
          className="main-block"
          style={{marginTop: "0px"}}
        >
          <motion.h1 className="title">Experience</motion.h1>
          <br/>
          
          <motion.div>
            <motion.h2 style={{marginBottom: "4px"}} whileHover={{color:"orange"}}>Eightfold AI</motion.h2>
            <motion.h4 className="timeline">Aug 2024 - Present</motion.h4>
            <motion.div className="innerDiv">
              <p><em>Software Engineer</em></p>
            </motion.div>
        
            <motion.div className="responsibilites">
              <motion.ul initial="hidden" animate="visible" variants={variants} className="temp">
                {softwareEngineerItems.map((item,i) => (
                  <motion.li variants={variants} key={item} custom={i} className="listClass">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <br/>
            <motion.h4 className="timeline">Jan 2024 - July 2024</motion.h4>
            <motion.div className="innerDiv">
              <p><em>Engineering Intern</em></p>
            </motion.div>
        
            <motion.div className="responsibilites">
              <motion.ul initial="hidden" animate="visible" variants={variants} className="temp">
                {internItems.map((item,i) => (
                  <motion.li variants={variants} key={item} custom={i} className="listClass">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
          <br/>
          <motion.div>
            <motion.h2 style={{marginBottom: "4px"}} whileHover={{color:"orange"}}>Indira Gandhi Center for Atomic Research</motion.h2>
            <motion.h4 className="timeline">May 2022 - July 2022</motion.h4>
            <motion.div className="innerDiv">
              <p><em>Research Intern</em></p>
            </motion.div>
            <motion.div className="responsibilites">
              <motion.ul initial="hidden" animate="visible" variants={variants} className="temp">
                {internItems2.map((item,i) => (
                  <motion.li variants={variants} key={item} custom={i} className="listClass">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
