import { useEffect, useState } from 'react';
import { auth } from '../config/firebase-info';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import Dashboard from './Dashboard';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authState, setAuthState] = useState(false || window.localStorage.getItem('auth') === 'true');
    const [token, setToken] = useState('')

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user", user)
                setAuthState(true);
                window.localStorage.setItem('auth', 'true')
                user.getIdToken().then((token) => {
                    console.log(token)
                    setToken(token)
                })
            } else {
            }
        });

    }, []);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const userCreditional = await signInWithEmailAndPassword(auth, email, password);
            setAuthState(true)
            window.localStorage.setItem('auth', 'true')
            console.log(userCreditional)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {authState ?
                <Dashboard token={token} /> :
                <>
                    <h1>Login</h1>
                    <form onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        handleLogin(e)
                    }}>
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            placeholder='abc@gmail.com'
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <button type='submit'>
                            Login
                        </button>
                    </form>
                </>
            }
        </div>
    )
}
