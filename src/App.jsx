import "./App.css"
import Contactform from "./components/ContactForm/Contactform";
import Contact from "./components/ContactHeader/Contact";
import Navigation from "./components/navigation/navigation";

// component

const App = () => {


   return (<div>
    <Navigation />
    <Contact />
    <Contactform/>

  </div>) ;
}

//export this component outside
export default App;