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
            <div class="row">
              <div class="col-3">
                <img src="${channelThumbnail}" class="mx-auto d-block img-fluid search-thumbnails">
              </div>
              <div class="col-9">
                <div>${channelTitle}</div>
                <div>ID: ${channelId}</div>
              </div>
            </div>          
          `;
        })
        searchResults.innerHTML = channelOutput;
      } else {
        searchResults.innerHTML = '<div>No results found. Try Again.</div>';
      }
    })
}