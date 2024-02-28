import React from 'react'

export default function Home() {
  return (
    <div>

      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://media.istockphoto.com/id/158424399/vector/black-pen.jpg?s=612x612&w=0&k=20&c=txlgyByhPSyh7LlC3_1eQtxzEWAYLoZCEdgFuTmTvuCI=' />


          <div className='img-wrapper item'>

            <span>Books</span>
            <span>Price:1000</span>

          </div>

          
          <div className='btn-wrapper item'>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
