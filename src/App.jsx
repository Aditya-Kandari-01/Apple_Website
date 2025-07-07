import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import Chips from "./components/Chips";
import Footer from "./components/Footer";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <>
      <main className="bg-black">
        <NavigationBar></NavigationBar>
        <Hero></Hero>
        <Highlights></Highlights>
        <Model></Model>
        <Features/>
        <Chips></Chips>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Sentry.withProfiler(App);
