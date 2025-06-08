import Button from '@/components/Button'
import Next from '@/assets/next.png'

const SummaryFooter = ({ price, period, size, show }) => {
  return (
    <section
      className={`
      bg-card-gradient w-full fixed left-0 right-0 bottom-0
      transition-all duration-500 ease-out z-30
      ${show ? 'opacity-100' : 'opacity-0'}
    `}
    >
      <section className="px-4 lg:px-[11%] py-3">
        <section className="flex items-center justify-between flex-wrap lg:flex-nowrap">
          <section>
            <section className="flex items-center gap-2">
              <p>
                <strong>{size}</strong>
              </p>
              <p>|</p>
              <p>
                <strong>{period}</strong>
              </p>
            </section>

            <h2 className="text-primary">{price}</h2>
          </section>
          <div>
            <Button title="Back" className="mr-2" onClick={() => window.history.back()} />
            <Button
              title="continue"
              className="bg-primary hover:bg-primary-hover"
              icon={Next}
            />
          </div>
        </section>
        <p className="!text-[14px] mt-4">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
      </section>
    </section>
  )
}

export default SummaryFooter
