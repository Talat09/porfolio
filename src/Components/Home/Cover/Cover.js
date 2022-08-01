import React from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import "../Cover/Cover.css";
import my1 from '../../../images/my1.png';
import cv from '../../../CV/cv.pdf';
const Cover = () => {

    const { text } = useTypewriter({
        words: ['Web Developer', 'Fontend Developer', 'Full Stack ', 'Mern Stack Developer'],
        loop: {},
        cursor: '💚',
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <>
            <section className="top d-lg-flex col-lg-12 col-md-12 d-sm-block text-lg-start text-sm-start bg-dark ">
                <div className=' mx-3  justify-content-lg-center align-items-center  '>
                    <div className="heading text-light  mt-sm-3 ">
                        <h1 className='mt-lg-5 '>Hello</h1>
                        <h2 className='title-hello'>It's me <span className='name'>Talat Mahmud</span></h2>
                    </div>

                    <div>
                        <h1 className='text-light'>I'm a<span className='type-writer fw-bold mt-3'> {text}</span></h1>
                        <button className='btn-hire mx-2 text-light rounded  border-0'>HIRE ME</button>
                        <a href={cv} download><button className='btn-cv text-light rounded  border-0 '>DOWNLOAD CV </button></a >
                    </div>

                </div>


                <div className='images '>
                    <img className='my1  mb-sm-2 ' src={my1} alt="" />
                </div>

            </section>

        </>


    );
};

export default Cover;