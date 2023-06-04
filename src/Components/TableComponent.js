import React from 'react'
import { TableItem } from './TableItem'
import { TableHeader } from './TableHeader'
import './TableComponent.css' 

export const TableComponent = (props) => {
  const { items, title } = props
  
  return (
    <div className="table-component">
      <table>
        <TableHeader title={title} />
        <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <TableItem 
                href={item.href} 
                content={item.content}
              ></TableItem>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

