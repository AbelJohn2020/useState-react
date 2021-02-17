import React, {useState} from 'react'

const ConditionalApp = () => {

    const [condition, setCondition] = useState(true);

    return (
        <div>
            <button onClick={() => setCondition(!condition)}>
                Toggle
            </button>

            <h1>State value is {condition.toString()} </h1>

            {
                // // this is a conditional but is exclusive in true
                condition &&
                // ? <h1>Show message in True</h1>
                // : <h1>Another message in false</h1>
                <h1>Show message in true</h1>
                // : null
            }
        </div>
    )
}

export default ConditionalApp
