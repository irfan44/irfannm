import ExternalLink from 'components/common/base/ExternalLink'
import { resumeURL } from 'datas/resume'

const Resume = () => {
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
            href={resumeURL}
            className="font-bold underline"
          >
            here
          </ExternalLink>{' '}
          <span>(last updated: August 2023)</span>
        </p>
      </div>
    </div>
  )
}

export default Resume
