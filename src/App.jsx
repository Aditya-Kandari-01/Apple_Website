import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
function App() {
  return (
    <>
      <main className="bg-black">
        <NavigationBar></NavigationBar>
        <Hero></Hero>
        <Highlights></Highlights>
        <Model></Model>
      </main>
    </>
  );
}

export default App;
