import React from 'react'

function Lontara() {
  return (
    <>
      <div className='flex flex-col justify-center align-middle items-center text-center gap-3'>
        <img src={process.env.PUBLIC_URL + "/images/ka.svg"} alt="" />
        <p>(ka)</p>
      </div>
    </>
  )
}

export default Lontara