import React from 'react';

const Doctor = (props) => {
    const { img, name, phone } = props.doctor;
    return (
        <div className="container col-md-4">
            <div className="text-center">
                <img style={{height: '300px'}} src={img} alt="" />
                <h6>{name}</h6>
                <p>{phone}</p>
            </div>
        </div>
    );
};

export default Doctor;