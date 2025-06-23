import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const projects = await res.json();
  return { props: { projects } };
}

export default function Projects({ projects }) {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-center my-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.body}
            />
          ))}
        </div>
      </main>
    </>
  );
}
