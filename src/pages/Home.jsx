import {Link} from 'react-router-dom';

export const Home = () => {
  const storedUser = JSON.parse(localStorage.getItem('currentUser'));
  return (<>
  <div>
    <div className="flex flex-col justify-center items-center my-5">
      <div>
        <div className="flex justify-center">
          <img src="notify.png" className="w-70" alt="" />
        </div>
        <h1 className="text-5xl font-bold mb-2">Welcome to Notify</h1>
        <p className=" w-100 text-md text-justify p-2 mt-2 text-gray-600">Take notes. Stay organized. Be productive.Your simple and smart note-taking companion. Capture ideas, organize tasks, and never miss a thought.</p>
        <div className='flex justify-center mt-2'>
          {storedUser ? (<button  className=' border-2 cursor-pointer border-black p-3 hover:bg-black hover:text-white rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-black'><Link to="/notes">Get Started</Link></button>) : 
          (<button  className=' border-2 cursor-pointer border-black p-3 hover:bg-black hover:text-white rounded-3xl hover:shadow-md hover:scale-105 transition-all duration-300 hover:shadow-black'><Link to="/signin">Get Started</Link></button>)}
        </div>
      </div>
    </div>
    <div>
      <div className='mx-10 my-5'>
        <h1 className='text-3xl font-bold border-b-2 inline p-2'>Features</h1>
      </div>
      <div className='flex justify-evenly flex-wrap'>
        <div className='w-70 my-3 border-2 p-4 hover:bg-black rounded-3xl cursor-pointer hover:text-gray-300 hover:shadow-lg hover:shadow-black hover:border-white hover:scale-110 transition-all duration-300'>
          <h3 className="text-xl font-semibold">📝 Easy Note Taking</h3>
          <p className="mx-4 my-3 text-justify">Quickly create and save notes in seconds.</p>
        </div>
        <div className='w-70 my-3 border-2 p-4 hover:bg-black rounded-3xl cursor-pointer hover:text-gray-300 hover:shadow-lg hover:shadow-black hover:border-white hover:scale-110 transition-all duration-300'>
          <h3 className="text-xl font-semibold">📌 Pinned Notes</h3>
          <p className="mx-4 my-3 text-justify">Keep important notes at your fingertips.</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-70 my-3 border-2 p-4 hover:bg-black rounded-3xl cursor-pointer hover:text-gray-300 hover:shadow-lg hover:shadow-black hover:border-white hover:scale-110 transition-all duration-300'>
          <h3 className="text-xl font-semibold">💾 Local Storage</h3>
          <p className="mx-4 my-3 text-justify">All your notes are saved locally on your device using secure LocalStorage.</p>
        </div>
      </div>
      <div className='flex justify-evenly flex-wrap'>
        <div className='w-70 my-3 border-2 p-4 hover:bg-black rounded-3xl cursor-pointer hover:text-gray-300 hover:shadow-lg hover:shadow-black hover:border-white hover:scale-110 transition-all duration-300'>
          <h3 className="text-xl font-semibold">🗃️ Organized</h3>
          <p className="mx-4 my-3 text-justify">Filter, tag, and sort your notes easily.</p>
        </div>
        <div className='w-70 my-3 border-2 p-4 hover:bg-black rounded-3xl cursor-pointer hover:text-gray-300 hover:shadow-lg hover:shadow-black hover:border-white hover:scale-110 transition-all duration-300'>
          <h3 className="text-xl font-semibold">🧹 Trash Recovery</h3>
          <p className="mx-4 my-3 text-justify">Deleted something by mistake? Restore from the trash easily.</p>
        </div>
      </div>
    </div>
    <div className="my-16 text-center">
      <h2 className="text-2xl font-semibold mb-2">Ready to take smarter notes?</h2>
      <p className="my-5">Start organizing your ideas in seconds with Notify.</p>
      {storedUser ? (<button className="border-2 border-black p-3 rounded-3xl hover:bg-black hover:text-white hover:shadow-md hover:shadow-black hover:scale-110 transition-all cursor-pointer duration-300"><Link to="/notes">Go to My Notes</Link></button>) : 
      (<button className="border-2 border-black p-3 rounded-3xl hover:bg-black hover:text-white hover:shadow-md hover:shadow-black hover:scale-110 transition-all cursor-pointer duration-300"><Link to="/signin">Go to My Notes</Link></button>) }
    </div>
  </div>

  </>);
}
