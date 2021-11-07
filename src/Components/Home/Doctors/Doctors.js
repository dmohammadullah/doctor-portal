import React from 'react';
import doctorImage from '../../../images/doctor-small.png';
import Doctor from '../Doctor/Doctor';

const doctorData = [
    {
        img : doctorImage,
        name: 'Dr,Jamal',
        phone: '+61 15485268'
    },
    {
        img : doctorImage,
        name: 'Dr,Kamal',
        phone: '+61 15485268'
    },
    {
        img : doctorImage,
        name: 'Dr,Namal',
        phone: '+61 15485268'
    }
]

const Doctors = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <h5 className="text-center" style={{color: '#12D0DC', fontWeight:'700'}}>Our Doctors</h5>
                </div>
                <div className="row mt-5">
                    {
                        doctorData.map(doctor => <Doctor doctor={doctor}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;