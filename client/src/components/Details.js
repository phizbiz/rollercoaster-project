import { useEffect, useState } from 'react'
import axios from 'axios'

const Details = () => {
  const initialState = {
    name: '',
    description: '',
    image: '',
    region: ''
  }
  const [rollerCoasterState, setRollerCoasterState] = useState(initialState)

  useEffect(() => {
    const getRollerCoaster = async () => {
      const coaster = await axios.get(
        `http://localhost:3001/rollercoasters/636022bf748ed7efbc0b29d4`
      )

      setRollerCoasterState(
        (rollerCoasterState.name = coaster.data.name),
        (rollerCoasterState.description = coaster.data.description),
        (rollerCoasterState.image = coaster.data.image),
        (rollerCoasterState.region = coaster.data.region)
      )
      console.log(rollerCoasterState)
    }
    getRollerCoaster()
  }, [])

  console.log(rollerCoasterState + ' what')

  return (
    <div>
      <h1>hi</h1>
      <div>
        {/* <div>{rollerCoasterState.name}</div> */}
        {/* <p>{rollerCoaster.description}</p> */}
        {/* <img src={rollerCoaster.image} alt="picture"></img> */}
        {/* <div>rollerCoaster.region</div> */}
      </div>
    </div>
  )
}

export default Details
