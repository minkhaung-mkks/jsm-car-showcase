import Image from 'next/image'
import React from 'react'

const SearchBtn = ({addtional_classes} : {addtional_classes?: string}) => {
  return (
    <button className={`-ml-3 z-10 ${addtional_classes}`}>
        <Image
            src='/magnifying-glass.svg'
            alt='magnifying glass icon'
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
  )
}

export default SearchBtn