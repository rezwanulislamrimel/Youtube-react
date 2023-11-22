
import './App.css';

import Card from './assets/Components/Card/Card';
function App() {
 

  return (

    <>
       <h1 className="text-4xl text-center">Helcome To My Card Buddy</h1>
    <div className='grid grid-cols-3 gap-4 px-12'>
   <Card></Card>
      <Card></Card>
      <Card></Card>
      
      </div>
      </>
  )
}

export default App
