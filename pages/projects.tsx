import Meta from "../components/common/meta";
import PageHeader from "../components/common/page-header";
import Container from "../components/layouts/container";
import Layout from "../components/layouts/layout";
import ProjectCard from "../components/pages/projects/project-card";
import ProjectsList from "../data/projects-list";

const Projects = () => {
  const pageMeta = {
    title: "Projects",
    description: "Irfan Nurghiffari Muhajir's projects",
    ogImage: "/assets/images/irfan.jpeg",
  };
  return (
    <>
      <Meta data={pageMeta} />
      <Layout>
        <Container>
          <PageHeader
            pageTitle="Projects"
            pageDescription="Various projects that I have worked on."
          />
          <div className="mt-12 space-y-8">
            {ProjectsList.map((project) => {
              return (
                <ProjectCard
                  key={project.id + project.name}
                  name={project.name}
                  description={project.description}
                  techStack={project.techStack}
                  sourceCode={project.sourceCode}
                />
              );
            })}
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default Projects;
