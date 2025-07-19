import React from 'react'

export default function Mynotes({note, pinnedNotes, onViewNote, onDeleteNote, onPinNote, onUnpinNote}) {
  const hasAnyNotes = pinnedNotes.length > 0 || note.length > 0;

  const hasUnpinnedNotes = note.length > 0;

  return (
    <div className='ms-30 w-238 flex flex-wrap gap-2'>

      {pinnedNotes.length > 0 && (
        <div className='w-full'>
          <h2 className='text-2xl font-semibold mb-4'>Pinned Notes</h2>
          <div className='flex flex-wrap gap-4'>
            {pinnedNotes.map((notes, index) => (
              <div key={`pinned-${index}`} className='mt-10'>
                <div className='p-4 w-100 border-2 rounded-xl me-10 transition-all duration-300 cursor-pointer hover:bg-black hover:text-white hover:shadow-md hover:scale-110'>
                  <div>
                    <div>
                      <h1 className='text-5xl border-b-2 p-2 inline rounded-xl'>{notes.title}</h1>
                      <h1 className='text-2xl mt-8'>{notes.note.slice(0,20)}.....</h1>
                    </div>
                    <div className='flex gap-4 mt-4'>
                      <button className='border-2 cursor-pointer border-black p-3 hover:bg-white hover:border-white hover:text-black rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-white' 
                        onClick={() => onViewNote({ ...notes, index })}>
                        View Note
                      </button>
                      <button className='border-2 cursor-pointer border-black p-3 hover:bg-white hover:border-white hover:text-black rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-white'
                        onClick={() => onUnpinNote(index)}>
                        Unpin
                      </button>
                      <button className='border-2 cursor-pointer border-black p-3 hover:bg-white hover:border-white hover:text-black rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-white'
                        onClick={() => onDeleteNote(index)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!hasAnyNotes && (
        <div className='flex items-center justify-center ms-40 mt-70'>
          <h1 className='text-3xl'>No notes yet. Start by adding one!</h1>
        </div>
      )}

      {hasUnpinnedNotes && (
        <>
          {pinnedNotes.length > 0 && (
            <h2 className='w-full text-2xl font-semibold my-5'>All Notes</h2>
          )}

          {note.map((notes, index) => (
            <div key={index} className='mt-10'>
              <div className='p-4 w-100 border-2 rounded-xl me-10 transition-all duration-300 cursor-pointer hover:bg-black hover:text-white hover:shadow-md hover:scale-110'>
                <div>
                  <div>
                    <h1 className='text-5xl border-b-2 p-2 inline rounded-xl'>{notes.title}</h1>
                    <h1 className='text-2xl mt-8'>{notes.note.slice(0,20)}.....</h1>
                  </div>
                  <div className='flex gap-4 mt-4'>
                    <button className='border-2 cursor-pointer border-black p-3 hover:bg-white hover:border-white hover:text-black rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-white' 
                      onClick={() => onViewNote({ ...notes, index })}>
                      View Note
                    </button>
                    <button className='border-2 cursor-pointer border-black p-3 hover:bg-white hover:border-white hover:text-black rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-white'
                      onClick={() => onPinNote(index)}>
                      Pin to Top
                    </button>
                    <button className='border-2 cursor-pointer border-black p-3 hover:bg-white hover:border-white hover:text-black rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-white'
                      onClick={() => onDeleteNote(index)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}