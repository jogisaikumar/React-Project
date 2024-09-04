import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
    

      const storedUser = JSON.parse(localStorage.getItem('__USER__'));
      if(storedUser && storedUser.email === userEmail && storedUser.password === password) {
        setTimeout(()=> {
          alert(`Logged in Successfully!!`);
        },200);
        setTimeout(()=> {
          alert('Redirecting to Home Page');
        }, 200)
        
        navigate('/Home');


      } else {
        alert(`Invalid user Email or Password`);
      }
    }
    return (
      <>
        <section id="card">
          <h3>Existing User -- Login Form</h3>
          <ul>
            <li>
              <label htmlFor="userEmail">User Email:</label>
              <input
                type="text"
                value={userEmail}
                placeholder="Enter User Email"
                name="useremail"
                id="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={password}
                placeholder="Enter password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
          </ul>
          <div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </section>
  
        <div>
          new Customer?
          <button onClick={() => {
            setIsLogin(false)
          }}>
            <span>SignUp</span>
          </button>
        </div>
      </>
    );
  }
  function SignUpForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    function handleSignUp() {
      if(password === rePassword) {
        const userData = {
          firstName,
          lastName,
          email,
          password,
        }
        localStorage.setItem("__USER__", JSON.stringify(userData));
        alert('SignedUp Succesfully!!') 
        setIsLogin(true);
      } else {
        alert('Passwords do not match , Enter Correctly')
      }
    }
    return (
      <>
        <section id="card">
          <h3>New User -- SignUp Form</h3>
          <ul>
            <li>
              <label htmlFor="firstName"> FirstName:</label>
              <input
                type="text"
                value={firstName}
                placeholder=" Enter FirstName"
                name="firstname"
                id="firstNname"
                minLength={3}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="lastName"> LastName:</label>
              <input
                type="text"
                value={lastName}
                placeholder=" Enter LastName"
                name="lastname"
                id="lastName"
                minLength={3}
                onChange={(e) => {
                  return setLastName(e.target.value)
                }
                }
              />
            </li>
            <li>
              <label htmlFor="email"> E-Mail:</label>
              <input
                type="text"
                value={email}
                placeholder="Enter your Email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={password}
                placeholder="Enter password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="repassword"> Re-Enter Password:</label>
              <input
                type="password"
                value={rePassword}
                placeholder="Re-enter password"
                id="repassword"
                name="repassword"
                onChange={(e) => setRePassword(e.target.value)}
              />
            </li>
          </ul>
          <div>
            <button onClick={handleSignUp}>SignUp</button>
          </div>
        </section>
  
        <div>
          Already an Existing User!!!!
          <button onClick={() => {
            setIsLogin(true);
          }}>
            <span>Login</span>
          </button>
        </div>
      </>
    );
  }
  return (
    <>
    <div>
      {isLogin? <LoginForm/> : <SignUpForm/>}
    </div>
    </>
  )
}

export default App;
