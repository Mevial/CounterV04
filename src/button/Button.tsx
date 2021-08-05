import React from 'react';

type ButtonPropsType = {
    text: string,
    disabled: boolean
    callback: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <div>
            <button className={"Button__counter"} disabled={props.disabled}
                    onClick={props.callback}>{props.text}
            </button>

        </div>
    );
}