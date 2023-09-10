import { useState } from 'react'
import '../../css/styles.css'

interface User {
    username: string;
    password: string;
}

interface LoginCardProps {
    onLogin: (username: string) => void;
}


export default function LoginCard(props: LoginCardProps) {
    const initialUsers: User[] = [{ username: "luis", password: "thieme" }]
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<User[]>(initialUsers);


    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    function handleLogin() {
        for (let i = 0; i < user.length; i++) {
            if (username === user[i].username) {
                if (password === user[i].password) {
                    console.log(`logged in user: ${username}`);
                    props.onLogin(username);
                    //window.location.href = "../index.html";
                }
            }
        }


    }

    return (
        <>
            <div className='login-card'>
                <div className="login-card-inner-container">
                    <h2 className='login-card-label'>Login</h2>
                </div>
                <div className="login-card-inner-container">
                    <h3 className='centered'>Username</h3>
                </div>
                <div className="login-card-inner-container">
                    <input type="text" className='centered login-card-input' value={username} onChange={handleUsernameChange} />
                </div>
                <div className="login-card-inner-container">
                    <h3 className='centered'>Password</h3>
                </div>
                <div className="login-card-inner-container">
                    <input type="text" className='centered login-card-input' value={password} onChange={handlePasswordChange} />
                </div>
                <div className="login-card-inner-container">
                    <button className='centered login-card-button' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    )
}
