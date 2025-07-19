import { useState } from 'react'

function Add({Addnote,noteToEdit = null, updateNote }) {
  const [title, setTitle] = useState(noteToEdit?.title || '');
  const [note, setNote] = useState(noteToEdit?.note || '');
  const handleSubmit = (e) => 
    {
    e.preventDefault();
    if (noteToEdit && updateNote) 
      {
        updateNote({ title, note });
      }  
    else if (Addnote) 
      {
        Addnote({ title, note });
      }
    setTitle('');
    setNote('');
    };
  return (
    <div>
      <div className='mb-10'>
        <h1 className='text-3xl font-semibold border-b-2 inline p-4'>Add Your Thoughts</h1>
      </div>
      <div className=' group border-2 rounded-xl me-10 transition-all duration-300 cursor-pointer hover:bg-black hover:text-white hover:placeholder-white'>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5 p-10'>
          <div className='mt-15'>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Title of the Note' className='text-3xl placeholder-black border-b-2 rounded-xl p-2 focus:outline-none group-hover:placeholder-white'/>
          </div>
          <div className='mt-15'>
            <textarea value={note} onChange={(e)=>{setNote(e.target.value)}} placeholder='Start writing your thoughts here...' className='text-xl w-235 h-50 text-x1 border-b-2 rounded-xl p-2 placeholder-black focus:outline-none group-hover:placeholder-white'></textarea>
          </div>
          <div className='mt-5 flex justify-end'>
            <button className='border-2 cursor-pointer border-black p-3 hover:bg-white hover:text-black rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-white hover:border-white'>{noteToEdit ? 'Update Note' : 'Add Note'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Add