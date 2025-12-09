
const page = async ({params}) => {
  const { id, reviewid } = await params;
  return (
    <div>page {id} {reviewid}</div>
  )
}

export default page