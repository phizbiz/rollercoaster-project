import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Details = () => {
  let { id } = useParams()
  const navigate = useNavigate()
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

  const handleDelete = async (event) => {
    event.preventDefault()
    let deleteCoaster = await axios.delete(
      `http://localhost:3001/rollercoasters/${id}`
    )
    navigate(-1)
  }

  return (
    <div>
      <div className="details">
        <h2>{rollerCoasterState.region.name}</h2>
        <h1>{rollerCoasterState.name}</h1>
        <img
          src={rollerCoasterState.image}
          alt={rollerCoasterState.name}
          className="img"
        ></img>
        <p>{rollerCoasterState.description}</p>
        <button type="delete" onClick={handleDelete}>
          Delete Rollercoaster
        </button>
      </div>
    </div>
  )
}

export default Details
