const Button = ({label}) =>{
    function handleClick(){
        alert(`A label desse botão é ${label}`)
    }

    return <button onClick={handleClick}>{label}</button>
}

export default Button