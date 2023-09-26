import Input from "./Input"
import Button from "./Button"

import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux/es/exports";
import { chooseName, chooseType, chooseHp, chooseAttack, chooseDefense, chooseSpeed } from "../redux/slices/RootSlice";

interface PokemonFormProps {
    id: string[],
}

const PokemonForm = ( props: PokemonFormProps ) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = ( data: any, event: any ) => {
        console.log(`ID: ${typeof props.id }`);
        console.log(`ID: ${ props.id }`);
        console.log(data);
        
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${ props.id }`);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset()
        } else {
            dispatch(chooseName(data.name));
            dispatch(chooseType(data.type));
            dispatch(chooseHp(data.hp));
            dispatch(chooseAttack(data.attack));
            dispatch(chooseDefense(data.defense));
            dispatch(chooseSpeed(data.speed));

            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000);
        }
    }

  return (

    // TODO: finish handle function with state management
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border border-red-500">
                <label htmlFor="name">Pokemon Name</label>
                <Input {...register('name')} name='name' placeholder="Name" className='bg-white'/>
            </div>
            <div className="border border-red-500">
                <label htmlFor="type">Type</label>
                <Input {...register('type')} name='type' placeholder="Type" className='bg-white'/>
            </div>
            <div className="border border-red-500">
                <label htmlFor="hp">Hitpoints</label>
                <Input {...register('hp')} name='hp' placeholder="Health" className='bg-white'/>
            </div>
            <div className="border border-red-500">
                <label htmlFor="attack">Attack</label>
                <Input {...register('attack')} name='attack' placeholder="Attack" className='bg-white'/>
            </div>
            <div className="border border-red-500">
                <label htmlFor="defense">Defense</label>
                <Input {...register('defense')} name='defense' placeholder="Defense" className='bg-white'/>
            </div>
            <div className="border border-red-500">
                <label htmlFor="speed">Speed</label>
                <Input {...register('speed')} name='speed' placeholder="Speed" className='bg-white'/>
            </div>
            <div className="flex p-1 justify-center">
                <Button 
                    className='flex justify-start m-3 bg-red-500 p-2 rounded hover:bg-white text-white hover:text-black place-items'
                    >
                        Submit
                </Button>
            </div>
        </form>
    </div>
  )
}

export default PokemonForm
