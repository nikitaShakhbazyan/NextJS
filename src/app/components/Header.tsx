
import { Navigation } from './Navigation'

const navItems = [
  {label : 'Home',href : '/'},
  {label : 'Blog',href : '/Blog'},
  {label : 'About',href : '/About'},
]

const Header = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  )
}

export {Header}