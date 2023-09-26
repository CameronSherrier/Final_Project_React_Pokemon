import Background from '../assets/images/free-pikachu-wallpaper.jpg';

const pokemonHome = () => {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-contain'
    >
     <div className='flex place-items-center h-screen'>
        <h1 className='p-5 bg-white bg-opacity-50 rounded font-bold'>Welcome Pokemon Trainers!</h1>
     </div>
    </div>
  )
}

export default pokemonHome
