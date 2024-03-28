import { Toaster } from 'sonner';
import RoutesApp from './routes';

function App() {
  return (
    <div className='w-100 h-100 bg-white'>
      <Toaster position='top-right' />
      <RoutesApp />
    </div>
  )
}

export default App;
