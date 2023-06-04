import React from 'react'
import ReactDOM from 'react-dom/client'

import { TableComponent } from './Components/TableComponent'
import { items } from './items'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<TableComponent items={items}/>)