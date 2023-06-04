'use client';

import Image from 'next/image'
import checkout from '../utils/checkout'

export default function Home() {





  return (
    <div className="container">
      <h1>This is the home page title</h1>

      <div className=" bg-slate-300 w-16 h-16">
<button onClick={()=> {
  checkout({
    lineItems: [
      {
        price: 'price_1NFLRiFUqxfl3JtJcmPUHekB',
        quantity: 1
      }
    ]
  })
}}>Buy button</button>
      </div>

      <div className="">

      </div>
    </div>
  )
}
