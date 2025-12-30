{/*import React, { useState } from 'react';
import "./CSS/LoginSignup.css";

function LoginSignup() {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ---------------- LOGIN ----------------
  const login = async () => {
    console.log("Login Function Executed", formData);

    try {
      const response = await fetch("https://ecommerce-backend-eight-sage-86.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.errors || "Login Failed");
      }

    } catch (err) {
      console.error("Login Error:", err);
      alert("Server Error");
    }
  };

  // ---------------- SIGNUP ----------------
  const signup = async () => {
    console.log("Signup Function Executed", formData);

    try {
      const response = await fetch("https://ecommerce-backend-eight-sage-86.vercel.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Signup Response:", data);

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.errors || "Signup Failed");
      }

    } catch (err) {
      console.error("Signup Error:", err);
      alert("Server Error");
    }
  };

  return (
    <div className='LoginSignup'>
      <div className='LoginSignup-container'>
        <h1>{state}</h1>

        <div className='LoginSignup-fields'>

          {state === "Sign Up" && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type='text'
              placeholder='Your Name'
            />
          )}

          <input
            value={formData.email}
            onChange={changeHandler}
            name='email'
            type='email'
            placeholder='Email Address'
          />

          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type='password'
            placeholder='Password'
          />
        </div>

        <button onClick={() => (state === "Login" ? login() : signup())}>
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className='LoginSignup-login'>
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className='LoginSignup-login'>
            Create an account?{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}

        <div className='LoginSignup-agree'>
          <input type='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;*/}


