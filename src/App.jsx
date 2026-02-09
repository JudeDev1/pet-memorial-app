import { Route, Routes } from 'react-router-dom';
import ContactForm from './components/memorials/contact';
import Navbar from './components/memorials/navbar';
import CreateMemorial from './pages/memorials/addmemorial';
import Home from './pages/memorials/home';
import ViewMemorial from './pages/memorials/seememorial';
import SignIn from './pages/memorials/signnin';
import SignUp from './pages/memorials/signup';


const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memorials/navbar" element={<Navbar />} />
        <Route path="/memorials/signup" element={<SignUp />} />
        <Route path="/memorials/signin" element={<SignIn />} />
        <Route path="/memorials/addmemorial" element={<CreateMemorial />} />
        <Route path="/memorials/seememorial" element={<ViewMemorial />} />
        <Route path="/memorials/contact" element={<ContactForm />} />
      </Routes> 
    </div>
  );
};

export default App;
