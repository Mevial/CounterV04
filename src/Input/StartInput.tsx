import React from "react";

type InputPropsType = {
    text: string
    startCount: number
    addStartCount: (value: number) => void
    error?: boolean
    setStartCount: (value: number) => void

}

export const StartInput: React.FC<InputPropsType> = (props) => {

    const changeHandler = (value: number) => {
        props.addStartCount(value)
    }


    // const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     let startValue = e.currentTarget.valueAsNumber
    //     props.addStartCount(startValue)
    // }

    return (
        <div className={"SuperInput"}>{props.text}
            <input
                className={props.error ? "errorStart" : ""}
                type="number" onChange={(e) => changeHandler(+e.currentTarget.value)}
                value={props.startCount}/>
        </div>

    )

}