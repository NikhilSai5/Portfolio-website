import React from "react";

const Blockchain = () => {
  return (
    <>
      <div className="aboutme-container flex flex-col gap-8 overflow-y-scroll">
        <div className="aboutme-bottom flex flex-col gap-3">
          <span className="project-title">Health-Verse</span>
          <span>
            I developed a blockchain-based Electronic Health Record (EHR) system
            that securely stores patient records, prescriptions, and test
            reports using IPFS for decentralized file storage and Ethereum
            blockchain for immutable access control. The platform is designed as
            a mobile-first application, allowing users to easily manage and
            access their complete medical history. Patients can connect directly
            with hospitals or doctors through the app, ensuring seamless
            communication and continuity of care, especially during emergencies.
            <br />
            <br />
            A key feature of the app is its ability to scan handwritten
            prescriptions and automatically extract medicine names and dosages
            using OCR and ML pipelines — though still a work in progress due to
            challenges with poor handwriting. The system allows patients to
            share their medical data instantly with authorized doctors in
            critical situations, improving response time and treatment accuracy.
            This project showcases my expertise in Web3, mobile development, and
            AI integration, as well as my commitment to solving real-world
            problems in healthcare with technology.
            <br />
          </span>
          <a
            href="https://github.com/NikhilSai5/Helthverse"
            className="gh-l text-blue underline"
          >
            Github Link
          </a>

          <br />

          <img src="/images/project/FAI/1.jpg" alt="Slide 1" />
          <img src="/images/project/FAI/3.jpg" alt="Slide 2" />
          <img src="/images/project/FAI/2.jpg" alt="Slide 2" className="bt" />
        </div>
      </div>
    </>
  );
};

export default Blockchain;
