export default function ProfileCard(Props){
    return (
        <div>
        <h2>Name:{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Profession: {props.job}</p>
        </div>
    )
}