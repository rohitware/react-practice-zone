function UserGreeting({ isLogedIn }) {
  return <>{isLogedIn ? <h1>Welcome Back</h1> : <h1> Login Please!</h1>}</>;
}
export default UserGreeting;
