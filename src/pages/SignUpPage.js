import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignUpPage() {
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("")
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })
  console.log(formData)

  const navigate = useNavigate()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (formData.password !== confirmacaoSenha) {
      alert("As senhas devem ser iguais")
      return
    }

    const promisse = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, formData)

    promisse.then(() => {
      navigate("/")
    })
    promisse.catch((error) => {
      console.log(error)
    })

  }

  return (
    <SingUpContainer>
      <form onSubmit={handleSubmit}>
        <MyWalletLogo />
        <input data-test="name" placeholder="Nome" type="text" name="name" value={formData.name} onChange={handleChange} required />
        <input data-test="email" placeholder="E-mail" type="email" name="email" value={formData.email} onChange={handleChange} required />
        <input data-test="password" placeholder="Senha" type="password" autocomplete="new-password" name="password" value={formData.password} onChange={handleChange} required />
        <input data-test="conf-password" placeholder="Confirme a senha" type="password" autocomplete="new-password" value={confirmacaoSenha} onChange={e => setConfirmacaoSenha(e.target.value)} required />
        <button data-test="sign-up-submit" type="submit">Cadastrar</button>
      </form>

      <Link to="/">
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
