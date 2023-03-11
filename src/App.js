import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import End from "./components/End";

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <End />
      <Analytics />
    </>
  );
}

export default App;
