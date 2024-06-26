type Props = {
  title: string
  src: string
  width: number
  height: number
}

const PostCoverImage = ({ title, src, width, height }: Props) => {
  return (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      width={width}
      height={height}
      className="rounded-2xl"
    />
  )
}

export default PostCoverImage
