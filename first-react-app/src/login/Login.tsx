import NavBar from '../components/NavBar'
import '../../css/styles.css'
import LoginCard from '../components/LoginCard'
import { useState } from 'react'

export default function Login() {
    const pageLinks = [
        { id: 1, linkTitle: 'CAREER', linkSrc: 'career.html' },
        { id: 2, linkTitle: 'ABOUT', linkSrc: 'about.html' },
        { id: 3, linkTitle: 'HOME', linkSrc: '../index.html' },
        { id: 4, linkTitle: 'GAMES', linkSrc: '/html/games.html' },
        { id: 5, linkTitle: 'SOCIALS', linkSrc: '/html/socials.html' }
    ]

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (newUsername: string) => {
        localStorage.setItem('username', newUsername);
        setUsername(newUsername);
        setIsUserLoggedIn(true);
    };


    return (
        <>
            <NavBar pageTitle="LOGIN" pageLinks={pageLinks} isUserLoggedIn={isUserLoggedIn} username={username} />
            <LoginCard onLogin={handleLogin} />
        </>
    )
}