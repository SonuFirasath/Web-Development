import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/cards"
function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Card 1" discription="Card 1 is nice."/>
        <Card title="Card 2" discription="Card 2 is nice."/>
        <Card title="Card 3" discription="Card 3 is nice."/>
        <Card title="Card 4" discription="Card 4 is nice."/>
      </div>
      <Footer/>
    </>
  )
}

export default App
