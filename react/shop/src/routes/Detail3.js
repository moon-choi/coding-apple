import { useState, useEffect } from 'react';

function Detail3() {
  let [num, setNum] = useState('')

  useEffect(() => {
    if (isNaN(num) == true) {
      alert('그러지마세요')
    }
  }, [num])

  return (
    <input onChange={((e) => { setNum(e.target.value) })}
    />
  )
}

export default Detail3