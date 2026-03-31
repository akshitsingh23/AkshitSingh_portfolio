import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import RecentWork from "./components/recentWork/recentWork";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/nav/scroll";

import bg from "./assets/bg.jpg";

const App = () => {
    return (
        <Router>
            <div
                className="bg-black min-h-screen"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.80)),
            url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <Header />
                <Nav />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <About />
                                <Experience />
                                <Services />
                                <RecentWork />
                                <Contact />
                            </>
                        }
                    />

                    {/* fallback */}
                    <Route
                        path="*"
                        element={
                            <>
                                <About />
                                <Experience />
                                <Services />
                                <RecentWork />
                                <Contact />
                            </>
                        }
                    />
                </Routes>

                <ScrollToTop />
                <Footer />
            </div>
        </Router>
    );
};

export default App;

/*

import React from 'react';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import RecentWork from "./components/recentWork/recentWork";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ScrollToTop from './components/nav/scroll';

const BASE = process.env.REACT_APP_PUBLIC_URL || "";


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <RecentWork />
        <Contact />
        <ScrollToTop /> 
        <Footer />
    </>
  )
}

export default App;
*/


/*
App.test.js
import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/