import markdownStyles from "../../styles/markdown-styles.module.css";

type Props = {
  children: React.ReactNode;
};

const PostBody = ({ children }: Props) => {
  return <div className="max-w-2xl mx-auto">{children}</div>;
};

export default PostBody;
