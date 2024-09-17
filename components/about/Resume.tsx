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
      <h2 className="mb-6">Resume</h2>
      <span>
        You can see and download my latest resume{' '}
        <ExternalLink
          className="!inline font-bold underline"
          type="text"
          title="Download here"
          href={resumeUrl}
        >
          here
        </ExternalLink>{' '}
        (last updated: {updateDate})
      </span>
    </div>
  )
}

export default Resume
