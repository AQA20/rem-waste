import Button from '@/components/Button'
import Next from '@/assets/next.png'

const SummaryFooter = ({ price, period, size, show }) => {
  return (
    <section
      className={`
      bg-card w-full fixed left-0 right-0 bottom-0
      transition-transform duration-500 ease-out transform
      ${show ? 'translate-y-0 opacity-100 z-30' : 'translate-y-full opacity-0'}
    `}
    >
      <section className="px-4 mx-auto lg:max-w-[1280px] py-2">
        <section className="flex items-center justify-between flex-wrap lg:flex-nowrap">
          <section>
            <section className="flex items-center gap-2 mt-2">
              <p>
                <strong>{size}</strong>
              </p>
              <p>|</p>
              <p>
                <strong>{period}</strong>
              </p>
            </section>

            <h2 className="text-primary-lighter">{price}</h2>
          </section>
          <div className="w-full flex items-center md:block md:w-auto">
            <Button title="Back" className="mr-2 md:w-fit" onClick={() => window.history.back()} />
            <Button
              title="continue"
              className="!bg-primary w-full md:w-fit"
              icon={Next}
            />
          </div>
        </section>
        <p className="!text-[14px] mt-3">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
      </section>
    </section>
  )
}

export default SummaryFooter
