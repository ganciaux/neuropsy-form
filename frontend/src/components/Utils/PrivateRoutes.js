import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const PrivateRoutes = () => {
  const [user, setUser] = useLocalStorage('user', null);
  let isAuth = false;
  /*
  if (user?.token) {
    var isExpired = false;
    var decodedToken = jwt.decode(user.token, { complete: true });
    var dateNow = new Date();
    console.log(decodedToken);
    if (decodedToken.exp < dateNow.getTime()) {
      isExpired = true;
    }
  }
  */
  return user?.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
