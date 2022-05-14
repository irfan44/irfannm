type Props = {
  children?: React.ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;
