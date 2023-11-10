import './expeneses.css'



import React, { useEffect } from 'react'
import { useState } from 'react'
import ExpenseComponent from './ExpenseComponent'



function ExpensesComponent() {
    const [expenseData, setExpenseData] = useState([])
    const [expensecause, setExpenseCause] = useState(null)
    const [expenseprice, setExpensePrice] = useState(null)
    const [totalexpense,setTotalExpense] = useState(0)
    
  
  return (
    <div className='expensescmp'>
        <input type="text" name="expensename" id="expensename" placeholder='Enter Expense cause...' value={expensecause} onChange={(e) => {setExpenseCause(e.target.value)}} />
        <input type="number" name="expenseamount" id="expenseamount" placeholder='Enter Expense amount...' value={expenseprice} onChange={(e) => {setExpensePrice(e.target.value)}} />
         <button onClick={()=> {setExpenseData([...expenseData,{expensecause,expenseprice}]);
         setTotalExpense(totalexpense => totalexpense + Number(expenseprice));
         setExpenseCause('');
         setExpensePrice('');
          
          // console.log('id is ',id)
         }}>Add</button>
         <div className="expenses">
  {expenseData.map((expense) => {
        // setTotalExpense(totalexpense + expense.expenseprice)
     
    return <ExpenseComponent expensename={expense.expensecause} expenseprice={expense.expenseprice}  />

     
         } )}
</div>

<div className='total-expenses'>
 

 <p> Total Expense : {totalexpense}</p>
</div>

    </div>
  )

}

export default ExpensesComponent