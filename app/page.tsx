import Image from 'next/image'

import {CarCard, CustomFilters, Hero, Searchbar} from '@components'
import {fetchCars} from '@utlis' 
import { fuels, yearsOfProduction } from '@constants';

export default async function Home({searchParams}: {searchParams: {manufacturer: string; year: number; fuel: string; limit: number; model: string;}}) {
  const allCars = await fetchCars({
      manufacturer: searchParams.manufacturer || '',
      year: searchParams.year || 2022,
      fuel: searchParams.fuel || '',
      limit: searchParams.limit || 20,
      model: searchParams.model || '',
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
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
              <CustomFilters
                title={'Fuel Type'}
                options={fuels}
              />
              <CustomFilters
                title={'Year'}
                options={yearsOfProduction}
              />
            </div>
          </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => 
                  <CarCard key={car.name} car={car} />
                )}
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
