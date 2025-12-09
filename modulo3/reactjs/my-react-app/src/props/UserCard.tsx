
export default function UserCard({ user }) {
  return <div>{user.name} - {user.apellido} - {user.age} años - {user.direccion} </div>;
}
