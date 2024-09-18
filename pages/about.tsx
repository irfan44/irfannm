import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import AboutMe from 'components/about/AboutMe'
import Experience from 'components/about/Experience'
import Resume from 'components/about/Resume'
import SocialContact from 'components/about/SocialContact'
import PageHeader from 'components/common/layouts/PageHeader'
import Meta from 'components/Meta'
import { ConstantController } from 'lib/controllers/constant'
import { ExperienceController } from 'lib/controllers/experience'
import type { ConstantModel } from 'lib/models/constant'
import type { ExperiencesModel } from 'lib/models/experience'

interface Props {
  aboutImage: string
  aboutMeSource: MDXRemoteSerializeResult
  resumeUrl: ConstantModel
  experiences: ExperiencesModel
}

const About = ({
  aboutImage,
  aboutMeSource,
  resumeUrl,
  experiences,
}: Props) => {
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
      <div className="mx-auto max-w-3xl space-y-12">
        <PageHeader title={pageHeader.title} />
        <AboutMe aboutImage={aboutImage} aboutMeSource={aboutMeSource} />
        <Experience experiences={experiences} />
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
  const experiences = await ExperienceController.getExperiences()

  if (!constants || !experiences) {
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    }
  }

  const aboutImageValue = constants.filter(
    (constant) => constant.slug === 'about-image'
  )
  const aboutImage = aboutImageValue[0].stringValue

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
    props: { aboutImage, aboutMeSource, resumeUrl, experiences },
  }
}

export default About
