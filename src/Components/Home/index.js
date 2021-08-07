import NavBar from "../Navbar/index";
import Banner from "../Banner/index";

import "./index.css";
import WhoWeAre from "../WhoWeAre";

const Home = () => (
  <>
    <div className="header-contianer">
      <NavBar />
      <Banner />
    </div>
    <WhoWeAre />
  </>
);

export default Home;
