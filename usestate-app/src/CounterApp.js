import React, {useState} from 'react'

function CounterApp() {
    const [counter, setCounter] = useState(0);
    
    const incrementCounter = () => {
        // for each change of state to have a new render we need "setCounter" because it refresh the screen
        setCounter(counter+1);

        //this is for update a state many times in the same scope we can do this
        setCounter(precCounter => precCounter + 1);
        // setCounter(a => a + 1);
    }

    return (
        <div>
            <button onClick={incrementCounter}>
                Increment
            </button>
            <h1>Clicks: {counter}</h1>
        </div>
    )
}

export default CounterApp
