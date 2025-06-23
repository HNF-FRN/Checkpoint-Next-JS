import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://dev.to/api/articles?per_page=3');

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const articles = await res.json();


    const projects = articles.map((article) => ({
      key: article.id,
      title: article.title, 
      description: article.description,
    }));

    return { props: { projects } };
  } catch (error) {
    console.error("Failed to fetch projects from Dev.to:", error);
    return { props: { projects: [] } };
  }
}

export default function Projects({ projects }) {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-center my-8">My Projects (i used an API for this they're not actually mine)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project.key} 
                title={project.title}
                description={project.description}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No projects found or failed to load.</p>
          )}
        </div>
      </main>
    </>
  );
}