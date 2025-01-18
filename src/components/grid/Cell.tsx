import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'

type Props = {
  value?: string
  status?: CharStatus
}

export const Cell = ({ value, status }: Props) => {
  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded',
    {
      'bg-white border-slate-200': !status,
      'border-black': value && !status,
      'bg-slate-400 text-white border-slate-400': status === 'absent',
      'bg-viossa_blue text-white border-viossa_blue': status === 'correct',
      'bg-usoplaas text-white border-usoplaas': status === 'present',
      'cell-animation': !!value,
    }
  )

  return <div className={classes}>{value}</div>
}
