
import './App.css';
// Components
import Banner from "./sections/Banner";
import Description from "./sections/Description";
import Links from "./sections/Links"
import Socials from "./sections/Socials";
import Forum from "./sections/Forum";





function App() {
  return (
    <div className="App">

    {/* section one */}
    <Banner />

    {/* Section Two */}
    <Description />

    {/* Section Three */}
    <Links />

    {/* Section Four */}
    <Socials />

    {/* Section Five */}
    <Forum />


    </div>
  );
}

export default App;
