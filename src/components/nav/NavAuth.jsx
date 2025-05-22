import './nav.scss'
import Button from './Button'

const NavAuth = () => {
  return (
    <div className="nav-auth">
      <Button title={"Sign up"}/>
      <Button title={"Log in"} isLogInBtn={true}/>
    </div>
  )
}

export default NavAuth