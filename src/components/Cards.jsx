import "../styles/cards.css";
import Card from "./Card";

const DummyData = [
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/01/314502-08012024-1704701651-1569428599-DSC068721.jpg",
    title:
      "Ц.Отгонсүрэн: “Холо лэ байна” дуунд эмзэглэсэн ч тэдгээр уран бүтээлчдийг тоглолтдоо урина",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/01/-08012024-1704702983-87795366-otgonsuren.jpg",
    title:
      "Ц.Отгонсүрэн: “Холо лэ байна” дуунд эмзэглэсэн ч тэдгээр уран бүтээлчдийг тоглолтдоо урина",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/01/314488-08012024-1704687011-659904978-ononhangai.jpg",
    title:
      "Ц.Отгонсүрэн: “Холо лэ байна” дуунд эмзэглэсэн ч тэдгээр уран бүтээлчдийг тоглолтдоо урина",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/01/314502-08012024-1704701651-1569428599-DSC068721.jpg",
    title:
      "Ц.Отгонсүрэн: “Холо лэ байна” дуунд эмзэглэсэн ч тэдгээр уран бүтээлчдийг тоглолтдоо урина",
  },
];

export default function Cards() {
  return (
    <div className="cards">
      <Card data={DummyData[0]} />
      <Card data={DummyData[1]} />
      <Card data={DummyData[2]} />
      <Card data={DummyData[3]} />
    </div>
  );
}
