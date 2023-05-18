import React,{useState} from "react";
import classes from "./RegistrationForm.module.css";

export default function RegistrationForm() {
const[username,setUserName]=useState(false);
const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const PasswordChangeHandler = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const ConfirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };
const[name,setName]=useState(false);
const[email,setEmail]=useState('');
const[validEmail,setValidEmail]=useState(false);
const emailHandler=(e)=>{
    const{value}=e.target;
    setEmail(value);
    setValidEmail(validateEmail(value));

}
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
const[age,setAge]=useState(false);
const[country,setCountry]=useState(false)
const[town,setTown]=useState(true);
const[code,setCode]=useState(true);
const nameHandler=(e)=>{
    let uname=e.target.value;
    if(uname.length>1){
        setName(true);
    }
    else{
        setName(false)
    }
}
const ageHandler=(e)=>{
    let a=e.target.value;
    if(a<1){
        setAge(false)
    }
    else{
        setAge(true);
    }

}
const UserHandler=(e)=>{
    let user= e.target.value;
    if(user.length===0){
       setUserName(false)
    }
    else{
        setUserName(true)
    }


}
 const SubmitHandler = (e) => {
    e.preventDefault();
    if(validEmail){
        alert("You Enter valid Email" )
    }
    else{
        alert("Please Enter Valid Email")
    }
    if (passwordMatch) {
        alert('Passwords matched');
      } 
      else {
        alert('Passwords do not match');
      }
  };
  return (
    <div className={classes.fulldiv}>
      <form onSubmit={SubmitHandler} className={classes.page}>
        <div class="mb-3">
          <div className={classes.heading}>Registration form With the Help of React.js</div>
          <div className={classes.middle}>
          <div className="userName" id="userName">
            User Name
          </div>
          <div>
            <input type="text" onChange={UserHandler} className={classes.input} required></input>
          </div>
          <div className={classes.span}>{username?<span></span>:" Enter Valid User Name"}</div>
          <div className="password" id="password">
            Password
          </div>
          <div>
            <input type="password" onChange={PasswordChangeHandler} className={classes.input} required></input>
          </div>
          <div className="confirmPassword" id="confirmPassword">
            ConfirmPassword
          </div>
          <div>
            <input type="password" required onChange={ConfirmPasswordChangeHandler} className={classes.input}></input >
          </div>
          <div className="name" id="name" >
            Name
          </div>
          <div>
            <input type="text" required onChange={nameHandler} className={classes.input}></input>
          </div>
          <div className={classes.span}>{name?<span></span>:" Enter Valid Name"}</div>
          <div className="email" id="email">
            Email
          </div>
          <div>
            <input type="email" onChange={emailHandler} required className={classes.input}></input>
          </div>
          <div>Age</div>
          <div>
            <input type="number" min="1" max="100" onChange={ageHandler} required className={classes.input}></input>
          </div>
          <div className={classes.span}>{age?<span></span>:"Enter valid Age"}</div>
          <div className="country" id="country"></div>
          <div >
            <select defaultValue="Country" className={classes.input}>
              <option>Country</option>
              <option>America</option>
              <option>China</option>
              <option>Japan</option>
              <option>Germany</option>
              <option>India</option>
              <option>United Kingdom</option>
              <option>France</option>
              <option>Italy</option>
              <option>Canada</option>
              <option>South Korea</option>
              <option>Russia </option>
              <option>Brazil </option>
              <option>Australia</option>
            </select>
          </div>
          <div className={classes.town} id="town">
            Town
          </div>
          <div>
            <input type="text" required="false" className={classes.input}></input>
          </div>
          <div className={classes.code}>Pin Code</div>
          <div>
            <input type="number" required="false" className={classes.input} ></input>
          </div>
          </div>
          <div  className={classes.okdiv}>
            <button className={classes.ok} type="submit">OK</button>
          </div>
        </div>
      </form>
    </div>
  );
}
