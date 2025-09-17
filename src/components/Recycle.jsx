import React from 'react';

function Recycle({ notes, onRestore, onDeletePermanently }) {
  const hasNotes = Array.isArray(notes) && notes.length > 0;

  return (
    <div className='w-238'>
      <h2 className="text-3xl font-semibold mb-4 border-b-2 p-3 rounded-xl inline">Recycle Bin</h2>

      {!hasNotes ? (
        <div className='flex items-center justify-center ms-15 mt-70 w-full'>
          <h1 className='text-3xl'>Empty Recycle Bin</h1>
        </div>
      ) : (
        <div className='w-full'>
          <div className='flex flex-wrap gap-4'>
            {notes.map((note, index) => 
            {
              if (!note || typeof note !== 'object') return null;
              return (
                <div key={`recycle-${index}`} className='mt-10'>
                  <div className='p-4 w-100 border-2 rounded-xl me-10 transition-all duration-300 cursor-pointer hover:bg-black hover:text-white hover:shadow-md hover:scale-110'>
                    <div>
                      <h1 className='text-5xl border-b-2 p-2 inline rounded-xl'>{note.title || 'Untitled'}</h1>
                      <h1 className='text-2xl mt-8'>{(note.note || '').slice(0, 20)}.....</h1>
                      <div className='flex gap-4 mt-4'>
                        <button
                          className='border-2 cursor-pointer border-black p-3 hover:bg-white hover:border-white hover:text-black rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-white'
                          onClick={() => onRestore(index)}
                        >
                          Restore
                        </button>
                        <button
                          className='border-2 cursor-pointer border-black p-3 hover:bg-white hover:border-white hover:text-black rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-white'
                          onClick={() => onDeletePermanently(index)}
                        >
                          Delete Permanently
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Recycle;
