import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import ScaleLoader from "react-spinners/ScaleLoader";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])
  return (
    <RouterProvider router={router} className='background-pattern'>
      {
        loading ?
          <div className='flex justify-center items-center h-screen'>
            <ScaleLoader
              color="#f7f7f7"
              loading={loading}
              size={80}
            />
          </div>
          :
          <div>
            <Banner/>
          </div>
      }

    </RouterProvider>
  );
}

export default App;
