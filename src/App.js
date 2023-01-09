
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import {Contact} from './pages/Contact';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <BrowserRouter> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Projects />} />
        <Route path="/" element={<Contact />} />
        </Routes>
       /</BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
