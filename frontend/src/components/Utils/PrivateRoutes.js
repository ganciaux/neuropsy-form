import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const PrivateRoutes = () => {
  const [user, setUser] = useLocalStorage('user', null);

  console.log('private route', user);
  return user?.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
