import type { InputHTMLAttributes } from 'react'

import React from 'react'

export default function Input ({
  label,
  labelClassName,
  props
}: Readonly<{
  label?: string
  labelClassName?: string
  props: React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}>): JSX.Element {
  return (
    <div className='flex w-full flex-col gap-y-1'>
      {(label != null)
        ? (
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          <label className={`${labelClassName} font-normal text-sm ${props.disabled === true ? 'text-neutrals-100' : ''}`} htmlFor={props.id}>
            {label}
          </label>
          )
        : null}
      <input
        {...props}
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        className={`${props.className} border border-neutrals-500 rounded-[4px] py-[4px] px-3 w-full focus:outline-none focus:border-secondary-500 disabled:border disabled:border-neutrals-200 disabled:bg-neutrals-100 disabled:cursor-not-allowed`}
      />
    </div>
  )
}
