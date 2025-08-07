'use client';

import Logo from '@/components/ui/Logo';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Login logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
        <Logo className='justify-center -ml-8'/>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border-2 border-blue-600 rounded-lg text-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border-2 border-blue-600 rounded-lg text-sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg"
      >
        Login
      </button>
    </form>
  );
}
