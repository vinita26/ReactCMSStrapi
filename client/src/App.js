import React, { useEffect } from 'react';
import Strapi from 'strapi-sdk-javascript';

const endpoint = 'http://localhost:1337';

const strapi = new Strapi(endpoint);

const App = () => {

  useEffect(()=> {
    const fetchDataFromStrapiServer = async ()=> {
      const response = await strapi.request('POST', '/graphql', {
        data:{
          query : `query {
            brands{
              _id,
              description,
              image{
                createdAt,
                name,
                caption
              }
            }
          }`
        }
      });
      return response;
    }
    fetchDataFromStrapiServer().then(resp=>{
      console.log('-------resp-----', resp);
    })
  })

  return (
    <div>
   
    </div>
  );
};

export default App;
