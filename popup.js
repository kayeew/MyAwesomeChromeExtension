$('#add_site').click(function() {
  alert('The add site button was clicked.');

  // fetch sites
  var items = localStorage.getItem('sites');

  console.log('Sites loaded');

  var newSite = $('#site').val();
  var sites = [];

  if(items.length > 0) {
    sites.concat(items)
  }
  else {
    sites.push(newSite)
  }
  
  // Add new site to storage
  localStorage.setItem('sites', sites);

  

}); 