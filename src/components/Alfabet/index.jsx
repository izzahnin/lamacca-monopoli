import React from 'react'

function Alfabet(props) {
  return (
    <>
    <div className="bg-cover bg-repeat bg-center flex flex-col justify-center align-middle items-center w-full min-h-[100vh] top-[65px] gap-2 px-3 m-auto" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bglontara.svg" })` }}>
      <h1 className='font-extrabold text-french_rose text-12xl leading-none'>{props.huruf}</h1>
      <p className='font-semibold text-navy'>{props.latin}</p>
    </div>
  </>
  )
}

export default Alfabet