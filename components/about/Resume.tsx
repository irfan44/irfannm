import ExternalLink from 'components/common/base/ExternalLink'

interface Props {
  resumeUrl: string
  updatedAt: string
}

const Resume = ({ resumeUrl, updatedAt }: Props) => {
  const updateDate = new Date(updatedAt).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div>
      <div className="mb-6">
        <h2>Resume</h2>
      </div>
      <div className="flex space-x-1">
        <span>You can see and download my latest resume</span>
        <ExternalLink
          className="font-bold underline"
          type="text"
          title="Download here"
          href={resumeUrl}
        >
          here
        </ExternalLink>
        <span>(last updated: {updateDate})</span>
      </div>
    </div>
  )
}

export default Resume
