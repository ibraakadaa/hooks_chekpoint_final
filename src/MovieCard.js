
import ReactStars from "react-rating-stars-component";
import {Card,Button} from 'react-bootstrap'
import {useState,useEffect} from "react"
function MovieCard({src,name,rating,delet,id,changerating,updating,deletefromfiltermovie,filterchangerating})
{  const [rate,setRate]=useState(rating)
  
  var ratemovie=rating
function fndelet()
  {
    delet(id)
    deletefromfiltermovie(id)
  }
   
  const ratingChanged=(newRating)=>{

    changerating(id,newRating)
    filterchangerating(id,newRating)
     ratemovie=newRating
     setRate(newRating) 
    /*updating()*/
    
  }
  useEffect(()=>{
    
    console.log("ratingis chaged")
    setRate(rating)}

  ,[rating])


    return( <div  >
    <Card className="moviecard" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={src}  style={{ width: '18rem' , height:"20rem"}} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <div className="flexing">
  <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    value={rate}
    onChange={ratingChanged}
  />
  </div>
  <Button  className="deletebutton"variant="danger" onClick={fndelet}  >Delte</Button>
  
</Card>  
    
    </div>)
   
 
}



export default MovieCard 