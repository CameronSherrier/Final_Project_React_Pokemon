import Background from '../assets/images/pokemon-battleground.jpg';

const Battle = () => {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
     <div className='flex flex-col place-items-center h-screen'>
        <h3 className='p-5 bg-red-500 bg-opacity-80 text-white rounded font-bold mt-2'>Fight!!!</h3>
     </div>
    </div>
  )
}

export default Battle
