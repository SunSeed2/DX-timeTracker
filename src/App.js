import "./assets/App.css";
import "./assets/Header.scss";
import "./assets/mainView.scss";
import "./assets/Home.scss";

import pageList from "./data/pageList";

//Components
import Navbar from "./components/Navbar";
import SidePanel from "./components/SidePanel";

//Pages
import Home from "./pages/Home";

import SingleProjectTracker from "./pages/SingleProjectTracker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="leftContainer">
            <div className="header__logo">Logo</div>
            <div className="leftContainer__sections">
              <div className="tabTitle">
                <span>Tasks</span>
              </div>
              <div className="tabTitle">
                <span>TimeTracker</span>
              </div>
              <div className="tabTitle">
                <span>Reports</span>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="Help">Help</div>
            <div className="Notifications">Notifications</div>
            <div className="Profile">Profile</div>
          </div>
        </div>
        {/* <Navbar pageList={pageList} /> */}
      </header>
      <main>
        <div className="mainView">
          <SidePanel />

          <Home />
        </div>
      </main>
    </div>
  );
}

export default App;
