import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
const Navigation = () => {
    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"></CrwnLogo>
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>Shop</Link>
            <Link className="nav-link" to='/sign-in'>Sign In</Link>
          </div>
        </div>
        <Outlet></Outlet>
      </>
    )
}

export default Navigation;