var playlist = new Object({artistName: "songTitle"});
function updatePlaylist(playlist, artistName, songTitle) {
 
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
function removeFromPlaylist(playlist, artistName){
  var newObj = Object.assign({}, playlist, {[artistName]: songTitle});
  delete newObj.artistName;
  
  return newObj;
 
}