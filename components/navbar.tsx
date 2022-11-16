import logo from "*.svg"
import search from "*.png"
import user from "*.png"


const Navbar = () => {
    return (
      <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light  ">
    <a className="navbar-brand" href="http://localhost:3000"> <img src="logo.svg" className="bg-dark" alt="" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link text-dark" href="http://localhost:3000">HYPEINDUSTRY <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="http://localhost:3000/hypeoffers">HYPE OFFERS</a>
        </li> 
        <li className="nav-item ">
          <a className="nav-link text-dark" href="#">SHIPPING</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-dark" href="#">SELLER REQUEST FORM</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0 ms-auto">
        <input className="form-control mr-sm-2 " type="search" placeholder= " Brand, models"/>

        
      </form>
    </div>
  </nav>
  </div>
       )
    
}

export default Navbar