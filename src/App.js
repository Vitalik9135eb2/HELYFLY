
import './_app.module.css';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Photosession from './components/photosession/Photosession';
import Photo from './components/blocks/photo/Photo';
import About from './components/blocks/about/About';
import Schedule from './components/blocks/schedule/Schedule';
import Map from './components/blocks/map/Map';

import Location from './components/blocks/location/Location';
import Reviews from './components/blocks/reviews/Reviews';
import Footer from './components/blocks/footer/Footer';
import ReviewsContainer from './components/blocks/reviews/ReviewsContainer';

function App(props) {
  
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Photosession/>
      <Photo/>
      <About/>
      <Schedule/>
      <Map/>
      <Location/>
      {/* <Reviews store={props.store} addNewReviews={props.addNewReviews} upText={props.upText}/> */}

      {/* <Reviews store={props.store} dispatch={props.dispatch}/> */}

      <ReviewsContainer store={props.store} />
      <Footer/>
    </div>
  );
}

export default App;
