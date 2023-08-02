import { useState } from "react"

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => {
    setIsOpen(!isOpen)
  }
  return { isOpen, onToggle }
}

export default useDisclosure
