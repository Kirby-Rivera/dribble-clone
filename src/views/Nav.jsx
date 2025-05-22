import NavItems from "../components/nav/NavItems";
import NavAuth from "../components/nav/NavAuth";
import '../components/nav/nav.scss'

const Nav = () => {
  return (
    <nav className="nav">
        <NavItems />
        <NavAuth />
    </nav>
  )
}

export default Nav