import * as React from "react"; /* Koko paketti importattu kerralla */
import {useEffect, useState} from "react";

const TableComponent = (props) => {
  const { items, title } = props;
  
  return (
    <div className="table-component" style="padding-top: 5px;"> {/* Inline styling */}
      <tableHeader title={title} />
      {items.map((i) => {
        return (
          <tr> {/* Ei tablea */}
            <TableItem item={i}></TableItem> 
          </tr>
        );
      })}
    </div>
  );
};

/* Samassa tiedostossa useita komponentteja */
/* Yhden mukaisuuden vuoksi isolla TableHeader */
const tableHeader = ({ title }) => { 
  const [timer, setTimer] = useState(0) /* Puolipisteen käyttö epäjohdonmukaista */
  
  /* Tämä ei toimi sekuntti kellona */
  setInterval(() => {
    setTimer(timer + 1) 
  }, 1000)

  return (
    <thead>
      <tr>
        <th>{title} {timer}</th>
      </tr>
    </thead>
  );
};

function TableItem(props) { /* Tässä ei tarvitse käyttää functiota */
  const { content, href } = props;
  const [open, setOpen] = useState(true);
  let extraContent = ""; /* Tästä kanssa useState */

  /* Näitä ei tarvita */
  if (!content) {
    setOpen(false)
  }

  if (!extraContent) {
    return null
  }

  /* Fetchaa joka render */
  useEffect(() => {
    fetch(href).then((response) => {
      extraContent = response.extraContent;
    });
  });

  return (
    <> {/* Tablen sisällä div */}
      <td>
        <button
          className="table-component-toggle-content"
          onClick={(e) => setOpen(!open)}
        >Toggle content</button>
        <span
          style={{ display: open ? "block" : "hidden" }} // Voidaan piilottaa koko elementti jos !open
          className="table-component-content"
        >
          {content}
        </span>
        {/* Sisältö ja extra sisältö ei saman avaus logiikan sisällä */}
        <span className="table-component-extracontent">{extraContent}</span>
      </td>
    </>
  );
}

export default TableComponent