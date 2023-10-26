export default function Avatar(props) {
  return (
    <div className="">
      <img className="aspect-square object-cover max-h-12 rounded-full" src={props.image} alt="" />
    </div>
  );
}
