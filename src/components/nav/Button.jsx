import './nav.scss'

const button = ({ title, isLogInBtn = false }) => {

  return (
    <button className={isLogInBtn ? "nav-auth-login-btn" : 'nav-auth-btn'}>{title}</button>
  )
}

export default button