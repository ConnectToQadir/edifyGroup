import './Login.css'
import { useState, useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState(false);
  const { dispatch, isFetching } = useContext(Context);
  const submitHandler = async (e) => {
    e.preventDefault();
    setErr(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://edifygroup.herokuapp.com/api/auth/login", {
        email,
        password
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/admin/home");
    } catch (error) {
      setErr(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }

  return (
    <div>
      <div className="loginForm">
        <form action="" onSubmit={submitHandler}>
          <span className="logo">
            <img src="/images/facIcon.png" alt="" />
          </span>
          <h1 className='hfont'>Edify Login</h1>

          <div className="eachLingformInput">
            <i className="fa-solid fa-user"></i>
            <input required value={email} onChange={(e) => setEmail(e.target.value)} className='pfont' type="email" name="email" placeholder='Email' />
          </div>

          <div className="eachLingformInput">
            <i class="fa-solid fa-lock"></i>
            <input required value={password} onChange={(e) => setPassword(e.target.value)} className='pfont' type="password" name="password" placeholder='Password' />
          </div>
          
          <div className='btnDiv'>
            <button type='submit' className='pfont' disabled={isFetching}>{isFetching && <i class="fa-solid fa-spinner fa-spin-pulse"></i>} LOGIN</button>
          </div>
          {err ? <div style={{ textAlign: "center", marginTop: "10px", color: "red" }}>Invalid username or password</div> : <></>}
        </form>
      </div>
    </div>
  )
}

export default Login