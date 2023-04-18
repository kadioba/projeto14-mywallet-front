import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"

export default function SignUpPage() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("")

  console.log(nome + email + senha + confirmacaoSenha)

  return (
    <SingUpContainer>
      <form>
        <MyWalletLogo />
        <input placeholder="Nome" type="text" value={nome} onChange={e => setNome(e.target.value)} />
        <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Senha" type="password" autocomplete="new-password" value={senha} onChange={e => setSenha(e.target.value)} />
        <input placeholder="Confirme a senha" type="password" autocomplete="new-password" value={confirmacaoSenha} onChange={e => setConfirmacaoSenha(e.target.value)} />
        <button>Cadastrar</button>
      </form>

      <Link>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
