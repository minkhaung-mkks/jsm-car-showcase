"use client";
import { CustomBtnProps } from '@types'
import Image from 'next/image';

const CustomBtn = ({title,containerStyles, handleClick,btnType,rightIcon, textStyles}: CustomBtnProps) => {
    return (
        <button
            disabled={false}
            type={btnType||"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div>
                    <Image
                        src={rightIcon}
                        alt='icon'
                        fill
                        className='object-contain'
                    />
                </div>
            )}
        </button>
    )
}

export default CustomBtn
