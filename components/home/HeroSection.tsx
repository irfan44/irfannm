import Title from 'components/common/base/Title'
import ResumeButton from 'components/common/ResumeButton'
import SocialLink from 'components/common/SocialMedia'

interface Props {
  description: string
  resumeUrl: string
}

const HeroSection = ({ description, resumeUrl }: Props) => {
  return (
    <div className="mb-12 flex flex-col items-center py-6 md:flex-row">
      <div className="space-y-6 md:w-1/2">
        <div>
          <p className="text-xl font-bold text-black dark:text-white">Hi,</p>
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
      <div className="flex justify-center md:w-1/2">
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
