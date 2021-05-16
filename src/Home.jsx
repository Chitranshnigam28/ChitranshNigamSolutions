import React from 'react';

import web from "../src/images/img.svg";
import Comon from './Comon';
const Home=()=>{

    return(
        <>
        <Comon name="Welcome to Homepage." img={web} btnName="Get Started" to="/services"/>
        </>
    );
}

export default Home;