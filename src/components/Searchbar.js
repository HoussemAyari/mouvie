import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactStars from "react-rating-stars-component";


function Searchbar({searchForFilm, starSearch, setRate}) {
 const [search,setSearch]=useState('')
 const handleChange=(e)=>{
    searchForFilm(e.target.value)
 }
 const startChange = (e)=>{
  starSearch(e.target.value)
 }
 const ratingChanged = (newRating) => {
  setRate(newRating)
};
  return (
    <div style={{ width: '50rem' , display:'flex' }}> 
    <Form className="d-flex" >
    <Form.Control
  
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={handleChange}
    />
    <Button variant="outline-success" /* onSubmit={handleSubmit} */>Search</Button>
    </Form>
    <ReactStars
    count={5}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
    onChange={ratingChanged}
  />
  
    </div>
  )
}

export default Searchbar