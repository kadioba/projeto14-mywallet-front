import styled from "styled-components"
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";

export default function TransactionsPage() {

  const { tipo } = useParams();
  const [formData, setFormData] = useState({ value: "", description: "" })
  const { authToken, setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate()


  const config = {
    headers: {
      "Authorization": `Bearer ${authToken}`
    }
  }


  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const promisse = axios.post(`${process.env.REACT_APP_API_URL}/nova-transacao/${tipo}`, { value: Number(formData.value), description: formData.description }, config)

    promisse.then(() => {
      navigate("/home")
    })
    promisse.catch((error) => {
      console.log(error)
    })

  }

  return (
    <TransactionsContainer>
      <h1>Nova {tipo}</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Valor" type="number" name="value" value={formData.value} onChange={handleChange} required />
        <input placeholder="Descrição" type="text" name="description" value={formData.description} onChange={handleChange} required />
        <button type="submit">Salvar TRANSAÇÃO</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
