import MemberCard from "./MemberCard";
import Avatar from "./Avatar";
import SecondaryButton from "./SecondaryButton";

export default function User(props) {
  return (
    <div className="user">
      <div className="user__info">
        <Avatar image={props.image} />
        <MemberCard name={props.name} position={props.position} />
      </div>
      <SecondaryButton />
    </div>
  );
}
