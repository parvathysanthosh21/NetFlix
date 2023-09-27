import React,{useState, useEffect} from 'react'
import './Banner.css';
import tmbdAxiosinstancs from '../tmbdAxiosinstancs';

function Banner({fetchUrl}) {
    const [movie,setMovies] = useState({})
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async()=>{
    const {data} =await tmbdAxiosinstancs.get(fetchUrl)
    console.log(data.results[Math.floor(Math.random()*data.results.length)]);
    setMovies(data.results[Math.floor(Math.random()*data.results.length)]);
  }
  console.log(movie);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div style={{
      height:'600px',
      backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
      backgroundSize:'cover',
      backgroundAttachment:'fixed',
      marginBottom:'20px'
    }}>
      <div className="banner-content">
        <h1>{movie?.name}</h1>
        <h2>{movie?.overview?.slice(0,200)}...</h2>
      </div>
    </div>
  )
}

export default Banner