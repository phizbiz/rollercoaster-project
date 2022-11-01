import { useEffect, useState } from 'react'
import axios from 'axios'

const Details = () => {
  const [rollerCoasterState, setRollerCoasterState] = useState({
    name: '',
    description: '',
    image: '',
    region: ''
  })

  useEffect(() => {
    const getRollerCoaster = async () => {
      let response = await axios.get(
        `http://localhost:3001/rollercoasters/63602324748ed7efbc0b29da`
      )
      setRollerCoasterState(response.data)
      console.log(response.data)
    }
    getRollerCoaster()
  }, [])

  return (
    <div>
      <h1>hi</h1>
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
