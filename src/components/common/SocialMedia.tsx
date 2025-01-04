import { RiExternalLinkLine } from 'react-icons/ri'

import ExternalLink from '@components/common/base/ExternalLink'
import socials from '@libs/constants/socials'

interface Props {
  type: 'icon' | 'list'
}

const SocialMedia = ({ type }: Props) => {
  return (
    <>
      {type === 'icon' ? (
        <ul className="flex space-x-4">
          {socials.map((social) => {
            return (
              <li
                key={social.name}
                className="text-2xl text-black dark:text-white"
              >
                <ExternalLink
                  type="text"
                  title={social.name}
                  href={social.link}
                >
                  <span>
                    <social.icon />
                  </span>
                </ExternalLink>
              </li>
            )
          })}
        </ul>
      ) : (
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
      )}
    </>
  )
}

export default SocialMedia
