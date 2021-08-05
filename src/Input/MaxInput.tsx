import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    text: string
    addMaxCount: (maxValue: number) => void
    maxCount: number
    error?: boolean

}

export const MaxInput: React.FC<InputPropsType> = (props) => {

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = e.currentTarget.valueAsNumber
        props.addMaxCount(maxValue)
    }

    return (
        <div className={"SuperInput"}>{props.text}
            <input
                className={props.error ? "errorMax" : ""}
                type="number" onChange={changeHandler}
                value={props.maxCount}/>
        </div>

    )

}