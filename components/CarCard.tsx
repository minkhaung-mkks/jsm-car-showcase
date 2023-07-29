import Image from 'next/image'
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
            <div className="relative w-full h-40 my-3 object-contain">
                <Image 
                src='/hero.png' 
                alt='car model' 
                fill priority 
                className='object-contain'/>
            </div>
            <div className="relative w-full mt-2 flex">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image 
                            src='/steering-wheel.svg'
                            alt='steering wheel icon'
                        />
                        <p className='text-[14px]'>
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image 
                            src='/tire.svg'
                            alt='Tire icon'
                        />
                        <p className='text-[14px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image 
                            src='/gas.svg'
                            alt='Gas tank icon'
                        />
                        <p className='text-[14px]'>
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard