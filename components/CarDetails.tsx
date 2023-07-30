import { CarProps } from '@types'
import React from 'react'

interface CarDetailsProps{
    isOpen: boolean
    closeModel: ()=> void
    car:CarProps
}

const CarDetails = ({isOpen,closeModel,car}: CarDetailsProps)  => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails