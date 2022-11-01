import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [regions, updateRegions] = useState([])

  useEffect(() => {
    const api = async () => {
      let response = await axios.get('http://localhost:3001/regions')
      updateRegions(response.data)
    }
    api()
  }, [])

  return (
    <div className="allRegions">
      <h1>Choose a Region:</h1>
      {regions.map((region) => {
        return (
          <Link to={`/${region._id}`}>
            <div className="region" key={region._id}>
              <img src={region.image} />
              <h2>{region.name}</h2>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Home
