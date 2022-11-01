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
        <div>{rollerCoasterState.name}</div>
        <p>{rollerCoasterState.description}</p>
        <img src={rollerCoasterState.image} alt={rollerCoasterState.name}></img>
        <div>{rollerCoasterState.region.name}</div>
      </div>
    </div>
  )
}

export default Details
