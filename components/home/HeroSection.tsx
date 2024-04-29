import Title from 'components/common/base/Title'
import ResumeButton from 'components/common/ResumeButton'
import SocialLink from 'components/common/SocialMedia'

interface Props {
  description: string
  resumeUrl: string
}

const HeroSection = ({ description, resumeUrl }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center py-6 mb-12">
      <div className="md:w-1/2 space-y-6">
        <div>
          <p className="font-bold text-xl text-black dark:text-white">Hi,</p>
          <Title type="pageTitle">I&apos;m Irfan! 👋</Title>
        </div>
        <p>{description}</p>
        <div>
          <ResumeButton resumeUrl={resumeUrl} />
        </div>
        <div className="flex space-x-4 py-4">
          <SocialLink />
        </div>
      </div>
      <div className="md:w-1/2 justify-center flex">
        <img
          src="/assets/images/Person.svg"
          alt="Hero"
          width="320"
          height="320"
        />
      </div>
    </div>
  )
}

export default HeroSection
