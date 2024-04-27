import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'

const AboutMe = ({ aboutMeSource }: any) => {
  return (
    <>
      <div className="flex justify-center mb-12">
        <Image
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
