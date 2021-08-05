import React, {ChangeEvent, useEffect, useState} from 'react';

import './App.css';
import {Button} from "./button/Button";
import {Display} from "./display/Display";
import {StartInput} from "./Input/StartInput";
import {MaxInput} from "./Input/MaxInput";

const App = () => {
    const [maxCount, setMaxCount] = useState(0)
    const [startCount, setStartCount] = useState(0)
    const [error, setError] = useState<boolean>(false)
    const [message, setMessage] = useState<boolean>(false)
    const [displayValue, setDisplayValue] = useState(0);

    // if () {
    // setError(true)
    // }
    // useEffect(() => { }, [displayValue, maxCount])
    //  [] => only first render
    // [asfaasgasfasf] => whent changed value in array
    // no [] => all times


    const incValue = () => {
        setDisplayValue(displayValue + 1);
        console.log(displayValue)
        if (displayValue >= maxCount) {
            setDisplayValue(maxCount)
        }
    }
    const resetValue = () => {
        setDisplayValue(startCount);
    }

    const setValue = () => {
        setMessage(false)
        setError(false)
        setDisplayValue(startCount)
    }

    const addStartCount = (value: number) => {
        setMessage(true)
        if (value > maxCount || value < 0 || value === maxCount) {
            setError(true)
        } else {
            setError(false)
        }
        setStartCount(value)
    }

    const addMaxCount = (value: number) => {
        setMessage(true)
        if (value < 0 || value < startCount || value === startCount) {
            setError(true)
        } else {
            setError(false)
        }
        setMaxCount(value)
    }

    return (
        <div className="App">
            <div className="Block">
                <div className="display">
                    <StartInput text={'start value:'}
                                addStartCount={addStartCount}
                                startCount={startCount}
                                error={error}
                                setStartCount={setStartCount}/>
                    <MaxInput text={'max value:'}
                              addMaxCount={addMaxCount}
                              maxCount={maxCount}
                              error={error}/>
                </div>
                <div className="counter">
                    <Button
                        text={'set'}
                        callback={setValue}
                        disabled={(maxCount < 0 || startCount === maxCount || startCount < 0 || startCount > maxCount || !message)}
                        //
                    />
                </div>
            </div>
            {/*-------------------------------------------------------------------------------------------------------*/}
            <div className="Block">
                <div className="display">
                    <Display displayValue={displayValue} maxValue={maxCount} error={error} message={message}/>
                </div>
                <div className="counter">
                    <Button
                        text={'inc'}
                        disabled={message || maxCount === displayValue}
                        callback={incValue}
                    />
                    <Button
                        text={'res'}
                        callback={resetValue}
                        disabled={startCount === displayValue || maxCount < 0 || startCount < 0 || startCount > maxCount || startCount > displayValue}
                    />
                </div>
            </div>
        </div>
    );
}
export default App;
