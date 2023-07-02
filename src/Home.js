import primalProtein from './primal-protein.png';

const Home = () => {

  const handleClick = () => {
    document.getElementById("myForm").style.display = "block";
  }

  const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  }

  return (
    <div className="home">
      
      <h1>Spartacus Fitness</h1>
      <br />
      <div className="parent-container primal-protein">
        <div className="left-container">
          <h6>#1 RECOMMENDED PROTEIN SUPPLEMENT BY PROFESSIONALS</h6>
          <h3>PRIMAL PROTEIN</h3>
          <h5>AWAKEN YOUR HIDDEN POTENTIAL NOW</h5>
          <button onClick={handleClick} className="buy-now">BUY NOW</button>
        </div>
        <div className="right-container">
          <img src={primalProtein} className="primal" alt="primal-protein" />
        </div>
      </div>
      <br />
      <div className="parent-container greek-warrior">
        <div className="left-container">
          <h6>PROVEN THROUGH HUNDREDS OF TESTIMONIALS</h6>
          <h3>GREEK WARRIOR PROGRAM</h3>
          <h5>TRANSFORM YOUR PHYSIQUE</h5>
          <button onClick={handleClick} className="buy-now">BUY NOW</button>
        </div>
        <div className="right-container">
          <img src={primalProtein} className="primal" alt="primal-protein" />
        </div>
      </div>
      <br />
      <div className="parent-container creatine-power">
        <div className="left-container">
          <h6>GUARANTEED TO SEE BETTER RESULTS</h6>
          <h3>CREATINE POWER</h3>
          <h5>TAKE A STEP FORWARD</h5>
          <button onClick={handleClick} className="buy-now">BUY NOW</button>
        </div>
        <div className="right-container">
          <img src={primalProtein} className="primal" alt="primal-protein" />
        </div>
      </div>
    
      <div className="form-popup" id="myForm">
        <form className="form-container">
            <h3>YOUR SHOPPING CART</h3>
            <br />
            <p>Your shopping cart is empty...</p>
            <a href="/">CHECKOUT</a>
            {/* <button type="button" className="btn cancel" onClick={closeForm}>Close</button> */}
        </form>
      </div>
    
    </div>

  );
}
 
export default Home;