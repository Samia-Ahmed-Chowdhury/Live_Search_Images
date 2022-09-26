import React from 'react'

function Sresult(props) {
    const{data}=props
    const img=`https://source.unsplash.com/480x480/?${data}`
  return (
    <>
    <div className='ResultHolder'>
        <img src={img}  className='img-fluid' alt="img" />
        </div>
    </>
  )
}

export default Sresult