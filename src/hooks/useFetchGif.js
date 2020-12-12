import { useState, useEffect} from 'react';
import { getGif } from '../helpers/getGifs';

export const useFetchGif = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getGif(category)
            .then( imgs =>{
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [ category ])

    return state
}
