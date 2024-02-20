export default function EditTask({ params }: { params: { id: string } }) {
  return <div>Todo name: {params.id}</div>;
}
