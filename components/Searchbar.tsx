'use client'
import React, {useState} from 'react'
import SearchManufacturer from './SearchManufacturer'
import SearchBtn from './SearchBtn'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Searchbar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const router = useRouter()
    const handleSearch=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(manufacturer === '' && model===''){
            alert('Please fill in the search bar')
        }
        updateSearchParams(manufacturer.toLowerCase(),model.toLowerCase())
    }
    const updateSearchParams=(manufacturer: string, model: string)=>{
        const searchParams = new URLSearchParams(window.location.search)
        
        if(manufacturer){
            searchParams.set('manufacturer',manufacturer)
        }
        else{
            searchParams.delete('manufacturer')
        }
        if(model){
            searchParams.set('model',model)
        }
        else{
            searchParams.delete('model')
        }

        const newUrl = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newUrl)
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
                    addtional_classes='sm:hidden self-start'
                />
            </div>
            <div className="searchbar__item self-start">
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
                    addtional_classes='sm:hidden self-start'
                />
            </div>
            <SearchBtn
                addtional_classes='max-sm:hidden self-start'
            />
        </form>
    )
}

export default Searchbar
