import '../../css/styles.css'

export default function LoginCard() {


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
                    <input type="text" className='centered login-card-input' />
                </div>
                <div className="login-card-inner-container">
                    <h3 className='centered'>Password</h3>
                </div>
                <div className="login-card-inner-container">
                    <input type="text" className='centered login-card-input' />
                </div>
                <div className="login-card-inner-container">
                    <button className='centered login-card-button'>Login</button>
                </div>

            </div>
        </>
    )
}