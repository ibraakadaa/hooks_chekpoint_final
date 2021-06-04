import { useState } from'react'

import {v4 as uuidv4} from 'uuid';

import './App.css';
import AddMovie from './AddMovie'
import Filter from './Filter'
function App() {
  const [movie,setMovie]=useState([
    { name :"Batman",
      url:"https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2020/04/the-batman-rober-pattinson-bande-annonce.jpg?resize=1212,712"
 ,id:uuidv4()
 ,rating:4
    },
     {name:"Fast and Furios",
    url:"https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg"
   ,id:uuidv4()
   ,rating:3
  },
  {
   name:"NOBODY"
   ,url:"https://movies.universalpictures.com/media/03-nbd-dm-mainstage-mobile-banner-1080x793-ra-f022221-60354670e5a33-1.jpg"
 ,id:uuidv4()
 ,rating:3
  }



  ]);
  



  function add(newmovie){
  
    setMovie([...movie,newmovie])
  }

function deletemovie(deleteid)
{
  setMovie(movie.filter(elm=>elm.id!==deleteid))
}
  
function changerating(ratingid,newrating)
{
  setMovie(movie.map(elm =>{
                     if(elm.id===ratingid)
                 return {...elm,rating:newrating} 
                 else return ( {...elm} ) } ))
}






  return (
    <div>

<AddMovie  add={add}    /> 

    <Filter movie={movie}   delet={deletemovie}  changerating={changerating}    />
   
     
     
    </div>
  );
}

export default App;
