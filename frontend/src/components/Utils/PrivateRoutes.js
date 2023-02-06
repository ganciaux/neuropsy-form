import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const PrivateRoutes = () => {
  let auth = { token: true };
  const [user, setUser] = useLocalStorage('user', null);

  console.log('private route', user);
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
