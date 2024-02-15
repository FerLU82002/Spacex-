import{type APISpaceXResponse} from '../types/api.ts';
import{type Doc} from '../types/api.ts';

export const getLaunchBy = async ({id} : {id: string}) => { 
   
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
   
  const launch= await res.json() as APISpaceXResponse;
   return launch;
}

export const getLatestLaunches = async () => { 
    //podemos ejecutar js que queremos
  const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
       query: {},
       options:{
        sort: {
          date_unix: 'asc'
        },
        limit: 12,
       },
    }),
  });
   //const data = JSON.stringify(await res.json()); para que el archivo me devuelva en json
   const { docs: launches } = await res.json() as APISpaceXResponse;
   return launches;
}
