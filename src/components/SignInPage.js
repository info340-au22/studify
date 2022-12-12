import React from 'react';
import { Navigate, Link } from 'react-router-dom';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function SignInPage(props) {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const firebaseUIConfig = {
        signInOptions: [ 
            { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }, 
            { provider: GoogleAuthProvider.PROVIDER_ID }
        ],
        signInFlow: 'popup',
        callbacks: {
            signInSuccessWithAuthResult: () => false
        },
        credentialHelper: 'none'
    };

    let authStatePage = '';

    if (loading) {
        authStatePage = (
            <div>
                <p>Initializing user</p>
            </div>
        )
    }

    if (error) {
        authStatePage = (
            <div>
                <p>Error: {error}</p>
            </div>
        )
    }

    if (user) {
        authStatePage = (
            <div>
                <p>Welcome {user.displayName}</p>
                <Link className='btn btn-primary' to='/'>Go to Schedule!</Link>
            </div>
        )
    } else {
        authStatePage = (
            <div>
                <h3 className='mb-lg-5'>Please Sign In to Access All Features!</h3>
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={firebaseUIConfig} />
            </div>
        )
    }

    if (props.currentUser.uid) {
        return <Navigate to="/" />
    }

    return (
        <main className="container text-center">
            <h2>Welcome to Studify :)</h2>
            {authStatePage}
        </main>
    )
}