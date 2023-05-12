import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import { Aboutus } from "./components/Aboutus/Aboutus";
import ContactUs from "./components/ContactUs/contactUs";
import Popup from "./components/Popup/popup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bannar">
              <div className="bannarstyle justify-center">
                {/* <ParticleBackground/> */}
                <h1 className="lg:text-[60px] text-[30px] mb-[20px] m-[auto]">
                  __{" "}
                </h1>
                <h1 className="lg:text-[60px] text-[30px] mb-[20px] m-[auto]">
                  Welcome to our website
                </h1>
                <h2 className="lg:text-[40px] text-[20px] m-[auto]">
                  Learn more about our services
                </h2>
                <Popup
                  // className="m-[50px]"
                  data={{
                    Head: "Thank you for your interest in our company!",
                    Text: "Hi there! thank you for looking at my submission. Actually, I have my end semester exams till 15th May. So I wasn't able to devote much time for the submission. But I am passionate for an internship for the summers. I would love to show some of my other projects in an interview.",
                  }}
                />
                <h1 className="lg:text-[60px] text-[30px] mb-[20px] m-[auto]">
                  __{" "}
                </h1>
              </div>
            </div>
          }
        />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </Router>

    // <>

    // {/* //   <Routes>
    // //     <Route path="/" element={<About />} />

    // //     <Route path="/home" element={<Home />} />
    // //   </Routes> */}
    // </>
  );
}

export default App;
