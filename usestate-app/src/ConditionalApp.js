import React, {useState} from 'react'

const ConditionalApp = () => {

    const [condition, setCondition] = useState(true);

    return (
        <div>
            <button onClick={() => setCondition(!condition)}>
                Toggle
            </button>
            {
                // // this is a conditional but is exclusive in true
                condition &&
                // ? <h1>Show message in True</h1>
                // : <h1>Another message in false</h1>
                <h1>Show message in True</h1>
                // : null
            }

            <h1>State value is {condition} </h1>
        </div>
    )
}

export default ConditionalApp
