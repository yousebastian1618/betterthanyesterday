
type Props = {
  label: string;
}

export default function Label(
  { label }: Props
) {
  return (
    <div className={'label-container'}>
      { label }
    </div>
  )
}