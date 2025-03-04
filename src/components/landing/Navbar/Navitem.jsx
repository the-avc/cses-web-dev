const Navitem = ({ text }) => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }
  const textId = text.replace(/\s/g, "").toLowerCase()
  return (
    <p
      style={{ cursor: "pointer", color: "white" }}
      onClick={() => scrollToSection(`#${textId}`)}
      className='navItem'
    >
      {text}
    </p>
  )
}

export default Navitem
