import { useSessionContext } from '@supabase/auth-helpers-react';

const useUserEmail = () => {
  const { session } = useSessionContext();
  return session ? session.user.email : null;
};

export default useUserEmail;