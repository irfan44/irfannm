import Meta from 'components/common/Meta';
import Container from 'components/layouts/Container';
import PageHeader from 'components/layouts/PageHeader';
import ProjectList from 'components/projects/ProjectList';

const Projects = () => {
  const pageMeta = {
    title: 'Projects',
    description: "Irfan Nurghiffari Muhajir's projects",
    ogImage: '/assets/images/irfan.jpeg',
  };
  return (
    <Container>
      <Meta data={pageMeta} />
      <PageHeader
        pageTitle="Projects"
        pageDescription="Various projects that I have worked on."
      />
      <ProjectList />
    </Container>
  );
};
export default Projects;
