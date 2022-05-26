import AboutMe from 'components/about/AboutMe';
import CurriculumVitae from 'components/about/CurriculumVitae';
import Experience from 'components/about/Experience';
import SocialContact from 'components/about/SocialContact';
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
        <Experience />
        <CurriculumVitae />
        <SocialContact />
      </div>
    </Container>
  );
};
export default About;
