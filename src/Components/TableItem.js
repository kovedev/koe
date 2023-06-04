import React, {useEffect, useState} from 'react'
import './TableItem.css'

export const TableItem = ({ content, href }) => { 
  const [open, setOpen] = useState(true)
  const [extraContent, setExtraContent] = useState(null)

  useEffect(() => {
    fetch(href)
    .then(response => response.json())
    .then(data => setExtraContent(data.body)) // data.extraContent
  }, [href])

  return (
    <td>
      <button
        className="table-component-toggle-content"
        onClick={(e) => setOpen(!open)}
      >Toggle content</button>
      {(open && content) &&
        <>
          <span
            className="table-component-content"
          >
            {content}
          </span>
          {extraContent && 
            <span className="table-component-extracontent">{extraContent}</span>
          }
        </>
      }
    </td>
  );
}