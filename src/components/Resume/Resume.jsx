src/components/Resume/Resume.jsx
import React from 'react'
import './Resume.css'
import resumePDF from '../../assets/resume/Sabona_Marara_Resume.pdf.pdf'

const Resume = () => {
  return (
    <div className='resume-page'>
      <div className="resume-container">

        {/* Header */}
        <div className="resume-top">
          <div>
            <h1>SABONA MARARA</h1>
            <p className="resume-title">Full-Stack Web Developer | Computer Science Graduate</p>
          </div>
          <a className='resume-download-btn' href={resumePDF} download="Sabona_Marara_Resume.pdf">
            Download PDF
          </a>
        </div>

        <p className="resume-contact">
          Shagar, Oromia, Ethiopia &nbsp;|&nbsp; +251 928 860 911 &nbsp;|&nbsp; sabonamarara53@gmail.com &nbsp;|&nbsp;
          <a href="https://linkedin.com/in/sabona-marara-113b4b2b8" target="_blank" rel="noreferrer"> linkedin.com/in/sabona-marara-113b4b2b8</a> &nbsp;|&nbsp;
          <a href="https://sabonawebsite-com.github.io/fastprofitweb" target="_blank" rel="noreferrer"> sabonawebsite-com.github.io/fastprofitweb</a>
        </p>

        <hr />

        <section>
          <h2>Summary</h2>
          <p>
            Computer Science graduate (BS, Borana University) with hands-on experience building
            full-stack web applications using React, Python/Flask, and Node.js. Strong foundation
            in networking and IT support from an internship at OSTA, paired with self-driven
            certifications in AI, Data Science, and Android Development. Looking to apply practical
            software development skills to a junior developer role.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-box"><h3>Frontend</h3><p>HTML5, CSS3, JavaScript, React</p></div>
            <div className="skill-box"><h3>Backend</h3><p>Python, Flask, Node.js</p></div>
            <div className="skill-box"><h3>Database</h3><p>SQL, SQLite, MongoDB</p></div>
            <div className="skill-box"><h3>Tools</h3><p>Git, GitHub, VS Code, MS Office</p></div>
            <div className="skill-box"><h3>Other</h3><p>Networking, Problem Solving</p></div>
            <div className="skill-box"><h3>Soft Skills</h3><p>Teamwork, Communication, Leadership</p></div>
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-title">Online Livestock Ordering System</span>
              <span className="entry-org"> | Personal / Academic Project</span>
            </div>
            <ul>
              <li>[Replace with detail] Built a full-stack web platform using React, Flask, and SQLite enabling buyers to browse and place livestock orders online.</li>
              <li>[Replace with detail] Implemented user authentication, order tracking, and an admin dashboard for managing listings.</li>
            </ul>
          </div>
          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-title">Online Quiz System</span>
              <span className="entry-org"> | Personal / Academic Project</span>
            </div>
            <ul>
              <li>[Replace with detail] Developed a web-based quiz application with JavaScript and Python/Flask supporting multiple question types and automatic scoring.</li>
              <li>[Replace with detail] Designed a database schema in SQLite to store questions, user responses, and results.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Professional Experience</h2>
          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-title">IT / Networking Intern</span>
              <span className="entry-org"> | OSTA</span>
            </div>
            <ul>
              <li>Assisted with computer network setup and maintenance for office infrastructure.</li>
              <li>Troubleshot networking issues, reducing recurring connectivity downtime.</li>
              <li>Collaborated with technical teams to support day-to-day IT operations.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Certifications</h2>
          <ul>
            <li>Artificial Intelligence — Five Million Ethiopian Coders Initiative, in collaboration with Udacity</li>
            <li>Data Science — Five Million Ethiopian Coders Initiative, in collaboration with Udacity</li>
            <li>Android Development — Five Million Ethiopian Coders Initiative, in collaboration with Udacity</li>
            <li>Programming — Five Million Ethiopian Coders Initiative, in collaboration with Udacity</li>
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-title">Bachelor of Science in Computer Science</span>
              <span className="entry-org"> | Borana University</span>
              <span className="entry-dates">2021 – 2025</span>
            </div>
            <ul>
              <li>CGPA: 3.56</li>
              <li>Exit Exam Score: 70%</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Languages</h2>
          <p>Afan Oromo (Native) &nbsp;|&nbsp; English (Professional) &nbsp;|&nbsp; Amharic (Intermediate)</p>
        </section>

        <section>
          <h2>Interests</h2>
          <p>Web Development, Artificial Intelligence, Learning New Technologies, Open Source Projects</p>
        </section>

      </div>
    </div>
  )
}

export default Resume