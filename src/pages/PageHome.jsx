import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import '../style/styles-tabs.css';

import { useEffect, useState } from "react";
import { appTitle } from "../globals/globals";

import Movies from "../components/Movies";
import wildRobot from "../images/wild-robot.png";
import "../components/Movies.css";

import api from "../utilities/api";
const { getPopularMovies } = api;
const { getTopRatedMovies } = api;
const { getNowPlayingMovies } = api;
const { getUpcomingMovies } = api;

const PageHome = () => {
  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(()=> {
    getPopularMovies()
    .then((data) => {
      setPopularMovies(data.results);
  })
    .catch((error)=>{
      alert("Error fetching popular movies", error)
  })
  }, []);

  useEffect(()=> {
    getTopRatedMovies()
    .then((data) => {
      setTopRated(data.results);
  })
    .catch((error)=>{
      alert("Error fetching top rated movies", error)
  })
  }, []);

  useEffect(()=> {
    getNowPlayingMovies()
    .then((data) => {
      setNowPlaying(data.results);
  })
    .catch((error)=>{
      alert("Error fetching top rated movies", error)
  })
  }, []);

  useEffect(()=> {
    getUpcomingMovies()
    .then((data) => {
      setUpcoming(data.results);
  })
    .catch((error)=>{
      alert("Error fetching top rated movies", error)
  })
  }, []);

  return (
      
    <main>
         <section>
         <div id="home-movie-hero" >
            <img src={wildRobot} alt="Wild Robot" />

          </div>
           <h2>Hero Image </h2>
           <Tabs>
             <TabList className="tab-list">
                <Tab className="tab" onClick={() => fetchMovies("popular")}>Popular</Tab>
                <Tab className="tab" onClick={() => fetchMovies("top_rated")}>Top Rated</Tab>
                <Tab className="tab" onClick={() => fetchMovies("now_playing")}>Now Playing</Tab>
                <Tab className="tab" onClick={() => fetchMovies("upcoming")}>Upcoming</Tab>
             </TabList>
             <TabPanel>
               <div className="tab-panel-content tab-panel-content-overview">
                 <div className="movie-container">
                  <div className="movie-poster">
                    <Movies title="Popular Movies" movies={popularMovies}/>
                    
                    </div> 
                 </div>
               </div>
             </TabPanel>
             <TabPanel >
               {/* <h2 className="tab-panel-title">Top Rated</h2> */}
               <div className="tab-panel-content tab-panel-content-overview">
                 <div className="movie-container">
                  <div className="movie-poster">
                    <Movies title="Popular Movies" movies={topRated}/>
                    
                    </div> 
                 </div>
               </div>
             </TabPanel>
             <TabPanel>
             {/* <h2 className="tab-panel-title">Now Playing</h2> */}
               <div className="tab-panel-content tab-panel-content-overview">
                 <div className="movie-container">
                  <div className="movie-poster">
                    <Movies title="Popular Movies" movies={nowPlaying}/>
                    
                    </div> 
                 </div>
               </div>
             </TabPanel>
   
             <TabPanel>
             {/* <h2 className="tab-panel-title">Upcoming</h2> */}
               <div className="tab-panel-content tab-panel-content-overview">
                 <div className="movie-container">
                  <div className="movie-poster">
                    <Movies title="Popular Movies" movies={upcoming}/>
                    
                    </div> 
                 </div>
               </div>
             </TabPanel>
           </Tabs>
   
         </section>
       </main>
  );
};

export default PageHome;