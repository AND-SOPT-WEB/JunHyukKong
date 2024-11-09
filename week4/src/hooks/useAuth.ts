export const useAuth = () => {
  const isLoggedIn = Boolean(localStorage.getItem('user'));
  return isLoggedIn;
}