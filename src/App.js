import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const pageSize = '6';
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar />

          <LoadingBar
            color='#faac37'
            progress = {progress}
            height = {2.5}
          />

          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key='home' pageSize={pageSize} country='in' category='general' apiKey={apiKey} />}> </Route>
            <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} country='in' category='business' apiKey={apiKey} />}> </Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment' apiKey={apiKey} />}> </Route>
            <Route exact path='/general' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general' apiKey={apiKey} />}> </Route>
            <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country='in' category='health' apiKey={apiKey} />}> </Route>
            <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country='in' category='science' apiKey={apiKey} />}> </Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country='in' category='sports' apiKey={apiKey} />}> </Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country='in' category='technology' apiKey={apiKey} />}> </Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App;