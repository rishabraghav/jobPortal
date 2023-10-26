import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'b461f6e08amsh04b07710554be32p1f7603jsn570d468835d2',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };

    // const options = {
    //     method: 'GET',
    //     url: 'https://jsearch.p.rapidapi.com/search',
    //     params: {
    //       query: 'React developer, India',
    //       page: '2',
    //       num_pages: '2'
    //     },
    //     headers: {
    //       'X-RapidAPI-Key': 'b461f6e08amsh04b07710554be32p1f7603jsn570d468835d2',
    //       'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //     }
    //   };
      const fetchData = async() => {
        setLoading(true);

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setData(response.data.data);
            setLoading(false);
        } catch(err) {
            console.error(err);
            console.log("some fuckinggggg error")
            setError(err);
        } finally {
            setLoading(false);
        }

      }

      useEffect(()=> {
        fetchData()
      }, []);

    return {data, loading, error, fetchData};
}
 
export default useFetch;