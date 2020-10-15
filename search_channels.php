<div class="row" id="search-channels">
  <div class="col-12">  
    <!-- Log Out Log In Buttons -->
    <div id="search-login" class="user-login text-center">
      <div>Please log in with Google to use this feature!</div>
      <div class="pt-2 pb-1">Log In With Google</div>
      <button id="search-login-button" class="btn bg-red text-white btn-font border border-dark">LOG IN</button>
    </div>
  </div>
  <div id="search-content" class="mt-1">
  <!-- Modal for Question Mark -->
      <div class="modal fade" id="search-question" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="searchModalLabel">Search for YouTube Channels</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Please type in the name of the channel you wish to find and press search. The most relevant results are displayed first. Click on a result to see the data and information about it.
            </div>            
          </div>
        </div>
      </div>

    <!-- Form -->
    <div class="col-12 d-block text-center">
      <form id="search-form" class="text-center">
        <div class="input-field">
          <input class="mr-2" type="text" placeholder="Search for channels..." id="search-input"><span class="question-help" data-toggle="modal" data-target="#search-question"><i class="fa-lg fas fa-question-circle"></i></span><br>
          <input type="submit" value="Search" class="btn bg-red text-white btn-font border border-dark mt-1 px-4">
        </div>
      </form>
    </div>

    <!-- Results -->
    <div id="search-results" class="col-12 mt-3"></div>
  </div>
</div>


    