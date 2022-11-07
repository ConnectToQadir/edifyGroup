import './Login.css'
import {useState,useContext} from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [err,setErr] = useState(false);
    const {dispatch,isFetching} = useContext(Context);
  
    const submitHandler =async (e) =>{
      e.preventDefault();
      setErr(false);
      dispatch({type:"LOGIN_START"});
      try {
        const res =await axios.post("https://edifygroup.herokuapp.com/api/auth/login",{
          username,
          password
        });
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        window.location.replace("/admin/home");
      } catch (error) {
        setErr(true);
        dispatch({type:"LOGIN_FAILURE"});
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
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className='pfont' type="text" name="username" placeholder='User Name' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='pfont' type="password" name="password" placeholder='Password' />
                    <div className='btnDiv'>
                        <button type='submit' className='pfont' disabled={isFetching} >Log In</button>
                    </div>
                    {err?<div style={{textAlign:"center",marginTop:"10px",color:"red"}}>Something Went Wrong!</div>:<></>}
                </form>
            </div>
        </div>
    )
}

export default Login