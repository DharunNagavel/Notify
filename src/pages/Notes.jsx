import { useState, useEffect } from 'react';
import Mynotes from '../components/Mynotes';
import Recycle from '../components/Recycle';
import Add from '../components/Add';

function Notes(UserEmail) {
  const [visiblecomponent, setvisiblecomponent] = useState('Mynotes');
  const [selectedNote, setSelectedNote] = useState(null);

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('mynotes');
    return saved ? JSON.parse(saved) : [];
  });

  const [recycleBinNotes, setRecycleBinNotes] = useState(() => {
    const saved = localStorage.getItem('recycleBin');
    return saved ? JSON.parse(saved) : [];
  });

  const [pinnedNotes, setPinnedNotes] = useState(() => {
    const saved = localStorage.getItem('pinnedNotes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('mynotes', JSON.stringify(notes));
    localStorage.setItem('recycleBin', JSON.stringify(recycleBinNotes));
    localStorage.setItem('pinnedNotes', JSON.stringify(pinnedNotes));
  }, [notes, recycleBinNotes, pinnedNotes]);


  const handleAddNote = (newNote) => {
    setNotes(prev => [...prev, newNote]);
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes(prev => 
      prev.map((n, i) => i === selectedNote.index ? updatedNote : n)
    );
    setSelectedNote(null);
    setvisiblecomponent('Mynotes');
  };

  const handleDeleteNote = (indexToDelete, isPinned = false) => {
    let deletedNote;
    if (isPinned) {
      deletedNote = pinnedNotes[indexToDelete];
      setPinnedNotes(prev => prev.filter((_, i) => i !== indexToDelete));
    } else {
      deletedNote = notes[indexToDelete];
      setNotes(prev => prev.filter((_, i) => i !== indexToDelete));
    }
    setRecycleBinNotes(prev => [...prev, deletedNote]);
  };

  const handleRestoreNote = (indexToRestore) => {
    const restoredNote = recycleBinNotes[indexToRestore];
    setRecycleBinNotes(prev => prev.filter((_, i) => i !== indexToRestore));
    setNotes(prev => [...prev, restoredNote]);
  };

  const handleDeletePermanently = (indexToDelete) => {
    setRecycleBinNotes(prev => prev.filter((_, i) => i !== indexToDelete));
  };

  const handlePinNote = (index) => {
    const noteToPin = notes[index];
    setPinnedNotes(prev => [...prev, noteToPin]);
    setNotes(prev => prev.filter((_, i) => i !== index));
  };

  const handleUnpinNote = (index) => {
    const noteToUnpin = pinnedNotes[index];
    setNotes(prev => [...prev, noteToUnpin]);
    setPinnedNotes(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className='mx-10 mt-5 p-10'>
      <div className='flex gap-10'>
        <div className='border-r-2 border-black mt-10 ps-0 p-10 sticky top-0'>
          <div className='flex flex-col gap-10'>
            <button onClick={() => setvisiblecomponent('Add')} className='cursor-pointer'>
              <div className='w-70 border-2 border-black p-5 rounded-2xl hover:bg-black hover:border-white hover:text-white hover:shadow-md hover:shadow-black hover:scale-110 transition-all duration-300'>
                <h1 className='text-2xl font-semibold'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus inline mb-1">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12h8"/>
                    <path d="M12 8v8"/>
                  </svg> Add Note
                </h1>
                <p>Capture your thoughts instantly start a new note.</p>
              </div>
            </button>
            <button onClick={() => setvisiblecomponent('Recycle')} className='cursor-pointer'>
              <div className='w-70 border-2 border-black p-5 rounded-2xl hover:bg-black hover:border-white hover:text-white hover:shadow-md hover:shadow-black hover:scale-110 transition-all duration-300'>
                <h1 className='text-2xl font-semibold'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2 inline mb-1">
                    <path d="M10 11v6"/>
                    <path d="M14 11v6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                    <path d="M3 6h18"/>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg> Recycle Bin
                </h1>
                <p>Your deleted notes live here until you're ready to recover or remove them forever</p>
              </div>
            </button>
            <button onClick={() => setvisiblecomponent('Mynotes')} className='cursor-pointer'>
              <div className='w-70 border-2 border-black p-5 rounded-2xl hover:bg-black hover:border-white hover:text-white hover:shadow-md hover:shadow-black hover:scale-110 transition-all duration-300'>
                <h1 className='text-2xl font-semibold'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text-icon lucide-scroll-text inline mb-1">
                    <path d="M15 12h-5"/>
                    <path d="M15 8h-5"/>
                    <path d="M19 17V5a2 2 0 0 0-2-2H4"/>
                    <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>
                  </svg> My Notes
                </h1>
                <p>Your ideas, plans, and thoughts neatly organized.</p>
              </div>
            </button>
          </div>
        </div>
        <div>
          {visiblecomponent === 'Add' && (
            <Add
              Addnote={handleAddNote}
              noteToEdit={selectedNote}
              updateNote={handleUpdateNote}
              UserEmail={UserEmail} 
            />
          )}

          {visiblecomponent === 'Recycle' && (
            <Recycle
              notes={recycleBinNotes}
              onRestore={handleRestoreNote}
              onDeletePermanently={handleDeletePermanently}
            />
          )}

          {visiblecomponent === 'Mynotes' && (
            <Mynotes
              note={notes}
              pinnedNotes={pinnedNotes}
              onDeleteNote={handleDeleteNote}
              onViewNote={(note) => {
                setSelectedNote(note);
                setvisiblecomponent('Add');
              }}
              onPinNote={handlePinNote}
              onUnpinNote={handleUnpinNote}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;