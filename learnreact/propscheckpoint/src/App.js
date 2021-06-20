
import './App.css';
import myimage from "./download.jpg"


import Bio from './profile/Bio';
const styleObject={color:"red",textAlign:'center', margin :'100px'}


    const App = () => (
      
      <div style={styleObject}>
        <Bio  name="meriem" lastname="boubaker" profession="fullstack dev" biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." >
        <img src={myimage} alt='images'/>
        </Bio>
        
      </div>
     );
     
  


export default App;
