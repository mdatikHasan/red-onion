import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import Social from '../Social/Social';

const Register = () => {
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        navigate('/')
    }
    const handleRegisterUser = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        alert('Update Profile name');
        navigate('/')

        console.log(password);

    }

    return (
        <div>
            <div>
                <div className="container">
                    <div className="form-box">
                        <div className="header-form">
                            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                            <div className="image">
                            </div>
                        </div>
                        <div className="body-form">
                            <form onSubmit={handleRegisterUser}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text "><i className="fa-solid fa-file-signature p-2"></i></span>
                                    </div>
                                    <input type="text" name='name' required className="form-control" placeholder="Ful name" />
                                </div>
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
                                    <div><input type="checkbox" name='terms' /> Agree terms & condition</div>
                                    <div><a href="#">Forgot your password</a></div>
                                </div>
                                <p>Already have an acount? <Link to='/login'>Login</Link></p>
                                <button type="submit" className="btn btn-secondary btn-block mx-auto d-block">Register</button>

                            </form>
                            <Social></Social>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;