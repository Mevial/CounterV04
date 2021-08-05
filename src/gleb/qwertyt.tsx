import {CustomInput} from "./CustomInput";
import {useState} from "react";

export const Qwerty = () => {
    const [statrtV, setStartV] = useState(0);
    const [maxV, setMaxV] = useState(0);



    const startHandler = (e: any) => setStartV(e.currentTarget.value);
    const maxHandler = (e: any) => setMaxV(e.currentTarget.value);

    return (
        <>
            <CustomInput handler={startHandler} />
            <CustomInput handler={maxHandler} />
        </>
    )
};
