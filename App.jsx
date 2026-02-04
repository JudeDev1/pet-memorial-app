import { Route, Routes } from 'react-router-dom';
import CreateMemorial from './addmemorial';
import ContactForm from './contact';
import Home from './home';
import Navbar from './navbar';
import ViewMemorial from './seememorial';
import SignIn from './signnin';
import SignUp from './signup';

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
