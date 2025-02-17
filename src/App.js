
import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import { RouterProvider } from 'react-router-dom';

function App() {
 const router=createBrowserRouter([
  {path:"/",element:<Layout/>,}
 ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
