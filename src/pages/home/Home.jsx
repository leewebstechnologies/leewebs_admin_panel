import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        home container
        home container


      </div>
    </div>
  );
}
export default Home;
