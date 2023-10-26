import MemberCard from "./MemberCard";
import Avatar from "./Avatar";
import SecondaryButton from "./SecondaryButton";

export default function User(props) {
  return (
    <li className="flex place-items-center justify-between py-4">
      <div className="flex gap-3">
        <Avatar image={props.image} />
        <MemberCard name={props.name} position={props.position} />
      </div>
      <SecondaryButton />
    </li>
  );
}
