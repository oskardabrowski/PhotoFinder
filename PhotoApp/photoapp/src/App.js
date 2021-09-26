import './style.css';
import Header from './components/header';

import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="ImagesCardContainer">
      </div>
      <Footer />
    </div>
  );
}

export default App;


{/*
https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
https://api.unsplash.com/search/photos?page=1&query=office
https://api.unsplash.com/search/photos?client_id=YOUR_ACCESS_KEY&query=office



*/}