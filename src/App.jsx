import ProfileCard  from "./ProfileCard";
export default function App(){
  const name = 'Uzzy';
  return (
    <div>
      Hello {name}
      <ProfileCard name='Uzzy' age='10' job='Developer'/>
    </div>
  )
}
  