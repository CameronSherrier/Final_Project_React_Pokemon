const token = 'de721b0f2c21977a28b49a9d15a70fc638a63d233c581e6d';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://pokemon-flask-56bp.onrender.com/api/pokemon`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Failed to retrieve any Pokemon from your Pokedex ")
        }

        return await response.json()
    },

    create: async ( data: any = {} ) => {
        const response = await fetch(`https://pokemon-flask-56bp.onrender.com/api/pokemon`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new Pokemon.')
        }

        return await response.json()
    },

    update: async ( id: string, data: any = {} ) => {
        const response = await fetch(`https://pokemon-flask-56bp.onrender.com/api/pokemon/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Failed to update this Pokemon's stats.")
        }

        return await response.json()
    },

    delete: async ( id:string )=> {
        const response = await fetch(`https://pokemon-flask-56bp.onrender.com/api/pokemon/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('User uses Delete, but it failed')
        }

        return;
    }
}