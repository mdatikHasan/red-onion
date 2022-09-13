import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {

    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
        navigate('/')
    }

    const handleSignIn = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)
        console.log(email, password);
    }
    return (
        <div>
            <div>
                <div className="container">
                    <div className="form-box">
                        <div className="header-form">
                            <h4 className="text-primary text-center"><i className="fa-solid fa-right-to-bracket" style={{ fontSize: "110px" }}></i></h4>
                            <div className="image">
                            </div>
                        </div>
                        <div className="body-form">
                            <form onSubmit={handleSignIn}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text "><i className="fa-solid fa-envelope p-2"></i></span>
                                    </div>
                                    <input type="email" name='email' required className="form-control" placeholder="Email" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-lock p-2"></i></span>
                                    </div>
                                    <input type="password" name='password' required className="form-control" placeholder="Password" />
                                </div>
                                <div className="message">
                                    <p>New to red onion? <Link to='/register'>Register</Link></p>
                                    <div><a href="#">Forgot your password</a></div>
                                </div>
                                <button type="submit" className="btn btn-secondary btn-block mx-auto d-block">LOGIN</button>

                            </form>
                            <Social></Social>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;