import React from 'react'
import CV from "../../assets/Akshit_CV_new.pdf";
import CV1 from "../../assets/akshit_cv.pdf";

const CoreToAction = () => {
  return (
    <div className='cta flex justify-center items-center'>
      <a href="https://drive.google.com/file/d/1_fTXBQC6txRj-oj6XmUCxk9jLUla8JvZ/view?usp=sharing" target='_blank'
        className='btn p-3 border border-blue-500  text-center rounded-lg inline-blocktransition duration-300'
        >View Resume
      </a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CoreToAction