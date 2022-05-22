import AboutMe from 'components/about/AboutMe';
import CurriculumVitae from 'components/about/CurriculumVitae';
import SocialContact from 'components/about/SocialContact';
import WorkExperience from 'components/about/WorkExperience';
import Meta from 'components/common/Meta';
import Container from 'components/layouts/Container';

const About = () => {
  const pageMeta = {
    title: 'About',
    description: 'About Irfan Nurghiffari Muhajir',
    ogImage: '/assets/images/irfan.jpeg',
  };
  return (
    <Container>
      <Meta data={pageMeta} />
      <div className="space-y-12 max-w-3xl mx-auto">
        <AboutMe />
        <WorkExperience />
        <CurriculumVitae />
        <SocialContact />
      </div>
    </Container>
  );
};
export default About;
