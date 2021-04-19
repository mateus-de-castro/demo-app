import { initializeIcons } from "@fluentui/font-icons-mdl2";
import FirstDemo from "./FirstDemo";
import SecondDemo from "./SecondDemo";
import ThirdDemo from "./ThirdDemo";
import FourthDemo from "./FourthDemo";

function App() {
  initializeIcons();
  const path = window.location.href.split("/").slice(-1)[0].toLowerCase();

  switch (path) {
    case "firstdemo":
      return <FirstDemo />;
    case "seconddemo":
      return <SecondDemo />;
    case "thirddemo":
      return <ThirdDemo />;
    case "fourthdemo":
      return <FourthDemo />;
    default:
      throw new Error("Invalid Path");
  }
}

export default App;
