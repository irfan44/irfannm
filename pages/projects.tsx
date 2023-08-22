import Meta from 'components/common/Meta';
import PageHeader from 'components/layouts/PageHeader';
import ProjectList from 'components/pages/projects/ProjectList';

const Projects = () => {
  const pageMeta = {
    title: 'Projects',
    description: "Irfan Nurghiffari Muhajir's projects",
    ogImage: '/assets/images/irfan.jpeg',
  };
  return (
    <>
      <Meta data={pageMeta} />
      <PageHeader
        pageTitle="Projects"
        pageDescription="Various projects that I have worked on."
      />
      <ProjectList />
    </>
  );
};
export default Projects;
