import supabase from '../../config/supabaseRestaurant'
import { useEffect, useState } from 'react'

export const RestaurantView = () => {
  const [error, setError] = useState(null)
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data, error } = await supabase.from('restaurants').select()

      if (error) {
        setError('Could not fetch restaurants')
        setRestaurants([])
      }

      if (data) {
        setRestaurants(data)
        setError(null)
      }
    }
    fetchRestaurants()
  }, [])

  return (
    <>
      <h2>Supabase - Restaurants</h2>
      {restaurants &&
        restaurants.map(rest => <div key={rest.id}>{rest.id}</div>)}
    </>
  )
}
