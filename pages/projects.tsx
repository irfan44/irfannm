import Meta from 'components/common/Meta';
import PageHeader from 'components/common/PageHeader';
import Container from 'components/layouts/Container';
import Layout from 'components/layouts/Layout';
import ProjectCard from 'components/projects/ProjectCard';
import projectsList from 'data/projectsList';

const Projects = () => {
  const pageMeta = {
    title: 'Projects',
    description: "Irfan Nurghiffari Muhajir's projects",
    ogImage: '/assets/images/irfan.jpeg',
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
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectsList.map((project) => {
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
