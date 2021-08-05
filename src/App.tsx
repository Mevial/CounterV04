import React, {useEffect, useState} from 'react';

import './App.css';
import {Button} from "./button/Button";
import {Display} from "./display/Display";
import {StartInput} from "./Input/StartInput";
import {MaxInput} from "./Input/MaxInput";
import {Qwerty} from "./gleb/qwertyt";

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

    const incValue = () => {
        setDisplayValue(displayValue + 1);
        if (displayValue >= maxCount) {
            setDisplayValue(maxCount)
        }
    }


    //  [] => only first render
    // [asfaasgasfasf] => whent changed value in array
    // no [] => all times


    const resetValue = () => {
        setDisplayValue(startCount);
    }

    const setValue = () => {
        setMessage(false)
        setError(false)
        setDisplayValue(startCount)
    }

    const addStartCount = (startValue: number) => {
        setStartCount(startValue)
        setMessage(true)
        if (startCount > maxCount || startCount < 0) {
            setError(true)
        } else {
            setError(false)
        }

    }

    const addMaxCount = (maxValue: number) => {
        debugger
        setMaxCount(maxValue)
        setMessage(true)
        if (maxCount < 0 || maxCount < startCount) {
            setError(true)
        } else {
            setError(false)
        }
    }


    return (
        <div className="App">
            <div className="Block">
                <div className="display">
                    <StartInput text={'start value:'}
                                addStartCount={addStartCount}
                                startCount={startCount}
                                error={error}
                    />
                    <MaxInput text={'max value:'}
                              addMaxCount={addMaxCount}
                              maxCount={maxCount}
                              error={error}/>

                </div>
                <div className="counter">
                    <Button
                        text={'set'}
                        callback={setValue}
                        disabled={maxCount < 0 || startCount === maxCount || startCount < 0 || startCount > maxCount}


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
                        disabled={maxCount === displayValue || maxCount < 0 || startCount < 0 || startCount > displayValue}
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


//----------------------------------------------------------------------------------
//
// import React, {useState} from 'react';
//
// import './App.css';
// import {Button} from "./button/Button";
// import {Display} from "./display/Display";
//
// const App = () => {
//
//     const [count, setCount] = useState(0);
//     const incCount = () => {
//         setCount(count + 1);
//         if (count >= 5) {
//             setCount(5)
//         }
//     }
//     const resetNum = () => {
//         setCount(0);
//     }
//
//     return (
//         <div className="App">
//             <div className="Block">
//                 <div className="display">
//                     <Display
//                         count={count}
//                     /></div>
//                 <div className="buttonSum">
//                     <div className="button1">
//                         <Button
//                             text={'inc'}
//                             callback={incCount}
//                             disabled={count === 5}
//                         />
//                         <Button
//                             text={'reset'}
//                             callback={resetNum}
//                             disabled={count === 0}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default App;
