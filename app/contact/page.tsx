'use client';
import { useState } from "react";

const Contact: React.FC = () => {

    //     const [name,setName] = useState("");
    //     const [message,setMessage] = useState("");
    //     const [status,setStatus] = useState("");

    //     async function handleSubmit (e: React.FormEvent) {
    //         e.preventDefault();
            
    //     const res = await fetch("/api/submit-form", {
    //         method: "POST",
    //         headers: { "Content-Type" : "application/json"},
    //         body: JSON.stringify ({ name, message }),
    //     });

    //     const data = await res.json();
    //     setStatus(data.status);
    // };

    return ( 

        <div className = "flex flex-col w-full text-center">
            <h1 className = "text-xl">Contact Us Form</h1>
        {/* <form onSubmit = {handleSubmit} style={{ display : "flex",flexDirection:"column",gap="1rem",maxWidth="300px"}}>
            <input
                type="text"
                placeholder="Your Name"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                style =  {{ padding : "8px" }}
             />
             <textarea placeholder = "Your Message"
                value = {message}
                onChange = {(e) => setMessage(e.target.value)}
                style = {{padding : "8px" }}
             />

           <button type = "submit" style={{ padding: "10px", cursor: "pointer" }}>
              Submit
            </button>
          </form>
          {status && <p>{status}</p>} */}
        </div>
    );
};
export default Contact;