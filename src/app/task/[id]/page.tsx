export default function TaskDetails({ params }: { params: { id: string } }) {
  return <div>Task details: {params.id}</div>;
}
