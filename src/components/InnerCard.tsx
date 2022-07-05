export default function InnerCard({
  highlight,
  title,
  content,
}: Record<string, string>) {
  return (
    <div className='flex gap-3 flex-col'>
      <h1 className="title font-bold" style={{ fontSize: '100px', margin: '16px 0', lineHeight: '1' }}>
        {highlight}
      </h1>
      <h1 style={{ fontWeight: 600, lineHeight: '30px', fontSize: '24px' }}>{title}</h1>
      <p>{content}</p>
    </div>
  )
}
