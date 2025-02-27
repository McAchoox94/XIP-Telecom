"use client";

import { useAuth } from '@/context/AuthContext';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const PageTest = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-screen pt-20 flex items-center justify-center'>
      {loading ? (
        <div className='flex gap-2 items-center justify-center'>
          <Loader2 className='animate-spin'/> Chargement ...
        </div>
      ) : user ? (
        <p>{user.email}</p>
      ) : (
        <p>Aucun utilisateur trouvé</p>
      )}
    </div>
  );
};

export default PageTest;