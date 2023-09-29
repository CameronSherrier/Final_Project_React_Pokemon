import { useState } from 'react';
import Button from "./Button";
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hideable: true },
    { field: 'name', headerName: "Pokemon Name", flex: 1},
    { field: 'type', headerName: "Type", flex: 1},
    { field: 'hp', headerName: "Hitpoints", flex: 1},
    { field: 'attack', headerName: "Attack", flex: 1},
    { field: 'defense', headerName: "Defense", flex: 1},
    { field: 'speed', headerName: "Speed", flex: 2},
]

const DataTable = () => {
    let [ open, setOpen ] = useState(false);
    const { pokemonData, getData } = useGetData(); // Custom hook that grabs the info
    const [ selectionModel, setRowSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection Model: ${selectionModel}`);
        setTimeout( () => {window.location.reload()}, 1000);
    }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row justify-center">
            <div>
                <button
                    className="p-3 bg-black text-white m-3 rounded hover:bg-red-500"
                    onClick={() => handleOpen()}
                >
                    Create new Pokemon
                </button>
            </div>
            <Button onClick={handleOpen} className='p-3 bg-black text-white m-3 rounded hover:bg-red-500'>Update</Button>
            <Button onClick={deleteData} className='p-3 bg-black text-white m-3 rounded hover:bg-red-500'>Delete</Button>
        </div>
        <div className={ open ? 'hidden' : 'container-fluid my-5 flex flex-col'}
            style={{ height: 400 }}
        >
            <h2 className='p-3 bg-slate-300 my-2 rounded text-center'>My Pokemon</h2>
            <DataGrid rows={pokemonData} columns={columns} pageSizeOptions={[5]}
            checkboxSelection={true} 
            onRowSelectionModelChange={ ( item: any ) => {
                setRowSelectionModel(item);
            }}
            />
        </div>
    </>
  )
}

export default DataTable
