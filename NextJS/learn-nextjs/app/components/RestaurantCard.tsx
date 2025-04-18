import Link from 'next/link';
import { RestaurantCardType } from '../page';
import Price from './Price';

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img
          // src='https://resizer.otstatic.com/v2/photos/wide-huge/1/29066299.jpg'
          src={restaurant.main_image}
          alt='logo'
          className='w-full h-36'
        />
        <div className='p-1'>
          <h3 className='font-bold text-2xl mb-2'>{restaurant.name}</h3>
          <div className='flex items-start'>
            <div className='flex mb-2'>*****</div>
            <p className='ml-2'>77 reviews</p>
          </div>
          <div className='flex text-reg font-light capitalize'>
            <p className=' mr-3 capitalize'>{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className='text-reg mt-1 font-bold'>Booked 10 times today</p>
        </div>
      </Link>
    </div>
  );
}
