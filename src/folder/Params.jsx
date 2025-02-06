import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {a}=useParams();
  return (
    <div>
        Parameter is {a}
    </div>
  )
}

export default Params