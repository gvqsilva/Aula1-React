// Pegando os Dados usando o destruct (desestruturação)
const Dados = ({ nivel, nome, senha }) => {
    return (
        <>
            <hr />
            <p>O nível do usuario é: {nivel}</p>
            <p>O nome do usuario é: {nome}</p>
            <p>A senha do usuario é: {senha}</p>
        </>
    )
}
export default Dados