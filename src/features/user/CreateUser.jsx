import { Button } from '@/components/ui/button';
import { useState } from 'react';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-slate-700 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 input mb-6'
      />

      {username !== '' && (
        <div>
          <Button variant="default" type="submit" 
            className="bg-slate-600 hover:bg-slate-700 transition-all uppercase tracking-wide 
            rounded-full focus:outline-none focus:ring focus:ring-teal-500
             focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4">
           Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
