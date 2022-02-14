
import  '../style/home.css'
import { useDispatch, useSelector } from 'react-redux'
import {  getProducts} from '../redux/actions/productAction'
import {useEffect} from 'react'
import ProductCard from './ProductCard'
import * as React from 'react';
import {Carousel} from 'react-bootstrap'
import photo from './photo/img.jpg'
import img from './photo/img2.jpg'
import ph from './photo/img1.jpg'
import pic from './photo/img3.jpg'

function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getProducts ())
  }, [dispatch])
  const products = useSelector(state=>state.ProductReducer.product)
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <div style={
    { margin:'200px', marginTop:'50px',}
      }>
      <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WELCOM TO OUR STORE</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRki3Nq_Ko7d5riaKhxSac7wAA3qfAXGNs0TftDFYD7LPqy2Rx071Gu6VQFEKuN7wJqIBY&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>IT TIME FOR SHOPPING </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmWCVTbLMXdIhEO8reiHVzjQUpqLPVVbcCSIMhsoHIW4kue19Iz727S_LCuTUj3VOTMQ&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>OUR  NEW COLLECTION </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  
 
      </div>
  
 </div>
  )}




export default Home;