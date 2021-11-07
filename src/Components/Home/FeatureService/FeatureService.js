import React from 'react';
import treatment from '../../../images/treatment.png';

const FeatureService = () => {
    return (
        <section className="features-service pb-0 pd-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">

                    <div className="col-md-5 mb-4 m-md-0">
                        <img style={{height: '450px'}} className="img-fluid" src={treatment} alt="" />
                    </div>

                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental <br />Care, onYour Terms</h1>
                        <p className="text-secondary my-5 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique esse velit praesentium consequuntur repellendus tenetur placeat consequatur, dicta culpa iste assumenda ad ratione, quis illum, accusamus odit deserunt earum delectus quod. Nulla tenetur facilis vitae. Quisquam ipsa hic officia nesciunt repellat sunt iusto vel, nulla, impedit iure expedita nam suscipit porro quas accusantium asperiores veniam modi. Rem, aspernatur incidunt.
                        </p>
                        <button
                            style={{
                                backgroundColor: "#12D0DC",
                                color: "white",
                                fontWeight: "700",
                            }}
                            class="btn"
                        >
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureService;