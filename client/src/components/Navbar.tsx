import Link from 'next/link'
import PlaygroundLogo from '../images/PlaygroundLogo.svg'


const Navbar: React.FC = () => (<div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-10 px-5 bg-white">
{/* Logo and title */}
<div className="flex items-center">
  <Link href="/">
    <a>
      <PlaygroundLogo className="w-12 h-10 mr-2" />
    </a>
  </Link>
</div>
{/* Search Input */}
<div className="flex items-center mx-auto bg-purple-200 border rounded-xl hover:border-purple-500 hover:bg-white">
<i className="pl-4 pr-3 text-black fas fa-search"></i> 
<input 
type="text" 
className="py-1 pr-3 bg-transparent rounded-xl w-160 focus:outline-none" 
placeholder="Search"/>
</div>
{/* Auth buttons */}
<div className="flex">
  <Link href="/login">
    <a className="w-32 py-1 mr-4 leading-5 hollow purple button">
      Log in
    </a>
  </Link>
  <Link href="/register">
    <a className="w-32 py-1 leading-5 purple button">
      Log in
    </a>
  </Link>
</div>

</div>
)

export default Navbar