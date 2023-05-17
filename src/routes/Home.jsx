import Card_Items from "../components/Card_Items"
import FakeData from "../components/FakeData"

function createData(FakeData) {
  return <Card_Items 
  key={FakeData.id} 
  title={FakeData.title} 
  image={FakeData.image}  
  category={FakeData.category} 
  price={FakeData.price} />
}

function Home() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/data");
      const data = await response.json();
      console.log(data);
      setCart(data.map((item) => ({ ...item, count: 1 })));
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  return (
    <>
      <h1>Main Page</h1>
      {cart.map((item, index) => (
        <Item
          key={item.itemid}
          itemid={item.itemid}
          image={item.image}
          title={item.title}
          category={item.category}
          price={item.price}
          count={item.count}
        />
      ))}
    </>
  );
}

export default Home;