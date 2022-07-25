import hero from '../assets/hero.png'
import pizza1 from '../assets/pizza1.png'
import pizza2 from '../assets/pizza2.png'
import pizza3 from '../assets/pizza3.png'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'

export function Home(){
  return(
    <>
      <section className="min-h-[549px] w-full">
        <div className='relative flex'>
          <div className='absolute z-10 min-h-[549px] flex justify-center items-center flex-col xl:items-baseline w-full'>
            <h1 className='font-light text-4xl sm:text-6xl text-dark text-center'>
              We Have The
              <span className='pl-3 font-bold'>
                Best pizza!
              </span>
            </h1>

            <h2 className='font-light text-lg sm:text-2xl text-dark mt-10 text-center'>
              Time to enjoy our delicious pizza.
            </h2>

            
              <div className='w-fit h-10 py-3 px-6 mt-9 flex items-center justify-center bg-primary font-medium uppercase text-white rounded-3xl'>
                <Link to='/'>
                  order online
                </Link>
              </div>
          </div>
          <img src={hero} className='hidden xl:absolute xl:right-0 xl:object-cover xl:block'/>
        </div>
      </section>

      <section className='mt-20 mb-20'>
        <main>
          <div className='flex flex-col items-center justify-center gap-16'>
            <h1 className='font-semibold text-4xl'>
              Trending Recipes
            </h1>

            <div className='grid grid-cols-cards-md gap-y-16 grid-rows-1 lg:grid-cols-cards lg:gap-x-5 xl:gap-x-16'>
              <Card 
                src={pizza2} 
                title="Cheese Lovers" 
                desc="Combination of Alfredo sauce and two cheeses – Romano, and Parmesan."
                price="20"
              />
              <Card 
                src={pizza1} 
                title="Pepperoni Pizza" 
                desc="Pizza with homemade spicy beef sausage"
                price="25"
              />
              <Card 
                src={pizza3} 
                title="Margherita Pizza" 
                desc="Made with San Marzano tomatoes, mozzarella cheese, and fresh basil."
                price="35"
              />
            </div>
          </div>
        </main>
      </section>
    </>
    
  )
}