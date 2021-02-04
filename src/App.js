import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import Rating from './components/Rating'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    
      <Router>
       <Header />
       <main className="py-3">
         <Container>
         <Route path='/home' component={HomeScreen} exact />
         <Route path='/product/:id' component={ProductScreen} />
         <Rating />
         </Container>
       </main>
       <Footer />
      SPENDY
      </Router>
    
  );
}

export default App;
