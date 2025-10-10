import "./App.css";
import Button from "./ui/Buttons/Button";
import CTA from "./ui/Buttons/CTA";
import HeroButton from "./ui/Buttons/HeroButton";
import WatchVideo from "./ui/Buttons/WatchVideo";

function App() {
  return (
    <>
      <Button title={"Get Started Now"} />
      <CTA title={"Get Started Now"} />
      <HeroButton title={"Try SEO Heist"} />
      <WatchVideo title={"Watch Video"} />
    </>
  );
}

export default App;
