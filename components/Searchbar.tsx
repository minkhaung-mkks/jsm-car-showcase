'use client'
import {useState} from 'react'
import SearchManufacturer from './SearchManufacturer'
import SearchBtn from './SearchBtn'
import Image from 'next/image'

const Searchbar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const handleSearch=()=>{

    }
    return (
        <form className="searchbar"
            onSubmit={handleSearch}
        >
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchBtn
                    addtional_classes='sm:hidden'
                />
            </div>
            <div className="searchbar__item">
                <Image
                    src='/model-icon.png'
                    width={25}
                    height={25}
                    alt='Car Model Icon'
                    className='absolute w-[20px] h-[20px] ml-4'
                />
                <input
                    type='text'
                    name="model"
                    value={model}
                    onChange={(e)=> setModel(e.target.value)}
                    placeholder='Tiguan'
                    className='searchbar__input'
                />
                <SearchBtn
                    addtional_classes='sm:hidden'
                />
            </div>
            <SearchBtn
                addtional_classes='max-sm:hidden'
            />
        </form>
    )
}

export default Searchbar
