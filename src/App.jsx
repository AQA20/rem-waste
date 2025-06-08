import Cards from '@/components/Cards'
import { useEffect, useState } from 'react'
import { fetchSkips } from '@/lib/skips'
import LoadingGif from '@/assets/loading.gif'

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

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img src={LoadingGif} alt="loading-indicator" />
      </div>
    )
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <main>
      <section className="mb-8 text-center">
        <h2>Choose Your Skip Size</h2>
        <p>Select the skip size that best suits your needs</p>
      </section>
      <Cards skips={skips} />
    </main>
  )
}

export default App
