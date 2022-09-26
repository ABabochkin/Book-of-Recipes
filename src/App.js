import {Routes, Route, } from 'react-router-dom';
import { Header } from "./components/Header";

import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound'
import {Category} from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
  return (
    <div className="App">
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/category/:name' element={ <Category /> } />
          <Route path='/meal/:id' element={ <Recipe /> } />
          <Route path='*' element={ <NotFound/> } />
        </Routes>
      </main>
    </>
    </div>
  );
}
export default App;
