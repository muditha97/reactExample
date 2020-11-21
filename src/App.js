import './App.css';
import HeaderBar from "./components/HeaderBar";
import RightNav from './components/RightNav';
import SlideShow from './components/SlideShow';
import LowCarousel from './components/LowCarousel';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="back">
      <BrowserRouter>
      <HeaderBar/>

      <div className="main">
        <div className="row">
          <div className="col-2">
              <RightNav/>
          </div>

          

          <div className="col-10 mt-5">
            <Switch>
                      <Route path="/SlideShow">
                        <SlideShow/>
                        </Route>

                        <Route path="/LowCarousel">
                        <LowCarousel/>
                        </Route>
            </Switch>
            
              
              <hr/>

              

          </div>
          
          

          
          
        </div>

      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
