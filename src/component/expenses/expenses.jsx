import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layout';
import ExpenseForm from './expenseForm';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../incomeitem/incomeitem';


function Expenses() {
  const {expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

  useEffect(() =>{
      getExpenses()
  }, [expenses])
  return (
      <ExpenseStyled>
          <InnerLayout>
              <h1>Expenses</h1>
              <h2 className="total-income">Total Expense: <span>${totalExpenses()}</span></h2>
              <div className="income-content">
                  <div className="form-container">
                      <ExpenseForm />
                  </div>
                  <div className="incomes">
                      {expenses.map((income) => {
                          const {_id, title, amount, date, category, description, type} = income;
                          return <IncomeItem
                              key={_id}
                              id={_id} 
                              title={title} 
                              description={description} 
                              amount={amount} 
                              date={date} 
                              type={type}
                              category={category} 
                              indicatorColor="var(--color-green)"
                              deleteItem={deleteExpense}
                          />
                      })}
                  </div>
              </div>
          </InnerLayout>
      </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: hidden;
  font-size: 0.875rem; /* Adjust the font size here */

  h2 {
    font-size: 1.25rem; /* Specific font size for heading */
  }
     .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

  .income-content {
    display: flex;
    gap: 2rem;

  
    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses