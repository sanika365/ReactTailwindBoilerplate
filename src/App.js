import Streak from "./components/Streak";
import CurrentCourse from "./components/CurrentCourse";
import Recommended from "./components/recomandation";
import Learning from "./components/learning";
import Navbar from "./components/Navbar";
import Feature from "./components/feature";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Streak />
      </div>
      <div >
        <CurrentCourse />
      </div>
      <div >
        <Learning />
      </div>
      <div>
        <Recommended />
      </div>
      <div>
        <Feature />
      </div>
     
    </div>
  );
}

export default App;
