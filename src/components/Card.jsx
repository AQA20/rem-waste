import Button from '@/components/Button'
import clsx from 'clsx'
import RestrictionBadge from '@/components/RestrictionBadge'
import WarningIcon from '@/assets/warning.png'
import DangerIcon from '@/assets/danger.png'
import { useState } from 'react'
import LoadingIndicator from '@/components/LoadingIndicator'

const Card = ({
  highlight,
  title,
  subtitle,
  price,
  img,
  imgAlt,
  onSelect,
  isSelected,
  isAllowedOnTheRoad,
  isSuitableForHeavyWaste,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section
      className={clsx(
        'rounded-[12px] bg-card-gradient w-100 relative cursor-pointer z-10',
        {
          'outline-[3px] outline-primary': isSelected,
        }
      )}
      onClick={onSelect}
    >
      <section>
        <span className="
          bg-electric-blue rounded-[10px] p-2 absolute w-22 
          md:w-20 h-8 top-3 left-4 flex items-center justify-center
        "
        >
          {highlight}
        </span>
      </section>
      <div className="w-full h-[290px] flex justify-center items-center">
        {!isImageLoaded && <LoadingIndicator />}
        <img
          src={img}
          alt={imgAlt}
          onLoad={() => setIsImageLoaded(true)}
          className={clsx(
            'w-full h-[290px] object-contain rounded-t-[12px]',
            { hidden: !isImageLoaded }
          )}
        />
      </div>
      {!isAllowedOnTheRoad && (
        <div className="absolute bottom-62 right-4">
          <RestrictionBadge
            icon={WarningIcon}
            title="Not allowed on the road"
            className="!text-yellow-skip"
          />
        </div>
      )}
      {!isSuitableForHeavyWaste && (
        <div className="absolute bottom-52 right-4">
          <RestrictionBadge
            icon={DangerIcon}
            title="Not Suitable For Heavy Waste"
            className="!text-red-500"
          />
        </div>
      )}
      <section className="p-5">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <h2 className="text-primary">{price}</h2>
        <div className="flex justify-center mt-4">
          <Button
            className={clsx('w-full z-20', { 'bg-primary': isSelected })}
            title={isSelected ? 'Selected' : 'Select This Skip'}
            onClick={onSelect}
          />
        </div>
      </section>
    </section>
  )
}

export default Card
