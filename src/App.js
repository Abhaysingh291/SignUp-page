import React, { useState } from 'react';
import swal from 'sweetalert';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');


  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setphone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }


  const handleSubmit = (e) => {
    if (password !== confPassword) {
      swal("password not matched. Please re-enter your password");
      e.preventDefault();
    } else {
      console.log('A form was submitted with Name :"' + name +
        '" ,phone :"' + phone + '" and Email :"' + email + '"');
      swal(`Thank you for Sign up  ${name} . Now you are member of e-Commerce`)
      e.preventDefault();
      setName("");
      setphone("");
      setEmail("");
      setPassword("");
      setConfPassword("");
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2 style={{ marginBottom: "20px", color: "rgb(135, 123, 123)" }}> Welcome to e-Commerce </h2>
          <hr />
          <h3 style={{ fontWeight: "bold" }}> Please Sign-up here </h3>

          <input placeholder='Name' className='inpt' type="text" value={name} required onChange={(e) => { handleChange(e) }} /><br />
          <hr />

          <input placeholder='Email(optional)' className='inpt' type="email" value={email} onChange={(e) => { handleEmailChange(e) }} /><br />
          <hr />

          <input placeholder='+91 Mobile' className='inpt' type="tel" value={phone} required onChange={(e) => { handlePhoneChange(e) }} /><br />
          <hr />

          <input placeholder='Create Password' className='inpt' type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <hr />
          <span className="message" style={{ color: "red" }}> </span>

          <input placeholder='Re-enter Password' className='inpt' type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
          <hr />
          <span className="message" style={{ color: "red" }}> </span>

          <button className="btn" type="Sign Up" value="Sign up" >Sign Up</button>

        </form>
      </header>
    </div>
  );
}

export default App;