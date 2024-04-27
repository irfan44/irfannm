import { serialize } from 'next-mdx-remote/serialize'
import AboutMe from 'components/about/AboutMe'
import Resume from 'components/about/Resume'
import Experience from 'components/about/Experience'
import SocialContact from 'components/about/SocialContact'
import Meta from 'components/Meta'
import PageHeader from 'components/layouts/PageHeader'
import { aboutMe } from 'datas/about'

const About = ({ aboutMeSource }: any) => {
  const pageMeta = {
    title: 'About',
    description: 'About Irfan Nurghiffari Muhajir',
    ogImage: '/assets/images/irfan.jpeg',
  }

  const pageHeader = {
    title: 'About',
  }

  return (
    <>
      <Meta data={pageMeta} />
      <div className="space-y-12 max-w-3xl mx-auto">
        <PageHeader title={pageHeader.title} />
        <AboutMe aboutMeSource={aboutMeSource} />
        <Experience />
        <Resume />
        <SocialContact />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const aboutMeSource = await serialize(aboutMe)
  return { props: { aboutMeSource } }
}

export default About
