import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>Starboard</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/allcoasters">AllCoasters</Link>
        <Link to="/newcoasterform">New Rollercoasters</Link>
      </div>
    </nav>
  )
}

export default Nav
