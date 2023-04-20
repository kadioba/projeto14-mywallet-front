import styled from "styled-components";

export default function Transactions() {
    return (
        <TransactionsContainer>
            <ul>
                <ListItemContainer>
                    <div>
                        <span>30/11</span>
                        <strong>Almoço mãe</strong>
                    </div>
                    <Value color={"negativo"}>120,00</Value>
                </ListItemContainer>

                <ListItemContainer>
                    <div>
                        <span>15/11</span>
                        <strong>Salário</strong>
                    </div>
                    <Value color={"positivo"}>3000,00</Value>
                </ListItemContainer>
            </ul>

            <article>
                <strong>Saldo</strong>
                <Value color={"positivo"}>2880,00</Value>
            </article>
        </TransactionsContainer>
    )
}

const TransactionsContainer = styled.article`
  flex-grow: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    display: flex;
    justify-content: space-between;   
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`

const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`

const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`