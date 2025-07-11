import React from "react";

const Experience = () => {
  return (
    <>
      <div className="aboutme-container flex flex-col gap-8 overflow-y-scroll">
        <div className="aboutme-bottom flex flex-col gap-3">
          <span className="project-title-mid">Backend Developer Intern</span>
          <span className="project-title-mini">
            at SYINQ{" "}
            <span className="text-gray-500 text-md font-light">
              a carpooling app
            </span>
          </span>
          <span>
            <ul className="flex flex-col ml-[20px] my-[20px] list-disc">
              <li>
                Developed <strong>Find Ride</strong> and{" "}
                <strong>Offer Ride</strong> features for a carpooling
                application using <strong>Node.js</strong>,{" "}
                <strong>Prisma</strong>, and <strong>PostgreSQL</strong>.
              </li>
              <li>
                Collaborated with the team to improve the <strong>UI/UX</strong>{" "}
                of the platform, ensuring a seamless user experience.
              </li>
              <li>
                Researched, evaluated, and integrated a suitable{" "}
                <strong>Maps API</strong> to enable real-time location and route
                tracking in the app.
              </li>
              <li>
                Designed and implemented the <strong>messaging schema</strong>{" "}
                to support in-app Communication between riders and drivers.
              </li>
            </ul>
          </span>
          <a
            href="https://drive.google.com/file/d/1vBnJcHXv4wHNrK0UOuYBkvHN2KNosht6/view?usp=sharing"
            className="gh-l text-blue underline mt-[30px]"
          >
            Certificate Link
          </a>
        </div>
      </div>
    </>
  );
};

export default Experience;
