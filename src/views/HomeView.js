// import { NavLink } from 'react-router-dom'
// import { useParams, useRouteMatch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as MovieBundleApi from '../services/movieBundle-api'
import TrandingList from '../components/TrandingList/TrandingList'

const HomeView = () => {
  // const params = useParams()
  const [trends, setTrends] = useState(null)

  // Срабатывает при маунте
  useEffect(() => {
    fetchData()

    return () => {
      setTrends(null)
    }
  }, [])

  // Запрос при маунте
  const fetchData = async () => {
    const movies = await MovieBundleApi.fetchTrending()
    setTrends(movies)
  }

  return (
    <>
      <TrandingList movies={trends} />
    </>
  )
}
// console.log(HomeView)
export default HomeView
