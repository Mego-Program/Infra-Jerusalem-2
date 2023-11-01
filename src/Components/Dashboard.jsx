import outer_circle from '../assets/outer_circle.svg';

export default function Dashboard() {
  return (
    <div className="bg-slate-600">
      <img src={outer_circle} alt="" />
      <i class="fa-solid fa-gauge-simple-high"></i>
      <h1>Dashboard</h1>
    </div>
  );
}
