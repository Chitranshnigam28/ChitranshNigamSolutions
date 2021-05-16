import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Contact=()=>{
    const [data,setData]=useState({
        fullName:"",
            phone:"",
            email:"",
            msg:"",
    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        
            setData((preVal)=>{
                return{
                ...preVal,
                [name]:value,
            };
            });
        
            
        
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Your name is ${data.fullName}.Your mobile number is ${data.phone}.Your email is ${data.email}.You want to say ${data.msg}`)
    };
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" name="fullName" value={data.fullName} onChange={InputEvent} />
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Phone</label>
                            <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control"  name="email" value={data.email} onChange={InputEvent}/>
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Message</label>
                            <textarea className="form-control" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                            
                        </div>
                                                        
                        

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Contact;