import React, { Fragment, useContext, useState } from "react";
import { CounterAction } from "./CounterActions";
import { CounterDisplay } from "./CounterDisplay";

const AppContext = React.createContext();

export const useCounter = () => {
  return useContext(AppContext);
};

export function CounterAppWithContext() {
  const [value, setValue] = useState(10);
  const contextValue = {
    value,
    setValue,
  };
  return (
    <Fragment>
      <AppContext.Provider value={contextValue}>
        <CounterAction />
        <CounterDisplay />
      </AppContext.Provider>
    </Fragment>
  );
}
