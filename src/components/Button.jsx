const Button = () => {
    // Criando a função handleClick
    const handleClick = () => {
        alert("você clicou em um botão componente")
    }
    return (
        <>
            <button onClick={handleClick}>Button do Componente</button>
        </>
    )
}
export default Button