import Background from '../assets/images/the-tro.jpg'


const About = () => {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
     <div className='flex flex-col place-items-center h-screen'>
        <h3 className='p-5 bg-red-500 bg-opacity-80 text-white rounded font-bold my-auto'>This app will allow you to 
        look up any Pokemon and their stats. Click on the 'Search' button above to check it out!</h3>
     </div>
    </div>
  )
}

export default About
