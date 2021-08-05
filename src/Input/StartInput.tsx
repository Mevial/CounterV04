import React, {ChangeEvent} from "react";

type InputPropsType = {
    text: string
    startCount: number
    addStartCount: (startValue: number) => void
    error?: boolean

}

export const StartInput: React.FC<InputPropsType> = (props) => {


    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = e.currentTarget.valueAsNumber
        props.addStartCount(startValue)
    }


    return (
        <div className={"SuperInput"}>{props.text}
            <input
                className={props.error ? "errorStart" : ""}
                type="number" onChange={changeHandler}
                value={props.startCount}/>
        </div>

    )

}