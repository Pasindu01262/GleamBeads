import { useState } from 'react';
import "./CSS/Contact.css"

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
   
    const formData = new FormData(event.target);
    formData.append("access_key", "1777a241-2674-47cb-890d-cbf63186a971");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult(alert("Form Submitted Successfully"));
      event.target.reset();
    } else {
      setResult(alert("Error"));
    }
  };

  return (
    <div>
    <div>
        <span className='main-topic'>Contact Us</span>
        <span className='sub-topic'>Please fill in the information below.</span>
    </div>
    <div>
        
    <form onSubmit={onSubmit}>

      <label className='text-box-name' htmlFor="name">Name:</label>
      <input className='text-box' type="text" name="name" placeholder='your name'  required/>

      <label className='text-box-name' htmlFor="email">Email:</label>
      <input className='text-box' type="email" name="email" placeholder='your Email' required/>

      <label className='text-box-name' htmlFor="Number">Phone Number:</label>
      <input className='text-box' type="Number" name="Contact Number" placeholder='contact number' required/>

      <label className='text-box-name' htmlFor="item name">Required Item:</label>
      <input className='text-box' type="text" name="item name" placeholder='item' required/>

      <label className='text-box-name' htmlFor="item name" >Message:</label>
      <textarea className='text-box'  name="message" placeholder='type here' required></textarea>
      

      <button className='button' type="submit">Submit</button>
     
      
    </form>
    </div>
    </div>
  );
}
