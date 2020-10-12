// Options
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const byIdLogin = document.getElementById('by-id-login');
const byIdLoginButton = document.getElementById('by-id-login-button');
const sideBarLogin = document.getElementById('sidebar-login');
const sideBarLoginButton = document.getElementById('sidebar-login-button');
const sideBarLogout = document.getElementById('sidebar-logout');
const sideBarLogoutButton = document.getElementById('sidebar-logout-button');

const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');

// const defaultChannelID = 'UC29ju8bIPH5as8OGnQzwJyA'; (Traversy)
const defaultChannelID = 'UClePynY267S97vwsxfbF5hg'; //EngineersEscape

// Form submit and change channel
channelForm.addEventListener('submit', e => {
  e.preventDefault();
  const channel = channelInput.value;
  getChannel(channel);
});

// Load auth2 library
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

// Init API client library and set up sign in listeners
function initClient() {
  gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
    .then(() => {
      // Listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // Handle initial sign in state
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      byIdLoginButton.onclick = handleAuthClick;
      searchLoginButton.onclick = handleAuthClick;
      sideBarLoginButton.onclick = handleAuthClick;
      sideBarLogoutButton.onclick = handleSignoutClick;
    });
}

// Update UI sign in state changes
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    byIdLogin.style.display = 'none';
    searchLogin.style.display = 'none';
    sideBarLogin.style.display = 'none';
    sideBarLogout.style.display = 'block';
    content.style.display = 'block';
    searchContent.style.display = 'block';
    videoContainer.style.display = 'block';
    getChannel(defaultChannelID);
  } else {
    byIdLogin.style.display = 'block';
    searchLogin.style.display = 'block';
    sideBarLogin.style.display = 'block';
    sideBarLogout.style.display = 'none';
    content.style.display = 'none';
    searchContent.style.display = 'none';
    videoContainer.style.display = 'none';
  }
}

// Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// Handle logout
function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

// Display channel thumbnail
function showChannelThumbnail(thumbnailData) {
  const channelThumbnail = document.getElementById('channel-thumbnail');
  channelThumbnail.innerHTML = thumbnailData;
}

// Display channel data
function showChannelData(data) {
  const channelData = document.getElementById('channel-data');
  channelData.innerHTML = data;
}

// Get channel from API
function getChannel(channel) {
  gapi.client.youtube.channels
    .list({
      "part": [
        "snippet,contentDetails,statistics"
      ],
      "id": [
        `${channel}`
      ]
    })
    .then(response => {
      console.log(response);
      const channel = response.result.items[0];
      let channelDescription;
      if(channel.snippet.description) {
        channelDescription = channel.snippet.description;
      } else {
        channelDescription = 'No description';
      }
      const output = `
      <h4 class="text-center">${channel.snippet.title}</h4>     
      <div class="row justify-content-center">
        <div class="col-auto">        
          <table class="table table-responsive data-table">
            <tbody>
              <!-- <tr>
                <td>Title</td>
                <td>${channel.snippet.title}</td>
              </tr> -->
              <tr>
                <td>ID</td>
                <td>${channel.id}</td>
              </tr>
              <tr>
                <td>Subscribers</td>
                <td>${numberWithCommas(channel.statistics.subscriberCount)}</td>
              </tr>
              <tr>
                <td>Views</td>
                <td>${numberWithCommas(channel.statistics.viewCount)}</td>
              </tr>
              <tr>
                <td>Videos</td>
                <td>${numberWithCommas(channel.statistics.videoCount)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h4 class="text-center mb-1">Description</h4>
        <div class="mx-auto text-center">${channelDescription}</div>
        <div class="mt-3 text-center">
          <a class="btn bg-red text-white btn-font border border-dark" target="_blank" href="https://youtube.com/channel/${channel.id}">Visit Channel</a>
        </div>
      `;
      showChannelData(output);

      const outputThumbnail = `
      <img src="${channel.snippet.thumbnails.high.url}" class="mx-auto d-block img-fluid channel-thumbnail-pic" alt="${channel.snippet.title} Thumbnail">
      `;
      showChannelThumbnail(outputThumbnail);

      const playlistId = channel.contentDetails.relatedPlaylists.uploads;
      requestVideoPlaylist(playlistId);
    })
    .catch(err => alert('No Channel By That ID'));
}

// Add commas to number
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function requestVideoPlaylist(playlistId) {
  const requestOptions = {
    playlistId: playlistId,
    part: 'snippet',
    maxResults: 12
  };

  const request = gapi.client.youtube.playlistItems.list(requestOptions);

  request.execute(response => {
    console.log(response);
    const playListItems = response.result.items;
    if (playListItems.length) {
      let output = '<h4 class="text-center">Latest Videos</h4>';
      // Loop through videos and append output
      playListItems.forEach(item => {
        const videoId = item.snippet.resourceId.videoId;
        output += `
          <div class="col-12 mb-2 mb-sm-3">
            <div class="video-container px-0">
              <iframe class="video" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
        `;
      });

      // Output videos
      videoContainer.innerHTML = output;
    } else {
      videoContainer.innerHTML = `
      <h4 class="text-center">Latest Videos</h4>
      <div class="col-12 mb-2 mb-sm-3">
        No uploaded videos  
      </div>
      `;
    }
  });
}