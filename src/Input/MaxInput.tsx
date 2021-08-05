import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    text: string
    addMaxCount: (value: number) => void
    maxCount: number
    error?: boolean
}

export const MaxInput: React.FC<InputPropsType> = (props) => {

    const changeHandler = (value: number) => {
        props.addMaxCount(value)
    }

    return (
        <div className={"SuperInput"}>{props.text}
            <input
                className={props.error ? "errorMax" : ""}
                type="number" onChange={(e) => changeHandler(+e.currentTarget.value)}
                value={props.maxCount}/>
        </div>

    )

}