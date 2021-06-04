import {useRef , useState  } from'react'
import ReactStars from "react-rating-stars-component";
import {v4 as uuidv4} from 'uuid';

import {Button,Modal,InputGroup,FormControl} from 'react-bootstrap'





function AddMovie(props) {
    const[ file,setfile]=useState(); 
 
var x
    const fileInput=useRef()
    const nameofmovie=useRef();
    const [Rating,setRating]=useState(1);
    
    function handleChange(e)
  {
    setfile(e.target.files[0] )  

      
  }

  function savemovie(){
if (nameofmovie.current.value.length===0 )
{alert ("you should give a name to movie " )
return null;}
if(!file){
  alert("You can't add the movie twice successively ")
}

  if(file)
  {
  
  var reader=new FileReader(); 
    reader.onloadend=()=>{ 
   x= reader.result
console.log(typeof(x))

    console.log(x) 
/* */
    props.add({url: x, name:nameofmovie.current.value,
      rating:Rating,  id:uuidv4()})

     }  
    reader.readAsDataURL(file)

 
setfile(null);
handleClose()
}
}
  
  function addhandlechange(e) {
    e.preventDefault();
   fileInput.current.click(); 
}
const ratingChanged = (newRating) => {
setRating (newRating)};
    
    
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    
    
    
    
    return <div>
      <div className="flexing back" >
       <Button variant="success" className="buttonmodal" onClick={handleShow}>
     Adding new movie
      </Button>
      </div>
      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup>
      <InputGroup.Text >Name of Movie</InputGroup.Text>
      <FormControl as="textarea" aria-label="Name of movie"  ref={nameofmovie} />
      </InputGroup>
    
 
<InputGroup className="flexing">
<Button className="upload" variant="success"   onClick ={addhandlechange}     >Upload a Movie</Button>
</InputGroup>

<InputGroup className="flexing">
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={30}
    activeColor="#ffd700"
    value={1}
/>
</InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={savemovie}>
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    
    <input type="file"    ref={fileInput} style={{display:'none'}} onChange={handleChange} ></input> 

  
    </div>
  
  }
  export default AddMovie