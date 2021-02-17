import React, {useState} from 'react'

function ErrorApp() {
    const [error, setError] = useState("");
    return (
        <div>
            <button onClick={() => setError("Mistake in bring the API")}>Error</button>
            <button onClick={() => setError("Wrong credentials")}>Another Error</button>
            <button onClick={() => setError(" ")}>Successful Progress</button>
            { error && <h1>{ error }</h1> }
        </div>
    )
}

export default ErrorApp
