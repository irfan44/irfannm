import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface Props {
  aboutMeSource: MDXRemoteSerializeResult
}

const AboutMe = ({ aboutMeSource }: Props) => {
  return (
    <>
      <div className="flex justify-center mb-12">
        <img
          className="rounded-full"
          alt="Irfan Nurghiffari Muhajir"
          src="/assets/images/irfan.jpeg"
          width="224"
          height="224"
        />
      </div>
      <div className="space-y-6">
        <MDXRemote {...aboutMeSource} />
      </div>
    </>
  )
}

export default AboutMe
