import AboutMe from 'components/about/AboutMe';
import CurriculumVitae from 'components/about/CurriculumVitae';
import Experience from 'components/about/Experience';
import SocialContact from 'components/about/SocialContact';
import Meta from 'components/common/Meta';
import PageHeader from 'components/layouts/PageHeader';

const About = () => {
  const pageMeta = {
    title: 'About',
    description: 'About Irfan Nurghiffari Muhajir',
    ogImage: '/assets/images/irfan.jpeg',
  };
  return (
    <>
      <Meta data={pageMeta} />
      <div className="space-y-12 max-w-3xl mx-auto">
        <PageHeader pageTitle="About" />
        <AboutMe />
        <Experience />
        <CurriculumVitae />
        <SocialContact />
      </div>
    </>
  );
};
export default About;
