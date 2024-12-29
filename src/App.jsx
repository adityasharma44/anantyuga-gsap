import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Keyfeature from "./components/Keyfeature";
import Whysection from "./components/Whysection";
import Service from "./components/Service";
import Members from "./components/Members";
import Newsection from "./components/Newsection";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Popup from "./components/Popup";

function App() {
  let [popup,setpopup] = useState(false)

  // const showpop=()=>{
  //   console.log("hello")
  //   setpopup(!popup)
  // }

  const showpop = () => {
    setpopup(!popup)
  }

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 1500);
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="mainbody">
          <Navbar showpop={showpop}/>
          <Banner />
          <About />
          <Keyfeature />
          <Whysection />
          <Service />
          <Newsection />
          <Members />
          <Download />
          <Footer />
          <Popup popup={popup} showpop={showpop}/>
          </div>
      )}
    </>
  );
}

export default App;
