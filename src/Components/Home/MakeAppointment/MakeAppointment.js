import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section style={{marginTop: '150px'}} className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-block d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 py-5 text-white text-style">
                        <h5 className="text-primary text-uppercase">Appointment</h5>
                        <h1>Make an appointment <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente perferendis vel dolorum rem eligendi dicta, deleniti qui repellat aspernatur.</p>
                        <button
                            style={{
                                backgroundColor: "#12D0DC",
                                color: "white",
                                fontWeight: "700",
                            }}
                            className="btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;