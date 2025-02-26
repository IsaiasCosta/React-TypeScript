// import { Header } from "./components/header"; 
// import {Aluno}from "./components/aluno";
// import { Footer } from "./components/footer";

import {useState}from 'react'

export default function App() {
  const [input,setInput] = useState("");
  const [aluno,setAluno] = useState("");
  const [idade,setIdade] = useState<string|number>("");
  
  function mostraAluno(){
      setAluno(input)
  }
  return (
    <>
    <div>
      <h1>Conhecendo useStates </h1>
      <input placeholder="Digite o nem : " 
        value={input}
        onChange={(e)=>setInput(e.target.value) }
      />
      <br/>
      <br/>
      <input placeholder='Sua Idade' 
        value={idade}
        onChange={(e)=>setIdade(e.target.value)}/>
      <br />
      <br/>
      <button onClick={mostraAluno}>Mostrar Aluno</button>
      <h3> Bem vindo: {aluno}  sua idade: {idade}</h3>
      </div>
       {/*  <Header/>
       <hr/>
       <Aluno nome="Raquel" idade="25" />
       <Aluno nome="Iara" idade="56" />
       <Aluno nome="Luj" idade="23" />
       <Footer/> */}
     
       </>
  )
}


