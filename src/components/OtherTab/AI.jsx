import React from "react";

const AI = () => {
  return (
    <>
      <div className="aboutme-container flex flex-col gap-8 overflow-y-scroll">
        <div className="aboutme-bottom flex flex-col gap-3">
          <span className="project-title">Fit AI</span>
          <span>
            FitAI revolutionizes personalized fitness using AI-driven real-time
            posture correction, customized workout plans, and injury prevention
            to enhance training efficiency. By analyzing user movements, it
            provides instant feedback, ensuring proper form and reducing injury
            risks. The platform tailors workout plans to individual fitness
            levels and goals, making fitness more accessible and effective.
            <br />
            <br />
            With AI-powered insights, FitAI helps users maximize results while
            minimizing errors, bridging the gap between professional coaching
            and home workouts. Whether a beginner or an athlete, it offers a
            smarter, data-driven approach to fitness, ensuring a personalized
            and safe training experience for everyone.
            <br />
          </span>
          <a
            href="https://github.com/Microsoft-Bennett-Hackathon/website"
            className="gh-l text-blue underline"
          >
            Github Link
          </a>

          <br />

          <img src="/images/project/FAI/1.jpg" alt="Slide 1" />
          <img src="/images/project/FAI/3.jpg" alt="Slide 2" />
          <img src="/images/project/FAI/2.jpg" alt="Slide 2" className="bt" />

          <br />

          <span className="project-title">Learnify</span>
          <span>
            I built an AI-powered automatic course generator that transforms any
            searched topic into a complete, structured learning experience. When
            a user enters a query, the system dynamically creates a roadmap
            breaking down the main topic into essential subtopics. For each
            subtopic, we scrape and analyze content from the top 5 reputable
            websites, then use advanced language models to generate high-quality
            learning material. This ensures learners receive accurate and
            up-to-date information tailored to their query.
            <br />
            <br />
            Taking it a step further, the platform uses a custom ML pipeline to
            convert the generated content into engaging educational videos,
            making learning more visual and accessible. Each subtopic also comes
            with personalized quizzes to reinforce understanding and track
            progress. The entire system is built using the MERN stack, Tailwind
            CSS for responsive UI, Flask and LangChain for backend AI workflows,
            and a variety of other cutting-edge tools. This project reflects my
            passion for blending full-stack development with AI to create
            intelligent, user-centered education platforms.
            <br />
          </span>
          <a
            href="https://github.com/Hackaccino-2025-hackathon/Website"
            className="gh-l text-blue underline"
          >
            Github Link
          </a>

          <br />

          <img src="/images/project/learnify/1.png" alt="Slide 1" />
          <img src="/images/project/learnify/3.png" alt="Slide 2" />
          <img
            src="/images/project/learnify/4.png"
            alt="Slide 2"
            className="bt"
          />
          <img
            src="/images/project/learnify/5.png"
            alt="Slide 2"
            className="bt"
          />
        </div>
      </div>
    </>
  );
};

export default AI;
