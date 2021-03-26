export default function Time({ iso }) {
  const date = new Date(iso)

  return <div>
    <h1>Date: {date.toDateString()}</h1>
    <h1>Time: {date.toTimeString()}</h1>
    <h1>ISO: {date.toISOString()}</h1>
  </div>
}

export function getServerSideProps() {
  const iso = new Date().toISOString()

  return {
    props: { iso }
  }
}
