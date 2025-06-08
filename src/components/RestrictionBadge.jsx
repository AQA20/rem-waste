import clsx from 'clsx'

const RestrictionBadge = ({ icon, title, className }) => {
  return (
    <div
      className={clsx(
        'bg-black w-fit p-2 h-8 text-[12px] rounded-[10px]',
        { className }
      )}
    >
      <div className="flex items-center gap-1">
        <img src={icon} className="w-4 h-4" />
        <div>{title}</div>
      </div>
    </div>
  )
}

export default RestrictionBadge
