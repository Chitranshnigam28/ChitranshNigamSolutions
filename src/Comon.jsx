import React from 'react';
import { NavLink } from 'react-router-dom';

const Comon=(props)=>{

    return(
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto"> 
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.name} <strong className="brand-name">Chitransh Nigam Solutions.</strong></h1>
                        <h2 className="my-3">We are team of talented developers making websites</h2>
                        <div className="mt-3">
                             <NavLink to={props.to} style={{borderRadius:"16px"}} className="btn btn-outline-success">{props.btnName}</NavLink>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.img} className="img-fluid animated" alt="home img"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        </section>
        </>
    );
}

export default Comon;