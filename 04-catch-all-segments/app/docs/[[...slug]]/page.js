
const page = async ({ params }) => {
  const { slug } = await params
  return (
    <div>
      <h1>Docs</h1>
      <h2>{slug.join('/')}</h2>
    </div>
  )
}

export default page