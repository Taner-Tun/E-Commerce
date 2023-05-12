import Card_Items from "../components/Card_Items"
import FakeData from "../components/FakeData"

function createData(FakeData) {
  return <Card_Items key={FakeData.id} title={FakeData.title} description={FakeData.description} />
}
function Home() {
  return (
    <>
      <h1>Main Page</h1>
      {FakeData.map(createData)}
    </>
  )
}

export default Home
