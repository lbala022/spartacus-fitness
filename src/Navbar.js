import logo from './logo.png';

const handleClick = () => {
  if (document.getElementById("myForm").style.display == "none") {
    document.getElementById("myForm").style.display = "block";
  }
  else {
    document.getElementById("myForm").style.display = "none";
  }
  /* document.getElementById("myForm").style.display = "block"; */
}

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <a href="/">HOME</a>
      <a href="/supplements">SUPPLEMENTS</a>
      <a href="/programs">PROGRAMS</a>
      <a href="/contact">CONTACT</a>
      <button onClick={handleClick}>SHOPPING CART</button>
    </div>
  );
}
 
export default Navbar;