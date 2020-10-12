const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchLogin = document.getElementById('search-login');
const searchLoginButton = document.getElementById('search-login-button');

const searchContent = document.getElementById('search-content');

// Submit Channel Search Form
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const search = searchInput.value;
  searchChannel(search);
});

// Use YouTube Search API & Display Results
function searchChannel(search) {
  gapi.client.youtube.search
    .list({
      "part": [
        "snippet"
      ],
      "q": `${search}`,
      "type": [
        "channel"
      ],
      "maxResults": 25
    })
    .then(response => {
      console.log(response);
      const channelItems = response.result.items;
      if (channelItems.length) {
        
        //Show them
        let channelOutput = '<h4 class="text-center">Results</h4>';
        channelItems.forEach(item => {
          const channelThumbnail = item.snippet.thumbnails.high.url;
          const channelTitle = item.snippet.title;
          const channelId = item.snippet.channelId;

          channelOutput += `
            <div class="row mb-2 ml-sm-3 search-result">
              <div class="col-3">
                <img src="${channelThumbnail}" class="mx-auto d-block img-fluid img-thumbnail">
              </div>
              <div class="col-9 pl-0 pl-sm-1">
                <div>${channelTitle}</div>                
                <div>ID: <span class="channel-id">${channelId}</span></div>
              </div>
            </div>          
          `;
        })
        searchResults.innerHTML = channelOutput;
        activateListener();
      } else {
        deactivateListener();
        searchResults.innerHTML = '<div>No results found. Try Again.</div>';
      }
    })
}

function activateListener() {
  searchResults.addEventListener('click', getClickedID);
}
function deactivateListener() {
  searchResults.removeEventListener('click', getClickedID);
}

let clickedId;
function getClickedID(e) {
  //select the search-result that was clicked
  let searchResultParent;
  if(e.target.classList.contains('search-result')){
    searchResultParent = e.target;
  } else if(e.target.parentElement.classList.contains('search-result')){
    searchResultParent = e.target.parentElement;
  } else if(e.target.parentElement.parentElement.classList.contains('search-result')){
    searchResultParent = e.target.parentElement.parentElement;
  } else if(e.target.parentElement.parentElement.parentElement.classList.contains('search-result')){
    searchResultParent = e.target.parentElement.parentElement.parentElement;
  } else {
    console.log('not a search-result from click');
  }  
  // Get the ID
  if(searchResultParent) {
    clickedId = searchResultParent.querySelector('.channel-id').innerText;
    console.log(clickedId);
  } 
  
}