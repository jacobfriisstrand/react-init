export default function MemberCard(props) {
  return (
    <div className="">
      <h4 className="font-medium">{props.name}</h4>
      <p className="text-gray-500">{props.position}</p>
    </div>
  );
}
