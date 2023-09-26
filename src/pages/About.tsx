import Background from '../assets/images/the-tro.jpg'


const About = () => {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
     <div className='flex flex-col place-items-center h-screen'>
        <h3 className='p-5 bg-red-500 bg-opacity-80 text-white rounded font-bold my-auto'>This app will allow you to 
        utilize your Pokemon knowledge and battle it out in a turn-based event. Do you have what it takes 
        to be the best?! Test your skills now by clicking on the 'Battle' button above. Good luck 
        and let the best Pokemon Trainer win!</h3>
     </div>
    </div>
  )
}

export default About
