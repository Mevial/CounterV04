type W = {
    handler: any
}

export const CustomInput = (props: W) => {
    return <input type="number" onChange={props.handler} />
}