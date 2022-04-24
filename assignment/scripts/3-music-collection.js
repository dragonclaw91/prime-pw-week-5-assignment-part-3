console.log('***** Music Collection *****')
let colletion = [];

function addToCollection(title,artist,yearPublished,tracks)
{
   const records = new Object();
   records.title = title;
   records.artist = artist;
   records.tracks = tracks;
   records.yearPublished = yearPublished;
   colletion.push(records);

};

addToCollection("Are You Experienced","Jimi Hendrix","1967", [{Name:"Foxey Lady", Duration: "3:19"},
                                                              {Name:"Manic Depression", Duration:"3:42"},
                                                              {Name:"Red House", Duration:"3:44"},
                                                              {Name:"Can You See Me", Duration:"2:33"},
                                                              {Name: "Love or Confusion", Duration:"3:13"},
                                                              {Name:"I Don't Live Today", Duration:"3:55"},
                                                              {Name:"May This Be Love", Duration:"3:11"},
                                                              {Name:"Fire", Duration:"2:44"},
                                                              {Name:"Third Stone From the Sun", Duration:"6:44"},
                                                              {Name:"Remember", Duration:"2:49"}]);

addToCollection("Band of Gypsys","Jimi Hendrix","1970",[{Name:"Who Knows", Duration: "9:36"},
                                                        {Name: "Machine Gun", Duration: "12:39"},
                                                        {Name:"Changes", Duration:"5:12"},
                                                        {Name:"Power to Love", Duration:"6:56"},
                                                        {Name:"Message of Love", Duration: "5:25"},
                                                        {Name:"We Gotta Live Together", Duration:"5:50"}]);

addToCollection("Master of Puppets","Metallica","1986",[{Name:"Battery", Duration:"5:12"},
                                                        {Name:"Master of Puppets", Duration:"8:35"},
                                                        {Name:"The Thing That Sould Not Be", Duration:"6:36"},
                                                        {Name:"Welcome Home(sanitarium)", Duration:"6:27"},
                                                        {Name:"Disposable Heroes", Duration:"8:17"},
                                                        {Name:"Leaper Messiah", Duration:"5:40"},
                                                        {Name:"Orion", Duration:"8:12"},
                                                        {Name:"Damage, Inc.", Duration:"5:08"}]);

addToCollection("Appetite for Destruction","Guns & Roses","1987",[{Name:"Welcome to the Jungle", Duration:"4:33"},
                                                                  {Name:"It's So Easy", Duration:"3:23"},
                                                                  {Name:"Nighttrain", Duration:"4:28"},
                                                                  {Name:"Out Ta Get Me", Duration:"4:24"},
                                                                  {Name:"Mr.Brownstone", Duration:"3:49"},
                                                                  {Name:"Pardise City", Duration:"6:46"},
                                                                  {Name:"My Michelle", Duration:"3:40"},
                                                                  {Name:"Think About You", Duration:"3:52"},
                                                                  {Name:"Sweet Child O' Mine", Duration:"5:56"},
                                                                  {Name:"You're Crazy", Duration:"3:17"},
                                                                  {Name:"Anyhting Goes", Duration:"3:26"},
                                                                  {Name:"Rocket Queen", Duration:"6:13"},]);

addToCollection("Countdown to Extinction","Megadeth","1992",[{Name:"Skin O' My Teeth", Duration:"3:14"},
                                                             {Name:"Symphony of Destruction", Duration:"4:03"},
                                                             {Name:"Architecture of Aggression", Duration:"3:35"},
                                                             {Name:"Foreclouse of a Dream", Duration:"4:17"},
                                                             {Name:"Sweating Bullets", Duration:"5:03"},
                                                             {Name:"This Was My Life", Duration:"3:42"},
                                                             {Name:"Countdown to Ectinction", Duration:"4:17"},
                                                             {Name:"High Speed Dirt", Duration:"4:12"},
                                                             {Name:"Psychotron", Duration:"4:42"},
                                                             {Name:"Captive Honour", Duration:"4:15"},
                                                             {Name:"Ashes in Your Mouth", Duration:"6:11"}]);

addToCollection("Nevermind","Nirvana","1991",[{Name:"Smells Like Teen Spirt", Duration:"5:01"},
                                              {Name:"In Bloom", Duration:"4:15"},
                                              {Name:"Come As You Are", Duration:"3:39"},
                                              {Name:"Breed", Duration:"3:04"},
                                              {Name:"Lithium", Duration:"4:17"},
                                              {Name:"Polly", Duration:"2:57"},
                                              {Name:"Territorial Pissings", Duration:"2:23"},
                                              {Name:"Drain You", Duration:"3:44"},
                                              {Name:"Lounge Act", Duration:"2:37"},
                                              {Name:"Stay Away", Duration:"3:32"},
                                              {Name:"On a Plain", Duration:"3:16"},
                                              {Name:"Something in the Way", Duration:"3:52"}]);

console.log(colletion.tracks);
function showCollection(array = [])
{
   console.log('number of items in array:', array.length)
   for(let i = 0; i < array.length;i++)
   {
      let recordTracks = array[i].tracks
      let recordTitle = array[i].title
      let recordArtist = array[i].artist
      let recordYear = array[i].yearPublished
      console.log("TITLE:" + " " + recordTitle + " " + "by" + " " + "ARTIST:" + " "  + recordArtist + " " + "Published in" + " " + 
                  "YEAR:" + " " + recordYear + " " + " " + "Tracks:" + " " + JSON.stringify(recordTracks));
   }
}

showCollection(colletion)

function findByArtist(artist)
{
   let results = []
   for(let i = 0; i < colletion.length;i++)
   {
      if (artist === colletion[i].artist)
      {
         results.push(colletion[i])
      }
   }

   console.log(results);
}

findByArtist("Jimi Hendrix");


function search (query)
{
   let answer = []
   const searchObject = [...colletion];
   console.log(searchObject)

   for(let i = 0; i < searchObject.length; i++)
   {
      console.log(searchObject[i].tracks)
      if (searchObject[i].artist === query.artist)
      {
         answer.push("Artist:" + " " + searchObject[i].artist + " " + "Title:" + " " + searchObject[i].title + " " + 
                     "year:" + " " + searchObject[i].yearPublished+JSON.stringify(searchObject[i].tracks));
      }
      else if (searchObject[i].yearPublished === query.year)
      {
         answer.push("Artist:" + " " + searchObject[i].artist + " " + "Title:" + " " + searchObject[i].title + " " + 
                     "year:" + " " + searchObject[i].yearPublished + JSON.tracks(searchObject[i].tracks));
           
    
      }
      else if (searchObject[i].title === query.title)
      {
         answer.push("Artist:" + " " + searchObject[i].artist + " " + "Title:" + " " + searchObject[i].title + " " + 
                    "year:" + " " + searchObject[i].yearPublished + JSON.stringify(searchObject[i].tracks));
      }
      else if (query.title === "" && query.artist === "" && query.year === "" && query.trackName === "" || query === {})
      {
         answer = searchObject;
      }
      else 
      {
         console.log(searchObject)
         for (let j = 0; j < searchObject[i].tracks.length;j++)
         {
            if (searchObject[i].tracks[j].Name === query.trackName)
            {
               console.log(searchObject[i].artist)
               answer.push("Artist:" + " " + searchObject[i].artist + " " + "Title:" + " " + searchObject[i].title + " " + 
                           "year:" + " " + searchObject[i].yearPublished +JSON.stringify(searchObject[i].tracks[j]));
                
            }
         }
      }
   }
    
   console.log(answer);
}



search({artist: "", title: "", trackName: "" ,year: ""});