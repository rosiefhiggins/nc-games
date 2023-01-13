import './App.css';
import Header from './Components/Header'
import Reviews from './Components/Reviews'
import Navigation from './Components/Navigation';
import SingleReview from './Components/SingleReview';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/api/reviews" element={<Reviews/>}/>
        <Route path="/api/reviews/:review_id" element={<SingleReview />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
