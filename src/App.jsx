import "./App.css";
import Button from "./ui/Buttons/Button";
import CTA from "./ui/Buttons/CTA";
import HeroButton from "./ui/Buttons/HeroButton";
import WatchVideo from "./ui/Buttons/WatchVideo";
import Navbar from "./ui/Navbar";
import ViewFaqs from "./ui/ViewFaqs";

function App() {
  return (
    <>
      <Navbar />
      <Button title={"Get Started Now"} />
      <CTA title={"Get Started Now"} />
      <HeroButton title={"Try SEO Heist"} />
      <WatchVideo title={"Watch Video"} />
      <ViewFaqs
        title={"What exactly are city page ?"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim beatae ducimus fuga, impedit ratione eaque numquam quasi? Deleniti maiores vitae neque, dignissimos facere similique ipsam vero sed voluptate mollitia?"
        }
      />
    </>
  );
}

export default App;
