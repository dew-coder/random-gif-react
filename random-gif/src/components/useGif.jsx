import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGif = (tag) => {

    //custom hook

    const [gif, setgif] = useState('')
    const [loading, setLoading] = useState(false);
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

    async function fetchData(tag){
        setLoading(true);
        //in axios no need to convert in json its directly in json
        let output = await axios.get(tag ? tagurl : url)
        console.log(output);
        const gify = output.data.data.images.downsized.url;
        setgif(gify);
        setLoading(false)
    }

    //in 1st render we have to do this one time
    useEffect(()=>{
        fetchData();
    }, [])

    // function onclickHandler(tag){
    //     //on click we have to rerender
    //     fetchData();
    // }

  return {loading, gif, fetchData}
}

export default useGif
