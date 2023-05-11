import NavComponent from "./navComponent"
import Card_Items from "./Card_Items";
import FakeData from "./FakeData";

function createData (FakeData) {
  return <Card_Items 
  key = {FakeData.id}
  title = {FakeData.title}
  description = {FakeData.description}
  />
}
function Home() {

  return (
    <>
      <h1>Main Page</h1>
      {FakeData.map(createData)}
      <NavComponent />
    </>
  )
}

export default Home
