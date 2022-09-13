import { signOut } from 'firebase/auth';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    if (loading) {
        return <Spinner animation="border" variant="primary" />

    }

    console.log(user?.displayName);


    const logOut = () => {
        signOut(auth)
    }
    return (
        <div className='d-flex header justify-content-between align-items-center  px-5 py-2'>
            <NavLink to='/'><img src={logo} width='20%' alt="" /></NavLink>
            <nav>
                <i className="fa-sharp fa-solid fa-cart-shopping me-4"></i>
                {user ? <span className='text-dark me-3'><b>{user?.displayName}</b></span> : <></>}
                {user ? <span className='signup px-3 py-1 ' onClick={logOut} style={{ cursor: 'pointer' }} ><b>Sign out</b></span> : <><NavLink to='/login' className='me-4'>Login</NavLink>
                    <NavLink to='/register' className='signup px-3 py-1' >Sign up</NavLink></>}

            </nav>
        </div>
    );
};

export default Header;