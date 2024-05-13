import "./App.scss";
import {
  ChevronLeft,
  LayoutDashboard,
  BarChartBig,
  PieChart,
  FileStack,
  Factory,
  Settings,
  Bell,
  Search,
} from "lucide-react";
import Logo from "./assets/logo.png";

function App() {
  const handleActive = () => {
    const sidebar = document.querySelector(".sidebarContainer");
    sidebar.classList.toggle("active");
  };

  return (
    <div className='home'>
      <div className='sidebarContainer'>
        <div className='innerContainer'>
          <div onClick={handleActive} className='btnCollaspe'>
            <ChevronLeft color='black' size={24} className='icon' />
          </div>
          <div className='sidebar'>
            <div className='logo'>
              <img src={Logo} alt='' />
              <span>Lets Recode</span>
            </div>
            <div className='search'>
              <div className='searchContainer'>
                <span className='searchIcon'>
                  <Search />
                </span>
                <input type='text' />
              </div>
            </div>

            <div className='menu'>
              <ul>
                {[
                  "Dashboard",
                  "Market",
                  "Analytics",
                  "Reports",
                  "Industries",
                  "Settings",
                  "Notification",
                ].map((item) => (
                  <li key={item}>
                    <span>
                      {item === "Dashboard" ? <LayoutDashboard /> : ""}
                      {item === "Market" ? <BarChartBig /> : ""}
                      {item === "Analytics" ? <PieChart /> : ""}
                      {item === "Reports" ? <FileStack /> : ""}
                      {item === "Industries" ? <Factory /> : ""}
                      {item === "Settings" ? <Settings /> : ""}
                      {item === "Notification" ? <Bell /> : ""}
                    </span>
                    <a href='#'>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='content'>Home</div>
    </div>
  );
}

export default App;
