import './App.css';
import {movies} from './components/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Searchbar from './components/Searchbar';
import {useState} from "react"
import AddFilm from './components/AddFilm';
  


function App() {
 const [films,setFilms]=useState(movies);
 const [search,setSearch]=useState('');
 const [Rate,setRate]=useState(0)

 const searchForFilm=(input)=>{
  setSearch(input)
 }


 
 const addFilm=(x)=>{
 let newFilm=[...films.film,x]
 
setFilms({film:newFilm})



 }
  return (

    <div className="App">
    <Searchbar searchForFilm={searchForFilm} setRate={setRate}  />
    <AddFilm addFilm={addFilm}   />
     <List films={films} search={search} Rate={Rate} />
    </div>
  );
}

export default App;
