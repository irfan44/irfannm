const convertDate = (date: string) => {
  const convertedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })
  return convertedDate
}

export default convertDate
