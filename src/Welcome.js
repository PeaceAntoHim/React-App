/* Cara Export curly bruises */
export default function Welcome() {
    return <h1>Welcome</h1>
}


export function Welcomeh2(props) {
    console.log(props);
    return <h2>{props.children}</h2>
}

export function Welcomeh3() {
    return <h3>Welcome h3</h3>
}

