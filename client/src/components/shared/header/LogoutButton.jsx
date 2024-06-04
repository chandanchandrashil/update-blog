import {useContext} from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from "react-hot-toast";

const LogoutButton = () => {
  const { logOut } = useContext(AuthContext)
  
  const handleLogout = () => {
    logOut().then(() => {
     toast.success("Logout Successful!")
    }).catch((err) => {
      console.log(err.message)
      toast.error(err.message)
});
    
    
    
  }
  return (
    <button onClick={handleLogout} className="btn text-red-500 py-[1px] border border-blue-300 px-4 rounded hover:text-gray-300">
      Logout
      
    </button>
  );
};

export default LogoutButton;