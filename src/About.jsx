import React from 'react';

import web from "../src/images/about.svg";
import Comon from "./Comon";
const About=()=>{

    return(
        <>
     <Comon name="Welcome to About page." img={web} btnName="Contact Now" to="/contact"/>
        </>
    );
}

export default About;