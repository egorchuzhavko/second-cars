export const withAuth = (Component) => (props) => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>You're not authorized to view this page</p>;

  return <Component {...props} />;
};
