import './App.css';
import Videolist from './Components/Videolist';
import VideoPlayer from './Components/Videoplayer';
import YTsearch from 'youtube-api-search';
import{useEffect,useState} from 'react';
import Videosearch from './Components/Videosearch';

function App() {
    const[videos,setvideos]=useState({
  currentvideos:[],
  selectedvideos:null
  })
  const makeYoutubeAPICall=(term)=>{
    YTsearch({key:"AIzaSyApkBUe3ecq-fjVpjd4mOlsE4f8d1Nh9d4",term:term,maxResults:10},function (data){
      console.log("data",data);
      setvideos({...videos,currentvideos:data,selectedvideos:data[0]})
    })
  }
  useEffect(()=>{
    makeYoutubeAPICall('balayya');
  }, [])
  return(
    <div className="App">
      
      <VideoPlayer video={videos.selectedvideos}></VideoPlayer>
      <Videolist onVideoSelect={
        (video) => {
          setvideos({ ...videos, selectedvideos: video })
        }
      } videos={videos.currentvideos}></Videolist>
      <Videosearch onSearchTerm={
        (searchTerm) => {
          makeYoutubeAPICall(searchTerm);
        }
      }></Videosearch>
    </div>
  );
}

export default App;





   