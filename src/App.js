import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  return (
    <RouterProvider router={router} className='background-pattern'>
    </RouterProvider>
  );
}

export default App;
