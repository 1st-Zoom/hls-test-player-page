
import ReactHlsPlayer from "react-hls-player";
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactHlsPlayer
        // url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        url={`http://localhost:22667/feeds/foo-bar/playlist.m3u8`}
        autoplay={false}
        controls={true}
        />
    </div>
  );
}

export default App;
