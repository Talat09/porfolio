import React from 'react';
import '../Sevices/Services.css'
import coding from '../../images/Service icon/coding.png'
import responsive from '../../images/Service icon/res.png'
import design from '../../images/Service icon/design.png'
import { Card } from 'react-bootstrap';
const Services = () => {
    return (
        <>
            <h1 className='color-text my-3'>My Services</h1>

            <div className='card-container d-lg-flex d-sm-grid  py-3 gap-lg-3   gy-sm-3'>

                <Card className='col-lg-4 col-sm-12 bg-dark text-light border border-success rows p-3 '>
                    <Card.Img variant="top" className='w-25 align-self-center' src={coding} />
                    <Card.Body>
                        <Card.Title className='fw-bold color-text'>Web Development</Card.Title>
                        <Card.Text>
                            I am a MERN Stack Developer. Can develope a functional website using this Stack.
                        </Card.Text>
                    </Card.Body>

                </Card>


                <Card className='col-lg-4 col-sm-12 bg-dark text-light border border-success rows p-3'>

                    <Card.Img variant="top" className=' w-25 align-self-center' src={responsive} />
                    <Card.Body>
                        <Card.Title className='fw-bold color-text'>Responsive Site</Card.Title>
                        <Card.Text>
                            I can develop any sort of responsive website.
                        </Card.Text>
                    </Card.Body>

                </Card>


                <Card className='col-lg-4 col-sm-12 bg-dark text-light border border-success gy-sm-3  rows p-3'>
                    <Card.Img variant="top" className='w-25 align-self-center  ' src={design} />
                    <Card.Body>
                        <Card.Title className='fw-bold color-text'>Web Design</Card.Title>
                        <Card.Text>
                            I have a good design sense that makes a website outstanding.
                        </Card.Text>
                    </Card.Body>

                </Card>

            </div>


        </>
    );
};

export default Services;