import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container my-5 py-5">
                <div className="text-center text-white mb-5">
                    <h5 style={{ color: '#12D0DC', fontWeight: '700' }} className='text-uppercase'>Contact Us</h5>
                    <h1>Always connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group my-3">
                            <input className="form-control" placeholder="Email Address" type="text" />
                        </div>
                        <div className="form-group my-3">
                            <input className="form-control" placeholder="Subject" type="text" />
                        </div>
                        <div className="form-group my-3">
                            <textarea name="" className="form-control" placeholder="Write your feedback" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button
                            style={{
                                color: "white",
                                fontWeight: "700",
                            }}
                            className="btn btn-info">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;