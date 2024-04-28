import ExternalLink from './base/ExternalLink'

interface Props {
  resumeUrl: string
}

const ResumeButton = ({ resumeUrl }: Props) => {
  return (
    <ExternalLink type="button" title="View my resume!" href={resumeUrl}>
      <span className="text-xl">📄</span>
      <span>View Resume!</span>
    </ExternalLink>
  )
}

export default ResumeButton
