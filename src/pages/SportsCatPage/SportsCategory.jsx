import React from 'react'
import { useParams } from 'react-router-dom'

const SportsCategory = () => {
    const {category} = useParams()
  return (
   <>
   {category}
   </>
  )
}

export default SportsCategory
