import '../../css/styles.css'

export default function LoginButton() {
    function handleButtonClick() {
        window.location.href = "../html/login.html"
    }

    return <button className='loginButton' onClick={handleButtonClick}>Login</button>
}