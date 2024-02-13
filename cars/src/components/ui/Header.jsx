import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { user, setUser } = useAuth();

  return user ? (
    <>
      <h2>Welcome, {user.name}</h2>
      <button onClick={() => setUser(null)} className='btn'>
        Logout
      </button>
    </>
  ) : (
    <button
      className='btn'
      onClick={() =>
        setUser({
          name: 'Yahor',
        })
      }
    >
      Login
    </button>
  );
};

export default Header;
