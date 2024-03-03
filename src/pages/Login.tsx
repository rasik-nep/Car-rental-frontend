import { useState } from 'react';
import { auth } from '../config/firebase-info';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const userCreditional = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCreditional)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
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

        </div>
    )
}
