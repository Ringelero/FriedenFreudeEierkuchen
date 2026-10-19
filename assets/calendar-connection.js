(function(root){
  // Enable only after the server, HTTPS and device-access migration are ready.
  const config=Object.freeze({enabled:false,serverUrl:''});
  if(typeof module==='object'&&module.exports)module.exports=config;
  else root.GemDenCalendarConnection=config;
})(typeof window==='undefined'?globalThis:window);
