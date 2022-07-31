import React from 'react';
import "../Cover/Cover.css";
import my1 from '../../../images/my1.png';
const Cover = () => {
    return (
        <>


            <section className="Top">


                <div className='wrapper'>


                    <div className="heading">
                        <h1 className='hello'>Hello</h1>
                        <h2 className='title-hello'>It's me <span className='name'>Talat Mahmud</span></h2>
                    </div>


                    <div className="Statatic-text"> I am</div>
                    <ul className="dynamic-text">
                        <li> <span>Fontend Developer</span></li>
                        <li> <span>Fullstack Developer</span></li>
                        <li> <span>MERN Stack Developer</span></li>
                    </ul>
                </div>
                <div className='images'>
                    <img className='my1' src={my1} alt="" />
                </div>

            </section>

        </>


    );
};

export default Cover;