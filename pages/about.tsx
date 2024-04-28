import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import AboutMe from 'components/about/AboutMe'
import Experience from 'components/about/Experience'
import Resume from 'components/about/Resume'
import SocialContact from 'components/about/SocialContact'
import PageHeader from 'components/layouts/PageHeader'
import Meta from 'components/Meta'
import { ConstantController } from 'lib/controllers/constant'
import type { ConstantModel } from 'lib/models/constant'

interface Props {
  aboutMeSource: MDXRemoteSerializeResult
  resumeUrl: ConstantModel
}

const About = ({ aboutMeSource, resumeUrl }: Props) => {
  const pageMeta = {
    title: 'About',
    description: 'About me',
    currentPath: '/about',
  }

  const pageHeader = {
    title: 'About',
  }

  return (
    <>
      <Meta
        title={pageMeta.title}
        description={pageMeta.description}
        currentPath={pageMeta.currentPath}
      />
      <div className="space-y-12 max-w-3xl mx-auto">
        <PageHeader title={pageHeader.title} />
        <AboutMe aboutMeSource={aboutMeSource} />
        <Experience />
        <Resume
          resumeUrl={resumeUrl.stringValue}
          updatedAt={resumeUrl.updatedAt}
        />
        <SocialContact />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const constants = await ConstantController.getConstants()

  const aboutMeValue = constants.filter(
    (constant) => constant.slug === 'about-me'
  )
  const aboutMe = aboutMeValue[0].markdownValue
  const aboutMeSource = await serialize(aboutMe)

  const resumeUrlValue = constants.filter(
    (constant) => constant.slug === 'resume-url'
  )
  const resumeUrl = resumeUrlValue[0]

  return {
    props: { aboutMeSource, resumeUrl },
  }
}

export default About
