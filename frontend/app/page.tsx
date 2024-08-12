'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import kids from "./img/kids.png"
import egg from "./img/egg.png"
import music from './img/music.png'
import mary from './img/mary.png'
import star from './img/star.png'
import { useUser } from "./Context/UserContext";
import { useRouter } from 'next/navigation';
import { useUserStore } from "./Store/userStore";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState({
    email:'',
    username:'',
    fullName:'',
    password:''
  });
  // const { setUser } = useUser();
  const { setUser } = useUserStore();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/pages/api/signup/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      setUser({ email:result.email, username: result.username, fullName: result.fullName });
      setFormData({
        email:'',
        username:'',
        fullName:'',
        password:''
      });
      setLogin(true);
    } else {
      console.log(result.error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;
    const response = await fetch('/pages/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    console.log(result);
    if (response.ok) {
      alert(result.message);
      setUser({ email, username: result.userData.username, fullName: result.userData.fullName});
      router.push('/profile');
    } else {
      console.log(result.error);
    }
  };

  const loginTable = (
    <div className="homeContentContainer" id="login-container">
      <table className="role-table">
        <thead><h1 id="app-title">Poetic Canvas</h1></thead>
        <tbody>
          <tr>
            <td><input name="email" placeholder="Enter email" onChange={handleInputChange} type="text"></input></td>
          </tr>
          <tr>
            <td><input name="password" placeholder="Password" onChange={handleInputChange} type="password"></input></td>
          </tr>
          <tr>
            <td><button className="btn"type="submit" onClick={handleLogin}>Login</button></td>
          </tr>
          <tr><td><p id="sign-up">Don't have an account?  <span className="link" onClick={()=>setLogin(false)}>Sign Up</span></p></td></tr>
        </tbody>
      </table>
      <Image src={kids} alt="kids"></Image>
      
    </div>
  );

  const signUpTable = (
      <div className="homeContentContainer">
      <table className="role-table">
        <thead><h1 id="app-title">Poetic Canvas</h1></thead>
        <tbody>
          <tr>
            <td><input name="email" placeholder="Email" onChange={handleInputChange} type="text"></input></td>
          </tr>
          <tr>
            <td><input name="fullName" placeholder="Full Name" onChange={handleInputChange} type="text"></input></td>
          </tr>
          <tr>
            <td><input name="username" placeholder="Username" onChange={handleInputChange} type="text"></input></td>
          </tr>
          <tr>
            <td><input name="password" placeholder="Password" onChange={handleInputChange} type="password"></input></td>
          </tr>
          <tr>
            <td><button className="btn" type="submit" onClick = {handleSignUp}>Sign Up</button></td>
          </tr>
          <tr><td><p id="terms">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p></td></tr>
          <tr><td><p id="login">Have an account?  <span className="link" onClick={()=>setLogin(true)}>Login</span></p></td></tr>
        </tbody>
      </table>
      <Image src={kids} alt="kids" id="kidsImg"></Image>
    </div>
  );

  const renderRainDrops = () => {
    const drops = [];
    for (let i = 0; i < 100; i++) {
      const leftPosition = Math.random() * 100 + 'vw';
      const duration = Math.random() * 2 + 1 + 's';
      const delay = Math.random() * 2 + 's';
      drops.push(
        <div
          key={i}
          className="rain"
          style={{ left: leftPosition, animationDuration: duration, animationDelay: delay }}
        ></div>
      );
    }
    return drops;
  };

  return (
    <>
      <div id="rain-container">
        {renderRainDrops()}
      </div>
      <Image src={music} alt="Music" id="musicImg"></Image>
      <Image src={egg} alt="Egg" id="eggImg"></Image>
      <div className="page">
        {login ? loginTable : signUpTable}
      </div>
      <Image src={star} alt="Stars" id="starImg"></Image>
      <Image src={mary} alt="Mary" id="maryImg"></Image>
    </>
  );
}

