import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'

const NewCoasterForm = () => {
  const [coasters, updateCoasters] = useState([])
  const [regions, updateRegion] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    image: '',
    region: '1'
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/rollercoasters')
      updateCoasters(response.data)
      console.log(response.data)
    }
    apiCall()
  }, [])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/regions')
      updateRegion(response.data)
    }
    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newCoaster = await axios
      .post('/rollercoasters', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateCoasters([...coasters, newCoaster.data])
    setFormState({ name: '', description: '', image: '' })
  }

  return (
    <div>
      <h1>New Rollercoaster</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={formState.description}
          onChange={handleChange}
        />
        <label htmlFor="image">Image:</label>
        <input id="image" value={formState.image} onChange={handleChange} />
        <select id="region" onChange={handleChange}>
          <option value="1" placeholder="select">
            Select
          </option>
          {regions.map((regionCoaster) => (
            <option value={regionCoaster._id} key={regionCoaster._id}>
              {regionCoaster.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Rollercoaster</button>
      </form>
      <h1>Rollercoasters</h1>
      <div className="container-grid">
        {coasters.map((coaster) => (
          <div key={coaster._id} className="box">
            <h3>
              <img src={coaster.image} className="img" />
            </h3>
            <h2>Rollercoaster: {coaster.name}</h2>
            <h3>Description: {coaster.description}</h3>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  )
}
export default NewCoasterForm
