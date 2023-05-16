import Card_Items from "../components/Card_Items"
import FakeData from "../components/FakeData"

function createData(FakeData) {
  return <Card_Items key={FakeData.id} title={FakeData.title} image={FakeData.image} category={FakeData.category} price={FakeData.price} />
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
