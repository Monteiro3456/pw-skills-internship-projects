import './expensecmp.css'

import React from 'react'


function ExpenseComponent({expensename, expenseprice}) {

  return (

    <div className='expense'>
      <p className='expense-name' >{expensename}</p>
      <p className='expense-price'>{expenseprice}</p>
    </div>

  )

}

export default ExpenseComponent