
import Users from './pages/users';
const USERS=[
  {
    "_id": "68778bd25d17338668f7f704",
    "age": 27,
    "eyeColor": "brown",
    "name": "Corinne Hardy",
    "gender": "female",
    "company": "KEGULAR",
    "texte": "corinnehardy@kegular.com"
  },
  {
    "_id": "68778bd2903f0290c02d0899",
    "age": 27,
    "eyeColor": "green",
    "name": "Mcdaniel Bentley",
    "gender": "male",
    "company": "MAKINGWAY",
    "texte": "mcdanielbentley@makingway.com"
  },
  {
    "_id": "68778bd25c7be1d012a74e01",
    "age": 40,
    "eyeColor": "brown",
    "name": "Gamble Phelps",
    "gender": "male",
    "company": "BLANET",
    "texte": "gamblephelps@blanet.com"
  },
  {
    "_id": "68778bd239e44f7cc8253a60",
    "age": 40,
    "eyeColor": "blue",
    "name": "Corina Rogers",
    "gender": "female",
    "company": "INTERODEO",
    "texte": "corinarogers@interodeo.com"
  },
  {
    "_id": "68778bd2a5211feb0ed83839",
    "age": 40,
    "eyeColor": "blue",
    "name": "Letha Conway",
    "gender": "female",
    "company": "MAZUDA",
    "texte": "lethaconway@mazuda.com"
  },
  {
    "_id": "68778bd2a70a4b8c28fdc825",
    "age": 32,
    "eyeColor": "blue",
    "name": "Kathy Massey",
    "gender": "female",
    "company": "ZIPAK",
    "texte": "kathymassey@zipak.com"
  }
]


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
