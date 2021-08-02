import {useEffect, useState} from "react";
import {getGifs} from "../services/api/ServiceApiGifs";
import {GifsData} from "../interfaces/GifData";

interface FetchState {
  data: GifsData[];
  loading: boolean
}

export const useFetchGifs = ( category: string ) => {
  
  const [state, setState] = useState<FetchState>({
    data: [],
    loading: true
  });
  
  useEffect( () => {
    getGifs( category ).then( images => {
      setState({
        data: [ ...images ],
        loading: false
      })
    });
  }, [ category ])
  
  return state;
}