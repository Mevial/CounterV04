import React from 'react';

export type DisplayPropsType = {
    displayValue: number
    maxValue: number
    message?: boolean
    error?: boolean
}
export function Display(props: DisplayPropsType) {
    let messageText = (props.error) ? 'Incorrect value!' : 'enter values and press set'
    return (
        <div className={props.displayValue === props.maxValue ? 'DisplayNum DisplayRed' : 'DisplayNum'}>
            {props.message ? messageText : props.displayValue}
        </div>
    );
}