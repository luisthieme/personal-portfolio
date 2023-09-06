import NavBar from '../components/NavBar'
import '../../css/styles.css'
import LoginCard from '../components/LoginCard'

export default function Login() {
    const pageLinks = [
        { id: 1, linkTitle: 'CAREER', linkSrc: 'career.html' },
        { id: 2, linkTitle: 'ABOUT', linkSrc: 'about.html' },
        { id: 3, linkTitle: 'HOME', linkSrc: '../index.html' },
        { id: 4, linkTitle: 'GAMES', linkSrc: '/html/games.html' },
        { id: 5, linkTitle: 'SOCIALS', linkSrc: '/html/socials.html' }
    ]
    return (
        <>
            <NavBar pageTitle="LOGIN" pageLinks={pageLinks}></NavBar>
            <LoginCard />
        </>
    )
}