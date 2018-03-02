//get access to 30% of song lyrics on Free account type :(
const API_KEY = '';
var trackList, lyrics;

fetch(`http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=${API_KEY}&page=1&page_size=10&f_has_lyrics=1`)
    .then(response => response.json())
      .then(data => { trackList = data.message.body.track_list})
  
//destructure response
for(t of trackList) { 
    console.log(`${t.track.track_name} by ${t.track.artist_name} with trackId = ${t.track.track_id}` )
}

//get id from above console logs
let track_id = '124985078';

//get the lyrics based on track_id
fetch(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${API_KEY}&track_id=${track_id}`)
  .then(response => response.json())
    .then(data => { lyrics = data.message.body.lyrics.lyrics_body});
 
console.log(`Desired Lyrics: ${lyrics}`);