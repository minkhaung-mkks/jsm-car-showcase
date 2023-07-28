import { CarProps } from '@types'
import { calculateCarRent } from '@utlis'
import {useState} from 'react'
import CustomBtn from './CustomBtn'
interface CarCardProps{
    car: CarProps
}

const CarCard = ({car}:CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car;
    const carRent = calculateCarRent(city_mpg,year);
    return (
        <div className='car-card group'>
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-center text-[18px] leading-[17px] font-semibold'>
                    $
                </span>
                <span className='self-start text-[28px] font-semibold'>
                    {carRent}
                </span>
                <span className='self-end text-[14px] leading-[17px] font-medium'>
                    /day
                </span>
            </p>
        </div>
    )
}

export default CarCard