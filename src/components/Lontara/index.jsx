import React from 'react'

function Lontara() {
  return (
    <>
      <div className='flex flex-col justify-center align-middle items-center text-center max-w-4xl'>
        <h1 className='text-9xl font-bold text-french_rose'>A</h1>
        <img src={process.env.PUBLIC_URL + "/images/ka.png"} alt="" />
        <p>ka</p>
      </div>
    </>
  )
}

export default Lontara