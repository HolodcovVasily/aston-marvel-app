import { HomePage } from './pages/HomePage/HomePage';
import { Favorites } from './pages/Favorites/Favorites';
import { SignIn } from './pages/Sign In/SignIn';
import SignUp from './pages/Sign Up/SignUp';
import { Header } from './components/Header/Header';
import { Footer } from './pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
