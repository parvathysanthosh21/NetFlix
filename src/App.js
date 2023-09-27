import './App.css';
import Banner from './component/Banner';
import Navigation from './component/Navigation';
import Row from './component/Row';
import request from './request';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner fetchUrl={request.fetchNetflixOriginals}/>
   <Row isPoster={true} title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}/>
   <Row title="Trending In India" fetchUrl={request.fetchTrending}/>
   <Row title="Top Rated Movies" fetchUrl={request.fetchTopRated}/>
   <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
   <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
   <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
   <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
   <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>

    </div>
  );
}

export default App;