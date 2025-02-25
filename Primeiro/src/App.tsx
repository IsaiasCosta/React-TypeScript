
export default function App() {
  return (
    <div>
      <h1>Meu Primeiro Programa</h1>
      <Aluno nome="Raquel" />
      <Aluno nome="Iara" />
      <Aluno nome="Luj" />
    </div>
  )
}

function Aluno({nome}:AlunoProps) {
  return (
    <h1> Aluno:{nome} </h1>
  )
}


interface AlunoProps{
  nome:string;
}