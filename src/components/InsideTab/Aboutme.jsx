import React from "react";

const Aboutme = () => {
  return (
    <>
      <div className="aboutme-container flex flex-col gap-8 overflow-y-scroll">
        <div className="aboutme-top flex">
          <p className="aboutme-top-para">
            <h1>HELLO,</h1>
            I’m Nikhil Sai Manam, a passionate B. Tech student specializing in
            Blockchain, with a strong background in software development,
            machine learning, and cloud technologies. I’ve had the opportunity
            to work on diverse projects, from environmental monitoring systems
            to AI-powered podcast converters, gaining hands-on experience with
            Django, React, SQL, and D3.js.I thrive in building scalable,
            efficient solutions and am always excited to learn new technologies.
          </p>
          <div className="aboutme-img1-container">
            <img src="/images/o1.jpg" alt="" />
          </div>
        </div>
        <div className="aboutme-bottom flex flex-col ">
          <h1 className="achievements">Skills</h1>
          <h2>Programming Languages - </h2>
          <p>JavaScript,TypeScript , C/C++, Python</p>
          <br />
          <h2>Web Development - </h2>
          <p>
            React, Nodejs, Express, Mongodb, Django, D3.js, React Three Fiber,
            SQL, Prisma, Redis, Tailwind CSS
          </p>
          <br />
          <h2>Blockchain</h2>
          <p>Solidity, Ether.js, Alchemy API, IPFS </p>
          <br />
          <h2>AI/ML</h2>
          <p>Python, Pandas, Numpy, OpenCV, Langchain </p>
          <br />
          <h2>Cloud</h2>
          <p>AWS, Google Cloud </p>
          <br />
          <h2>Tools</h2>
          <p>Git/Github, Postman, Auth0, Docker </p>
          <br />
          <br />
          <h1 className="achievements">Achievements</h1>
          <span>
            <li>
              1st place in Smart India Hackathon (SIH): I led my team to victory
              in the prestigious Smart India Hackathon, where we developed a
              unique solution that addressed real-world challenges with a high
              level of technical and functional excellence.
            </li>
          </span>
          <br />
          <span>
            <li>
              Best Investor Pitch Award issued by the Ministry of Education: Our
              project received the Best Investor Pitch Award, which recognized
              our ability to present innovative solutions effectively and
              attract potential investors.
            </li>
          </span>
          <br />
          <span>
            <li>
              3rd place in Microsoft Bennett Hackathon: We secured 3rd place in
              the highly competitive Microsoft Bennett Hackathon, where our
              solution stood out among numerous teams, demonstrating our
              technical prowess and problem-solving skills.
            </li>
          </span>
          <br />
          <span>
            <li>
              Winner of Google AI Campus Fest Award at Bennett University: Our
              team, Udyan Sathi, won the Google AI Campus Fest held at Bennett
              University, where we were recognized by Mrs. Neelam Pawar (Google
              Cloud) for our exceptional AI-driven project. We were selected
              from over 150 competing projects, highlighting the innovative
              nature of our work.
            </li>
          </span>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
