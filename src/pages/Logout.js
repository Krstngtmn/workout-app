
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Logout.scss";

function Logout() {
  return (
    <div className="logout-page">
      <Header/>
      <div className="bg"></div>
      <div className="logout-container">
        <h1>You have been logged out</h1>
        <button className="btn" type="submit">
    Return to home page</button>
      </div>
      <Footer/>
    </div>

    
  );
}

export default Logout;
