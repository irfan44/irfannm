import { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', toggleVisibility)
        } else {
          window.removeEventListener('scroll', toggleVisibility)
        }
      },
      { rootMargin: '0px 0px -100% 0px' }
    )

    const target = document.body
    observer.observe(target)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      observer.unobserve(target)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 rounded-full border border-neutral-200 bg-white p-3 hover:bg-secondary dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/75 lg:bottom-5 lg:right-5"
          onClick={handleScrollToTop}
        >
          <FaChevronUp className="text-sm" />
        </button>
      )}
    </>
  )
}

export default BackToTop
