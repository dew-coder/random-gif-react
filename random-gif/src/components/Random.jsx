import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from './useGif';

const Random = () => {

    let  {loading, gif, fetchData} = useGif();

  return (
    <div className='random1'>
      <div className='ran-head'>A RANDOM GIF</div>
      <div>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt="" />)
        }
      </div>
      <div><button  className='btn' onClick={()=>fetchData()}>GENERATE</button></div>
    </div>
  )
}

export default Random
