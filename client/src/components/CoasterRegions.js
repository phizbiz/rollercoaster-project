import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CoasterRegions = () => {
  const [coasters, setCoaster] = useState([])
  const [region, setRegion] = useState([])
  let { id } = useParams()
  let navigate = useNavigate()

  const viewCoaster = (details) => {
    navigate(`/coaster/${details}`)
  }

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`/region/${id}`)
      setCoaster(response.data)
    }
    apiCall()
  }, [id])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`/regions/${id}`)
      setRegion(response.data)
    }
    apiCall()
  }, [id])

  return (
    <div>
      <nav>
        <h2 className="region-title">{region.name}</h2>
      </nav>
      <section className="container-grid">
        {coasters.map((coaster) => (
          <div
            key={coaster._id}
            className="box"
            onClick={() => {
              viewCoaster(coaster._id)
            }}
          >
            <h2>{coaster.name}</h2>
            <img src={coaster.image} alt={coaster.name} className="img" />
          </div>
        ))}
      </section>
    </div>
  )
}

export default CoasterRegions
