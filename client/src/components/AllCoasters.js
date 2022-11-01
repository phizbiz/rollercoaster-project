import { useState, useEffect } from 'react'
import axios from 'axios'

const AllCoasters = () => {
  const [coasters, updateCoasters] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/rollercoasters`)
      updateCoasters(response.data)
    }

    apiCall()
  }, [])

  return (
    <div>
      <header>
        <h1 className="nav-title">Rollercoasters</h1>
      </header>
      <section className="container-grid">
        {coasters.map((coaster) => (
          <div key={coaster._id} className="box">
            <h2>{coaster.name}</h2>
            <img src={coaster.image} alt={coaster.name} className="img" />
          </div>
        ))}
      </section>
    </div>
  )
}

export default AllCoasters
