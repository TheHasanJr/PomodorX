import React from "react";

// The loop data is fetched from /src/components/loopInput.tsx
// and used by /src/contexts/mainContext.tsx to create timeSteps and other things...
type loopData = {
  pastLoopCount: number;
  loopCount: number;
};

// the time-step types
enum timeStepTypes {
  work = 0,
  short = 1,
  long = 2,
}

// The time-step type that will be generated by mainContext
// and to be used by timeStepMenu and time-managing
type timeStepData = {
  type: timeStepTypes;
  stepTime: number;
  startingTime: number;
};

// The interface for main-context
// interface mainContextInterface
interface mainContextInterface {
  loopData: loopData;
  runningStep: number;
  steps: Array<timeStepData>;
  setLoopData: React.Dispatch<React.SetStateAction<loopData>>;
  cancelTimer: Function;
  pauseTimer: Function;
  startNextStep: Function;
}

export { loopData, timeStepTypes, timeStepData, mainContextInterface };
