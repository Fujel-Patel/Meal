import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Body from './Components/layouts/body/Body.jsx';
import About from './Components/about/About.jsx';
import Contact from './Components/contact/Contact.jsx';
import Cart from './Components/cart/Cart.jsx';
import ErrorPage from './ErrorPage.jsx';
import SignIn from './Components/auth/SignIn.jsx';
import SignUp from './Components/auth/SignUp.jsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
  );
}

export default App;
