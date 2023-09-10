import '../../css/styles.css'
import { useState } from 'react';

interface LoginButtonProps {
    isUserLoggedIn: boolean;
    username: string;
}

export default function LoginButton(props: LoginButtonProps) {
    function handleButtonClick() {
        window.location.href = "../html/login.html"
    }

    return <button className='loginButton' onClick={handleButtonClick}>{props.isUserLoggedIn ? localStorage.getItem('username') : 'Login'}</button>
}