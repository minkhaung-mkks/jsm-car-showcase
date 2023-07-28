import Image from 'next/image'

import {CustomFilters, Hero, Searchbar} from '@components'
import {fetchCars} from '@utlis' 

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length > 0 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
          <div className="home__text-container">
            <h1 className="text-4x1 font-extrabold">
                Available Cars
            </h1>
            <p>Explore our best options</p>
          </div>
          <div className="home__fliters">
            <Searchbar/>
            <div className="home__filter-container">
              <CustomFilters/>
              <CustomFilters/>
            </div>
          </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {}
              </div>
            </section>
          )
          :
          (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>No Cars Found</h2>
              <p>{allCars.message}</p>
            </div>
          )}
      </div>
    </main>
  )
}
