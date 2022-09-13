import React from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Social = () => {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/')
    }
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className=' p-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            <div className="social">
                <button onClick={()=>signInWithFacebook()} className='btn '><i style={{ borderRadius: '50px' }} className="bg-white p-1 fab fa-facebook"></i></button>
                <button onClick={()=>signInWithGithub()} className='btn '><i style={{ borderRadius: '50px' }} className="bg-white p-1 fa-brands fa-github"></i></button>
                <button onClick={()=>signInWithGoogle()} className='btn '><i style={{ borderRadius: '50px' }} className="bg-white p-1 fab fa-google"></i></button>
            </div>
        </div>
    );
};

export default Social;