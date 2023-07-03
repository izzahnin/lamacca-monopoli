import React from 'react'

function Lontara3(props) {
  return (
    <>
    <div className="flex flex-col justify-center align-middle items-center  h-[560px] gap-2 p-3 mb-12 m-auto">
      <h1 className='font-extrabold text-french_rose text-12xl leading-none'>{props.huruf}</h1>
      <p>{props.latin}</p>
    </div>
  </>
  )
}

export default Lontara3