import Button from './Button';

const HelloWorld = () => {
    // Declarando variaveis
    let nome = 'fiapinho';

    // Criando a função clique normal
    // function clique() {
    //     alert("Ola Dev fiap")
    // }

    // Criando uma função melhorada
    function clique() {
        alert(`Ola Dev, ${nome}`)
    }

    return (
        <>
            <p>HelloWorld</p>
            <p>Olá, Dev {nome}</p>
            <button onClick={clique}>Clique aqui</button>
            <h3>Botão de um componente</h3>
            <Button/>
        </>
    )
}
export default HelloWorld