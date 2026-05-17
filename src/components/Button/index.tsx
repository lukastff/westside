import './styles.scss'

export type ButtonProps = {
    type: 'submit' | 'reset' | 'button'
    text: string
}

export function Button({ type, text }: ButtonProps) {
  return (
    <button type={type} className="defaultButton bg-[#B90009] w-full rounded p-2 cursor-pointer uppercase">
      { text }
    </button>
  )
}