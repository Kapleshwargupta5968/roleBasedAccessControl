import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div>RBAC</div>
          <NavLink to="/signin">Signin</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <div>
            
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
