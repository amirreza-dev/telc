import { useState } from 'react';

import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';

import Product from './components/product/Product';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/20/solid';

function App() {
 const [open, setOpen] = useState(false);
 const [deleteComponent, setDeleteComponent] = useState(true);

 const toggleDelete = () => {
  setDeleteComponent(false);
 };

 return (
  <div className='mx-auto max-w-7xl text-center'>
   <button
    onClick={() => setOpen(true)}
    type='button'
    className='rounded-full bg-indigo-600 p-2 mt-12 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
   >
    <PlusIcon className='h-5 w-5' aria-hidden='true' />
   </button>

   <Dialog open={open} onClose={setOpen} className='relative z-10'>
    <DialogBackdrop
     transition
     className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
    />

    <Draggable>
     <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='flex items-end justify-center p-4 text-center sm:items-center sm:p-0'>
       <DialogPanel
        transition
        className='relative transform overflow-y-scroll rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 md:mx-5 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
       >
        <Resizable>
         {deleteComponent ? <Product /> : null}
         <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
          <button
           type='button'
           onClick={() => setOpen(false)}
           className='inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200 sm:ml-3 sm:w-auto'
          >
           Yes
          </button>

          <button
           type='button'
           data-autofocus
           onClick={() => toggleDelete()}
           className='mt-3 inline-flex w-full justify-center rounded-md bg-red-600 hover:bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:mt-0 sm:w-auto'
          >
           No
          </button>
         </div>
        </Resizable>
       </DialogPanel>
      </div>
     </div>
    </Draggable>
   </Dialog>
  </div>
 );
}

export default App;
