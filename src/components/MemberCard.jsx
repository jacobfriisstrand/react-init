export default function MemberCard(props) {
  return (
    <div className="member__card">
      <h4>{props.name}</h4>
      <p>{props.position}</p>
    </div>
  );
}
