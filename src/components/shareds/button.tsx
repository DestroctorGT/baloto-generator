/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'

import { ButtonConvention } from '@/enums/button-convention'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Button ({
  label,
  children,
  convention = ButtonConvention.Primary,
  link,
  props
}: Readonly<{
  label?: string
  children?: React.ReactNode
  type?: 'button' | 'submit'
  convention?: ButtonConvention
  link?: string
  props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}>): JSX.Element {
  const pathname = usePathname()

  const handleButtonConventions = () => {
    switch (convention) {
      case ButtonConvention.Primary:
        return 'bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-700 hover:text-neutrals-white disabled:bg-neutrals-200 disabled:text-neutrals-600'

      case ButtonConvention.Secondary:
        return 'border border-secondary-500 hover:bg-secondary-200 text-secondary-500 font-bold disabled:bg-neutrals-200 disabled:text-neutrals-600 disabled:border-neutrals-200'

      default:
        return 'bg-white underline text-primary-500 hover:border-primary-500 disabled:border-primary-100'
    }
  }

  if (link != null) {
    return (
      <Link
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        className={`${props?.className} ${handleButtonConventions()} whitespace-nowrap w-fit font-normal text-base flex items-center justify-center gap-x-3 py-7 px-2 rounded-md border-transparent border disabled:cursor-not-allowed ${
          pathname.startsWith(link) ? 'border-b-1 !border-primary-700 transition-all duration-300' : ''
        }`}
        href={link}
      >
        {label}
        {children}
      </Link>
    )
  }

  return (
    <button
      type='button'
      {...props}
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      className={`${props?.className} ${handleButtonConventions()} whitespace-nowrap w-fit font-normal text-base flex items-center justify-center gap-x-3 py-2 px-6 rounded-md  disabled:cursor-not-allowed`}
    >
      {label}
      {children}
    </button>
  )
}
