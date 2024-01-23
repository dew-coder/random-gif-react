import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from './useGif';

const Tag = () => {
    const [tag, setTag] = useState('cute cat');
    let  {loading, gif, fetchData} = useGif({tag});

  return (
    <div className='tag1'>
      <div className='ran-head'>RANDOM {tag} GIF</div>
      <div>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt="" />)
        }
      </div>
      <input className='btn' type="text" name="tag" id="tag" onChange={(event) => setTag(event.target.value)} 
      //sp that alreacy cute cat likha aye wahan pr
      value = {tag} 
      />
      <button className='btn' onClick={()=>fetchData(tag)}>GENERATE</button>
    </div>
  )
} 

export default Tag
