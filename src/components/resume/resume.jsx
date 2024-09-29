import React from 'react';
import Navbar from '../nav/nav'; // Adjust the import path as needed
import Footer from '../footer/footer'; // Adjust the import path as needed
import CV from "../../assets/Akshit_CV_new.pdf";

const ResumePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h3 className="text-2xl font-bold mb-4">My Resume</h3>
        <iframe src={CV} width="100%" height="600px" title="Resume" className="border-0"></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;