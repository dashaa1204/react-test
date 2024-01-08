import "../styles/card.css";

export default function Card({ data }) {
  console.log(data);
  return (
    <div className="card">
      <img src={data.img} alt="" />
      <p>{data.title}</p>
    </div>
  );
}
