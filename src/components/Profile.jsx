import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const them = useSelector((state) => state.them.value);
  return (
    <div style={{ color: them }}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
