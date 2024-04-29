type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5 md:px-16 lg:px-32">{children}</div>
  )
}

export default Container
