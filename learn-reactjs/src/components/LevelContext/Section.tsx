import React from "react";
import { LevelContextProvider, useLevelContext } from "./context/levelContext";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = (props) => {
  const { children } = props;
  // const level = useContext(LevelContext);
  // const level = useLevelContext();

  return (
    <section
      style={{
        border: "1px solid #333",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {/* <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider> */}
      <LevelContextProvider>{children}</LevelContextProvider>
    </section>
  );
};

export default Section;
