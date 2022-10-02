import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/router';

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
