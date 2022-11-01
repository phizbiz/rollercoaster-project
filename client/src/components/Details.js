import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Details = () => {
  let { id } = useParams()
  const [rollerCoasterState, setRollerCoasterState] = useState({
    name: '',
    description: '',
    image: '',
    region: ''
  })

  useEffect(() => {
    const getRollerCoaster = async () => {
      let response = await axios.get(
        `http://localhost:3001/rollercoasters/${id}`
      )
      setRollerCoasterState(response.data)
      console.log(response.data)
    }
    getRollerCoaster()
  }, [])

  return (
    <div>
      <div>
        <h2>{rollerCoasterState.region.name}</h2>
        <h1>{rollerCoasterState.name}</h1>
        <p>{rollerCoasterState.description}</p>
        <img src={rollerCoasterState.image} alt={rollerCoasterState.name}></img>
      </div>
    </div>
  )
}

export default Details
