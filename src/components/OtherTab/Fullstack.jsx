import React from "react";

const Fullstack = () => {
  return (
    <>
      <>
        <div className="aboutme-container flex flex-col gap-8 overflow-y-scroll">
          <div className="aboutme-bottom flex flex-col gap-3">
            <span className="project-title">Udyan Saathi</span>
            <span>
              The Web-Based Environment Monitoring System provides real-time
              insights into Air Quality Index (AQI), Water Quality Index (WQI),
              and weather conditions across locations. It features an AI-powered
              air quality forecasting model with 98.98% accuracy, helping users
              predict pollution trends. An SOS alert system, based on the Graded
              Response Action Plan (GRAP), warns about hazardous environmental
              conditions.
              <br />
              <br />
              The platform offers interactive visualizations like heat maps, bar
              graphs, and line charts for easy data interpretation. By analyzing
              historical data, it provides valuable insights into long-term air
              and water quality trends. This system helps individuals and
              policymakers make informed decisions, promoting a cleaner,
              healthier future.
              <br />
            </span>

            <a
              href="https://github.com/NikhilSai5/SIH-UdyanSathi"
              className="gh-l text-blue underline"
            >
              Github Link
            </a>
            <br />

            <img src="/images/project/ud-saathi/1.jpg" alt="Slide 1" />
            <img
              src="/images/project/ud-saathi/3.jpg"
              alt="Slide 2"
              className="bt"
            />

            <span className="project-title">Fit AI</span>
            <span>
              FitAI revolutionizes personalized fitness using AI-driven
              real-time posture correction, customized workout plans, and injury
              prevention to enhance training efficiency. By analyzing user
              movements, it provides instant feedback, ensuring proper form and
              reducing injury risks. The platform tailors workout plans to
              individual fitness levels and goals, making fitness more
              accessible and effective.
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

            <span className="project-title">Automated Podcast</span>
            <span>
              The Automated Podcast project transforms written content into
              engaging audio, enabling users to consume information
              effortlessly. It utilizes web scraping to extract content,
              summarization to retain key details, and text-to-speech conversion
              for high-quality audio output. The system follows a microservices
              architecture for scalability and employs Redis for caching and
              MongoDB for data storage. Users simply provide a URL to receive an
              audio file ready for playback.
              <br />
              <br />
              For security, Auth0 manages authentication. Built using Puppeteer,
              OpenAI API, and Google TTS, this project bridges the gap between
              text and audio consumption. While deployment faced limitations due
              to free API constraints, it was a valuable learning experience.
              <br />
            </span>
            <a
              href="https://github.com/NikhilSai5/Automated-Podcast"
              className="gh-l text-blue underline"
            >
              Github Link
            </a>
            <br />

            <img src="/images/project/AP/1.jpg" alt="Slide 1" />
            <img src="/images/project/AP/3.jpg" alt="Slide 2" className="bt" />

            <span className="project-title">ShopNest</span>
            <span>
              The project focused on developing an interactive e-commerce
              platform that combines traditional fixed-price purchases with a
              bidding process for selling and buying products. This unique
              feature aims to enhance user engagement by offering more
              flexibility in transactions.
              <br />
              <br />
              The platform provides users with the opportunity to sell items
              through auctions, creating a dynamic and competitive environment.
              Buyers can engage in real-time bidding, allowing them to acquire
              products at potentially lower prices while creating excitement.
              <br />
              <br />
              The ultimate goal was to offer a more dynamic marketplace
              experience, encouraging interaction between buyers and sellers
              while increasing user participation and satisfaction.
            </span>
            <a
              href="https://github.com/NikhilSai5/ShopNests"
              className="gh-l text-blue underline"
            >
              Github Link
            </a>
            <br />

            <img src="/images/project/SN/1.jpg" alt="Slide 1" />
            <img src="/images/project/SN/2.jpg" alt="Slide 2" className="bt" />
          </div>
        </div>
      </>
    </>
  );
};

export default Fullstack;
