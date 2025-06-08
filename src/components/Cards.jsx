import Card from '@/components/Card'
import { useState } from 'react'
import SummaryFooter from '@/components/SummaryFooter'
import clsx from 'clsx'

const Cards = ({ skips, className }) => {
  const [skipId, setSkipId] = useState(null)
  const skip = skips.find((skip) => skip.id === skipId)
  return (
    <section
      className={clsx('flex items-center flex-wrap gap-4 pb-80 md:pb-44', className)}
    >
      {skips.map((skip) => (
        <Card
          key={skip.id}
          highlight={`${skip.size} Yards`}
          img={`/images/${skip.size}-yarder-skip.webp`}
          imgAlt={`${skip.size} Yarder Skip`}
          title={`${skip.size} Yard Skip`}
          subtitle={`${skip.hire_period_days} day hire period`}
          price={`£${skip.price_before_vat}`}
          onSelect={() => setSkipId(skip.id)}
          isSelected={skipId === skip.id}
          isAllowedOnTheRoad={skip.allowed_on_road}
          isSuitableForHeavyWaste={skip.allows_heavy_waste}
        />
      ))}

      <SummaryFooter
        className="mt-80 md:mt-44"
        price={`£${skip?.price_before_vat}`}
        period={`${skip?.hire_period_days} day hire period`}
        size={`${skip?.size} Yard Skip`}
        show={Boolean(skip)}
      />
    </section>
  )
}

export default Cards
