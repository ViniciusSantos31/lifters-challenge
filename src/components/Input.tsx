import { forwardRef } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
  return (
    <div className='form-group'>
      <label htmlFor={rest.id} className="text-white">{label}</label>
      <input className='form-control' {...rest} ref={ref} />
    </div>
  )
})