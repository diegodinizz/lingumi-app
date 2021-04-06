export const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response.json()
}

export const getTagList = data => {
  const tags = []

  data.forEach(element => tags.push(...element.tags))

  return tags.filter((item, index, array) => array.indexOf(item) === index)
}
