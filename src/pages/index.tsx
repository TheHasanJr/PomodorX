import * as React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import TimeSteps from "../components/timeSteps";
import { componentBackgrounds, stateNames } from "../data/data";
import "../styles/global.css";

// markup
const IndexPage = () => {
  // 0 stands for timer not started
  // 1 stands for work time
  // 2 stands for short break
  // 3 stands for long break
  const [state, setState] = useState(1);

  return (
    <React.Fragment>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Proza+Libre:wght@500;600;800&display=swap"
          rel="stylesheet"
        />
        <title>PomodorX</title>
      </Helmet>

      <main id="main" className={"flex " + stateNames[state]}>
        <div className="h-screen">
          <div className="relative mb-20">
            <svg width="400" viewBox="0 0 561 193" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M560.998 0C542.786 25.3702 503.491 59.1282 432.5 104C333.891 166.328 194.128 190.002 48.2148 193H0V0H560.998Z"
                fill={componentBackgrounds[state]}
              />
            </svg>
            <div className="absolute top-9">
              <h1 style={{ fontSize: "40px" }} className="pl-5 primary-color">
                PomodorX
              </h1>
            </div>
          </div>
          <TimeSteps state={state} />
        </div>

        <div className="flex w-full h-screen justify-center items-center">
          <div>
            {/* !!! To Be Added As A Component */}
            <h2>Loop Count:</h2>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default IndexPage;
