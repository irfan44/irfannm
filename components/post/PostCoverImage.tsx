import Image from 'next/image'

type Props = {
  title: string
  src: string
  width: number
  height: number
}

const PostCoverImage = ({ title, src, width, height }: Props) => {
  return (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={width}
      height={height}
      className="rounded-2xl"
      fetchPriority="auto"
    />
  )
}

export default PostCoverImage
