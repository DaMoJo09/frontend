import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products';

function ProductScreen({match}) {
  const product = products.find((p) => p._id == match.params.id)
  return (
    <div>
     <Link to='/' className='btn btn-light my-3' >Go Back</Link>
     <Row>
       <Col md={6}>
         <Image src={product.image} alt={product.name} fluid />
       </Col>

       <Col md={3}>
         <ListGroup variant="flush">
           <ListGroup.Item>
             <h3>{product.name}</h3>
           </ListGroup.Item>

           <ListGroup.Item>
             <Rating value={product.rating} text={`${product.numRating} ratings`}  color={'rgba(160, 37, 248, 0.255)'}/>
           <h3>{product.name}</h3>
           </ListGroup.Item>

           <ListGroup.Item>
             Price: ${product.price}
           </ListGroup.Item>

           <ListGroup.Item>
             Description: {product.description}
           </ListGroup.Item>

         </ListGroup>
       </Col>

       <Col md={3}></Col>
     </Row>
   </div>
  )
}

export default ProductScreen
