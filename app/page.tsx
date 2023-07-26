import Image from 'next/image'

import {CustomFilters, Hero, Searchbar} from '@/components'

export default function Home() {
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
      </div>
    </main>
  )
}
