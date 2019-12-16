const validateEntry = (text, emoji, mutate, setError) => {
  if (text.trim().length === 0) {
    setError("no text added")
    return null
  }

  if (emoji.trim().length === 0) {
    setError("no emoji added")
    return null
  }

  mutate()
}

export default validateEntry
