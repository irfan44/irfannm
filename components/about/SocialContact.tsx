import { RiExternalLinkLine } from 'react-icons/ri'

import ExternalLink from 'components/common/base/ExternalLink'
import socials from 'datas/socials'

const SocialContact = () => {
  return (
    <div>
      <h2 className="mb-6">Contact</h2>
      <p className="mb-2">
        Here are several of my socials for you to look at. Feel free to follow
        and check out for things i do :
      </p>
      <ul className="ml-4 list-disc space-y-1">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <ExternalLink
                className="w-fit underline"
                type="text"
                title={social.name}
                href={social.link}
                iconRight={<RiExternalLinkLine />}
              >
                <span>{social.name}</span>
              </ExternalLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SocialContact
