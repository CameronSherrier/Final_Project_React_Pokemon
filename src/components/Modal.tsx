import PokemonForm from "./PokemonForm";

type Props = {
  id: string[];
  open: boolean;
  onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);

  return (
    <div 
        onClick={ props.onClose } 
        className="fixed w-full h-full flex overflow-auto z-1 
        justify-center align-middle bg-red-500 bg-opacity-25"
    >
      <div
        className="max-w-600px w-2/5 fixed flex z-1 mt-20 bg-black text-white shadow-2xl rounded border-8 border-red-500"
        onClick={(e) => {
            e.stopPropagation()
        }}
      >
        <div className="w-full flex flex-col">
            <div className="flex flex-row space-apart">
                <p className="flex justify-start m-3 bg-red-500 p-2 rounded hover:bg-white text-black"
                onClick={ props.onClose }>
                    <i className="fa-regular fa-circle-xmark"></i>
                </p>
            </div>
            <div className="flex flex-col items-center text-center mt-3">
                <PokemonForm id={ props.id} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
