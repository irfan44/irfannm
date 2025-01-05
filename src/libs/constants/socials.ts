import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface SocialMedia {
  name: string
  link: string
  icon: IconType
}

const SOCIALS: SocialMedia[] = [
  {
    name: 'Email',
    link: 'mailto:irfannmuhajir@gmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'Github',
    link: 'https://github.com/irfan44',
    icon: FaGithub,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/irfannm',
    icon: FaLinkedinIn,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/irfannm44',
    icon: FaInstagram,
  },
]

export { SOCIALS }
