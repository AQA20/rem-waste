import LoadingGif from '@/assets/loading.gif'

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src={LoadingGif} alt="loading-indicator" />
    </div>
  )
}

export default LoadingIndicator
