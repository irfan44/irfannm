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
      <div>
        <p>
          You can see and download my latest resume{' '}
          <ExternalLink
            type="text"
            title="Download here"
            href={resumeUrl}
            className="font-bold underline"
          >
            here
          </ExternalLink>{' '}
          <span>(last updated: {updateDate})</span>
        </p>
      </div>
    </div>
  )
}

export default Resume
