import { Link as Link1} from '@material-ui/core'
import React,{useState} from 'react'
import {auth} from './firebase'
import {Link as Link2,useNavigate} from 'react-router-dom'
function Login() {
    const useNavigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e=> {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email , password)
        .then(auth =>
            {
                useNavigate.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassworrd(email , password)
        .then((auth)=>{
            console.log(auth)
            if(auth){
                useNavigate.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <Link2>
        <img/>
        </Link2>
        <div className='login_container'>
            <h1>sign in</h1>
        </div>
        <form>
            <h5>E-mail</h5>
            <input type='text' value={email}
            onchange={e=>setEmail(e.target.value)} />
            <input type='password' 
            onchange={e=>setPassword(e.target.value)}/>
            <button className='login_signInButton' type='submit' onClick={signIn}> Sign In</button>

            <p>

            </p>

            <button className='login_registerButton'>create your account</button>
        </form>
    </div>
  )
}

export default Login