import Aluno from "./components/Aluno"
import Contador from "./components/Contador"
import Dados from "./components/Dados"
import HelloWorld from "./components/HelloWorld"


function App() {

  return (
    <>
      {/* Chamando o componente HelloWorld */}
      <HelloWorld />

      {/* Chamando o componente Aluno */}
      <Aluno nome="Vasquez" email="gvqsilva@gmail.com" />

      {/* Chamando o componente Dados */}
      <Dados nivel="Admin" nome="Gabriel" senha="123456" />

      {/* Chamando o componente Contador */}
      <Contador />
    </>
  )
}

export default App
