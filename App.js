import logo from './logo.svg';
import './App.css';
import request from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title=" NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={request.fetcComedyMovies} />
      <Row title="Horror Movie" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries " fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
