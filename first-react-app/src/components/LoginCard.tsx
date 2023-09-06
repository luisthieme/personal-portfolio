import '../../css/styles.css'

export default function LoginCard() {


    return (
        <>
            <div className='login-card'>
                <h2 className='login-card-label'>Login</h2>
                <h3 className='centered'>Username</h3>
                <input type="text" className='centered' />
                <h3 className='centered'>Password</h3>
                <input type="text" className='centered' />
                <button className='centered'>Login</button>
            </div>
        </>
    )
}