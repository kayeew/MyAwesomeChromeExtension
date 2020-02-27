var sites = ['www.youtube.com', 'www.twitter.com']

localStorage.setItem('sites', sites);
console.log('Sites Initialized ' + sites);


if(sites.includes(window.location.host)) {
  alert('Site matched ' + window.location.host)
}


var items = localStorage.getItem('sites');
console.log('Sites: ' + items);