import { useState } from "react"

const Contador = () => {
    //Hooks - useState Manipula o estado da variavel
    const [contador, setContador] = useState(0)
    return (
        <>
            <hr />
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button onClick={() => setContador(contador - 1)}>Diminuir</button>
        </>
    )
}
export default Contador