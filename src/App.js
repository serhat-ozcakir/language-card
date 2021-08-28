// import React from 'react'
// import './App.css';
// import Card from './components/card/Card'
// import Logo from './assets/react.svg'

// function App() {
//   return (
//     <div className="App">
//       <div className="logo">
//         <img src={Logo}/>
//       </div>
    
//       <div className="cards">
//         <h2 className="language">Languages</h2>
//       <Card/>
//       </div>


//     </div>
//   );
// }

// export default App;

import React from 'react'
import './App.css'
import Card from './components/card/Card'
import Logo from '././assets/react.svg'

const App = ()=>{
  return(
      <div className="App">
        <div className="logo">
          <img src={Logo}/>
        </div>

        <div className="cards">
        <h2 className="language">Languages</h2>
        <Card/>
        </div>
      </div>
  )
}

export default App;

