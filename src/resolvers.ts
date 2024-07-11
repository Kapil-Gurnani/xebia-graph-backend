import Api from './datasources/Api';
import { PersonResponse } from './types';

const resolvers = {
    Query: {
        person: async (_source: any, {id} : { id: string }, { dataSources }: { dataSources: { api: Api } }): Promise<PersonResponse> => {
            const peopleData =  await dataSources.api.getPerson(id);
            const output = {} as  PersonResponse;

            output.homeworld =  await dataSources.api.getDataFromURL(peopleData?.homeworld);
            output.films =  await Promise.all(peopleData?.films?.map(async film=> {
                const {episode_id, title} = await dataSources.api.getDataFromURL(film);
                return {
                    title,
                    episode: episode_id
                }
            }));
            output.vehicles =  await Promise.all(peopleData?.vehicles?.map(async vehicle=> {
                const {vehicle_class,cost_in_credits,name,model} = await dataSources.api.getDataFromURL(vehicle);
                return {
                    name,
                    model,
                    cost: cost_in_credits === "unknown" ? null : parseInt(cost_in_credits),
                    class: vehicle_class
                }
            }));
            output.starships =  await Promise.all(peopleData?.starships?.map(async starship=> {
                const {starship_class,cost_in_credits,name,model} = await dataSources.api.getDataFromURL(starship);
                return {
                    name,
                    model,
                    cost: cost_in_credits === "unknown" ? null : parseInt(cost_in_credits),
                    class: starship_class
                };
            }));
            console.log(output)
            return {...peopleData, ...output};
        },
    },
  };
  
  export default resolvers;
  