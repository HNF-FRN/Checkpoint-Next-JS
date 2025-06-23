export default function ProjectCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
