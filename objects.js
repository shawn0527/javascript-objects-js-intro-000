var playlist={
  artist: 'song'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(artistName, playlist){
  delete playlist.artistName
  playlist
}
