import { PlusIcon } from '@heroicons/react/20/solid';

function App() {
 return (
  <div className='mx-auto max-w-7xl text-center'>
   <button
    type='button'
    className='rounded-full bg-indigo-600 p-2 mt-12 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
   >
    <PlusIcon className='h-5 w-5' aria-hidden='true' />
   </button>
  </div>
 );
}

export default App;
