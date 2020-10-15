<div class="row bg-light-gray" id="by-id">
  <div class="col-12">
  <!-- Log In Button -->
    <div id="by-id-login" class="user-login text-center">
      <div>Please log in with Google to use this feature!</div>
      <div class="pt-2 pb-1">Log In With Google</div>
      <button id="by-id-login-button" class="btn bg-red text-white btn-font border border-dark">LOG IN</button>
    </div>
  </div>
  <div id="content" class="mt-1">
    <div class="col-12 d-block text-center">

      <!-- Modal for Question Mark -->
      <div class="modal fade" id="by-id-question" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">What is a YouTube Channel ID?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              A channel ID is a set of characters assigned to distinguish individual channels. For example, one ID is UClePynY267S97vwsxfbF5hg.<br><br>
              Users:  Please use the <a href="" onclick="displaySearchChannels()" data-dismiss="modal">Search Channels</a> feature. You can find channel data by searching for the channel name instead.<br><br>
              Developers:  If you already know the ID, you can find data by entering it here.
            </div>            
          </div>
        </div>
      </div>

      <form id="channel-form" class="text-center">
        <div class="input-field">
          <input class="mr-2" type="text" placeholder="Enter Channel ID..." id="channel-input"><span class="question-help" data-toggle="modal" data-target="#by-id-question"><i class="fa-lg fas fa-question-circle"></i></span><br>
          <input type="submit" value="Get Channel Info!" class="btn bg-red text-white btn-font border border-dark mt-1 px-4">
        </div>
      </form>
    </div>
    <div id="channel-thumbnail" class="col-12 mt-3"></div>
    <div id="channel-data" class="col-12 mt-3"></div>
    <div id="video-container" class="col-12 mt-3"></div>
  </div>