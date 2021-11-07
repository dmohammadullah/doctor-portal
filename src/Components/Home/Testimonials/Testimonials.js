import React from 'react';
import wilson from '../../../images/people-1.png';
import ema from '../../../images/people-2.png';
import aliza from '../../../images/people-3.png';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const testimonialData = [
    {
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus optio consequatur debitis fuga hic dolore quisquam veniam tenetur corporis, exercitationem minima? Ab debitis veniam nobis enim quas, sit inventore sequi.",
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus optio consequatur debitis fuga hic dolore quisquam veniam tenetur corporis, exercitationem minima? Ab debitis veniam nobis enim quas, sit inventore sequi.",
        name : 'Ema Gomez',
        from : 'Vancouver',
        img : ema
    },
    {
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus optio consequatur debitis fuga hic dolore quisquam veniam tenetur corporis, exercitationem minima? Ab debitis veniam nobis enim quas, sit inventore sequi.",
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 style={{color: '#12D0DC', fontWeight: 'bold'}} className='text-uppercase'>Testimonial</h5>
                    <h1>What's Out Patients <br /> Says</h1>
                </div>
                <div className="mt-5 row">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;