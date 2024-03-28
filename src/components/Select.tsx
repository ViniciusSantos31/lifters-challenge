import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options?: string[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, ...rest }, ref) => {
  return (
    <div className='form-group w-100'>
      <label htmlFor={rest.id} className="text-white">{label}</label>
      <select className='form-control w-100' {...rest} ref={ref}>
        <option value=''>-</option>
        {rest.options?.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
})