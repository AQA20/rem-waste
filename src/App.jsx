import Cards from '@/components/Cards'
import { useEffect, useState } from 'react'
import { fetchSkips } from '@/lib/skips'
import LoadingIndicator from '@/components/LoadingIndicator'

function App() {
  const [skips, setSkips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSkips()
        setSkips(data)
      } catch (err) {
        setError(err.message || 'Error fetching skips')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <LoadingIndicator />
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <main>
      <nav className="bg-primary h-[56px] fixed top-0 right-0 left-0 py-2 z-60">
        <h3 className="text-center underline">
          <a className='px-4 text-wrap' href="https://58qzk9-5173.csb.app/" target="_blank">
            View Version 2.0 (an alternate version of this task — not part of the main page content)
          </a>
        </h3>
      </nav>
      <section className="mb-8 text-center mt-14">
        <h2>Choose Your Skip Size</h2>
        <p>Select the skip size that best suits your needs</p>
      </section>
      <Cards skips={skips} />
    </main>
  )
}

export default App
