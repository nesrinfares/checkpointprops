

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from './Profils/Profilscomponent/Bio';
import FullName from './Profils/Profilscomponent/FullName';
import Profession from './Profils/Profilscomponent/Profession';

function App() {
 
  
  return (
    <div  className='app'>
      <Bio/>
      <FullName/>
      <Profession/>
       
    </div>
  );
}

export default App;
