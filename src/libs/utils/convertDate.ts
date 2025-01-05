const convertDate = (date: string, isFull: boolean = false) => {
  const currentDate = new Date(date)
  
  if (isFull) {
    return currentDate
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
  }
  
  return currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })
}

export default convertDate
