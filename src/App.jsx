
import Users from './pages/users';
import { USERS } from './utils/data';

function App() {
  
  return (
  <>
  
  <section className='container mx-auto'>
<Users users={USERS}/>


  </section>

  </>

  )

};

export default App;
