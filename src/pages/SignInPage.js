import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";


export default function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { setUsername, setAuthToken } = useContext(AuthContext);


  useEffect(verificarSessao, []);

  function verificarSessao() {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token && name) {
      setAuthToken(token)
      setUsername(name)
      navigate("/home")
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault()

    const promisse = axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, formData)

    promisse.then((res) => {
      console.log(res)
      setAuthToken(res.data.token)
      setUsername(res.data.name)
      navigate("/home")
      localStorage.setItem("token", `${res.data.token}`);
      localStorage.setItem("name", `${res.data.name}`);
    })
    promisse.catch((error) => {
      alert(error.response.data)
    })
  }

  return (
    <SingInContainer>
      <form onSubmit={handleSubmit}>
        <MyWalletLogo />
        <input placeholder="E-mail" type="email" name="email" onChange={handleChange} value={formData.email} required />
        <input placeholder="Senha" type="password" name="password" autocomplete="new-password" onChange={handleChange} value={formData.password} required />
        <button type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
