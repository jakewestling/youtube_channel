<div class="row bg-light-gray" id="by-id">
  <div class="col-12">
  <!-- Log In Button -->
    <div id="by-id-login" class="user-login text-center py-2">
      <div>Please log in with Google to use this feature!</div>
      <div class="pt-2 pb-1">Log In With Google</div>
      <button id="by-id-login-button" class="btn bg-red text-white btn-font border border-dark">LOG IN</button>
    </div>
  </div>
  <div id="content">
    <div class="col-12 d-block text-center">
      <form id="channel-form" class="text-center">
        <div class="input-field">
          <input class="mr-2" type="text" placeholder="Enter Channel ID..." id="channel-input"><span class="question-help" onclick=""><i class="fa-lg fas fa-question-circle"></i></span><br>
          <input type="submit" value="Get Channel Info!" class="btn bg-red text-white btn-font border border-dark mt-1 px-4">
        </div>
      </form>
    </div>
    <div id="channel-thumbnail" class="col-12 mt-3"></div>
    <div id="channel-data" class="col-12 mt-3"></div>
    <div id="video-container" class="col-12 mt-3"></div>
  </div>