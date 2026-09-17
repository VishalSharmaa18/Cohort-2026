
import './App.css'

function App() {
  const shows = [
    {
      id: 1,
      title: "The Virat kohli Show",
      time: "11.30 AM",
      hall: "Hall A"
    },
    {
      id: 2,
      title: "The Rohit Sharma Show",
      time: "4.30 PM",
      hall: "Hall B"
    },
    {
      id: 3,
      title: "Virtual DOM Nights",
      time: "11.30 PM",
      hall: "Hall C"
    }
  ]

  return (
   <>
   <div className='shows'>
   <h1>Hello, Welcome to the show</h1>
    <h2>The name of 1st show was {shows.title[0]}</h2>
   </div>
   </>
  )
}

export default App
