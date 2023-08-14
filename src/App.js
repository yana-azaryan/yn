import React from 'react';
import './commoncss/bootstrap.css';
import './commoncss/font-icon.css';
import './App.css';
import WeadingDate from './components/Date/Date';
import CountDown from './components/CountDown/CountDown';
import Gallery from './components/Gallery/Gallery';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <WeadingDate />
     <CountDown />
     <Gallery />
     <Location />
     <Footer />
    </div>
  );
}

export default App;
