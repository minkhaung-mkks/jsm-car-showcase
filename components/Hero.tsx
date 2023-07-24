"use client";
import React from 'react'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
const Hero = () => {
    const handleScroll=()=>{

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find, Book or Rent a Car -- quickly and easily!
                </h1>
                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking process.
                </p>
                <CustomBtn
                    title='Explore Cars'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src='/hero.png' alt='hero Image of a car' fill className='object-contain' />
                    <div className="hero__image-overlay"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
