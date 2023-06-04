import React, {useEffect, useState} from 'react'

export const TableHeader = ({ title }) => {
  const [timer, setTimer] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timer])

  return (
    <thead>
      <tr>
        <th>{title} {timer}</th>
      </tr>
    </thead>
  );
};