import React from "react";
import "./index.css";
import DefaultLayout from "../layout/DefaultLayout";
import Nav from "../nav";
import Hero from "../hero";
import About from "../about";
import OurMenu from "../our-menu";

const App: React.FC = () => {
  return (
    <DefaultLayout>
      {/* Nav */}
      <Nav />
      {/* End of Nav */}

      <div className="content">
        {/* Hero */}
        <Hero />
        {/* End of Hero */}

        <div className="inside-content">
          {/* About */}
          <About />
          {/* End of About */}

          <div className="line"></div>

          {/* Menu */}
          <OurMenu />
          {/* End of Menu */}
        </div>
      </div>

      {/* Contact */}
      {/* End of Contact */}

      {/* Footer */}
      {/* End of Footer */}
    </DefaultLayout>
  );
};

export default App;
