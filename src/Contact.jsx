import { createContext} from 'rect';
import { useContext } from 'react';
import { UserContext } from './App.jsx';

export default function Contact() {
    const {str1}=useContext(UserContext);
  return (
    
    <div>
      <h1>Contact Us</h1>
      <p>{str1}</p>


    </div>
  )
}

