import { useState, useEffect } from 'react'

const useSectionInView = (sectionId, offset = 0) => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const checkIfInView = () => {
      const rect = section.getBoundingClientRect()
      const isVisible = rect.top >= -offset && rect.top <= window.innerHeight - offset
      setIsInView(isVisible)
    }

    // Check initially
    checkIfInView()

    // Add scroll listener
    window.addEventListener('scroll', checkIfInView)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkIfInView)
    }
  }, [sectionId, offset])

  return isInView
}

export default useSectionInView
