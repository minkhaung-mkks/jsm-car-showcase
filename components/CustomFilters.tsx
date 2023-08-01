'use client'
import {useState,Fragment} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { filterProps } from '@types'
import { updateSearchParams } from '@utlis'

const CustomFilters = ({title, options} : filterProps) => {
  const [selected, setSelected] = useState(options[0])
  let router = useRouter()
  const handleUpdateParams = (e:{title : string, value:string})=>{
    let newUrl = updateSearchParams(title.toLowerCase(), e.value.toLowerCase())
    router.push(newUrl)
  }
  return (
    <div className="w-fit mt-5 cursor-pointer">
      <Listbox
        value={selected}
        onChange={(e)=>{setSelected(e); handleUpdateParams(e)}}
      >
        <div className="relative w-fit z-10 cursor-pointer">
          <Listbox.Button className={'custom-filter__btn'}>
            <span className='truncate block '>{selected.title}</span>
            <Image
              src='/chevron-up-down.svg'
              alt='Chervon Up Down'
              width={20}
              height={20}
              className={'ml-4 object-contain'}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options
              className="custom-filter__options"
            >
            <Listbox.Option
                value={{title: options[0].title, value: 'all'}}
                className={({active})=>`relative cursor-pointer select-none py-2 px-4 ${active ? 'bg-primary-blue text-white': 'text-gray-900'}`}
              >
                {({selected})=>(
                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                    All
                  </span>
                )}
              </Listbox.Option>
              {options.map((option,index )=>{
                if(index > 0){
                  return(
                    <Listbox.Option
                      key={option.title}
                      value={option}
                      className={({active})=>`relative cursor-pointer select-none py-2 px-4 ${active ? 'bg-primary-blue text-white': 'text-gray-900'}`}
                    >
                      {({selected})=>(
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option.title}
                        </span>
                      )}
                    </Listbox.Option>
                  )
                }
                
            })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilters