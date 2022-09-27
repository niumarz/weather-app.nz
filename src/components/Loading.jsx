import React from 'react'

export const Loading = () => {
  return (
    <div className='container-load'>
      <div className='cubo'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>
      <div className='Loading'>
        <div> 
          <h1>Loading</h1>
          <p>. . .</p>
        </div>
      </div>
    </div>
  )
}

export default Loading