import React from "react";
import "./index.css";
import DefaultLayout from "../layout/DefaultLayout";
import Nav from "../nav";
import Hero from "../hero";

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
      </div>

      {/* About */}
      {/* End of About */}

      {/* Menu */}
      {/* End of Menu */}

      {/* Contact */}
      {/* End of Contact */}

      {/* Footer */}
      {/* End of Footer */}
    </DefaultLayout>
  )
}

export default App;
