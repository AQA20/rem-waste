import clsx from 'clsx'

const Button = ({ title, onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-primary-foreground rounded-[20px] px-10 py-4 cursor-pointer hover:bg-primary',
        className
      )}
    >
      {title}
      {icon && (
        <span className="ml-2">
          <img className="inline-block" src={icon} height={32} width={24} />
        </span>
      )}
    </button>
  )
}

export default Button
