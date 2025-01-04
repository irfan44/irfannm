interface Props {
  dateString: string
}

const DateTime = ({ dateString }: Props) => {
  const convertedDate = new Date(dateString)
  const date = convertedDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  return <time dateTime={dateString}>{date}</time>
}

export default DateTime
