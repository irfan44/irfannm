import AboutMe from 'components/pages/about/AboutMe';
import Resume from 'components/pages/about/Resume';
import Experience from 'components/pages/about/Experience';
import SocialContact from 'components/pages/about/SocialContact';
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
        <Resume />
        <SocialContact />
      </div>
    </>
  );
};
export default About;
