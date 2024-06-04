import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routes";
import AuthProvider from "./providers/AuthProvider";
 
 import  { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  );
};

export default App;
