


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>cubism-dashboard/dashboard/extended-cubism.js at master · zedfauji/cubism-dashboard · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe13.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="6f5ef9c+MGta7PAuAsmDvhJdRW3DdcK9ljg+JDf2XPU=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-105e49dc6acd41ca6cefa6d64b769a892393add7.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-cb6181999056f35a857fc48b05b6f4ed11bb140c.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8054ad804a1cf9e9849130fee5a4a5487b663ed.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-250031767f35511f476b1affa6ada8b62ae1b0a7.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="c1fdc6d113af92baef48130490cf738c">

        <link data-pjax-transient rel='permalink' href='/zedfauji/cubism-dashboard/blob/196331bc87d42103c3742599297461d0447703a2/dashboard/extended-cubism.js'>
  <meta property="og:title" content="cubism-dashboard"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/zedfauji/cubism-dashboard"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Contribute to cubism-dashboard development by creating an account on GitHub."/>

  <meta name="description" content="Contribute to cubism-dashboard development by creating an account on GitHub." />

  <meta content="1310981" name="octolytics-dimension-user_id" /><meta content="zedfauji" name="octolytics-dimension-user_login" /><meta content="11440311" name="octolytics-dimension-repository_id" /><meta content="zedfauji/cubism-dashboard" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11440311" name="octolytics-dimension-repository_network_root_id" /><meta content="zedfauji/cubism-dashboard" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/zedfauji/cubism-dashboard/commits/master.atom" rel="alternate" title="Recent Commits to cubism-dashboard:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production ">

    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fzedfauji%2Fcubism-dashboard%2Fblob%2Fmaster%2Fdashboard%2Fextended-cubism.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="zedfauji/cubism-dashboard"
      data-branch="master"
      data-sha="aac1edcc29d65476cb93317124b1ea632edb7454"
  >

    <input type="hidden" name="nwo" value="zedfauji/cubism-dashboard" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Fzedfauji%2Fcubism-dashboard"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards "
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/zedfauji/cubism-dashboard/stargazers">
  0
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Fzedfauji%2Fcubism-dashboard"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/zedfauji/cubism-dashboard/network" class="social-count">
        1
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/zedfauji" class="url fn" itemprop="url" rel="author"><span itemprop="title">zedfauji</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/zedfauji/cubism-dashboard" class="js-current-repository js-repo-home-link">cubism-dashboard</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container
            ">

          <div class="repository-sidebar">

              

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/zedfauji/cubism-dashboard" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /zedfauji/cubism-dashboard">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/zedfauji/cubism-dashboard/issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /zedfauji/cubism-dashboard/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/zedfauji/cubism-dashboard/pulls" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /zedfauji/cubism-dashboard/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>




    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/zedfauji/cubism-dashboard/pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /zedfauji/cubism-dashboard/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/zedfauji/cubism-dashboard/graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /zedfauji/cubism-dashboard/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/zedfauji/cubism-dashboard/network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /zedfauji/cubism-dashboard/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>


              <div class="only-with-full-nav">

                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/zedfauji/cubism-dashboard.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zedfauji/cubism-dashboard.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/zedfauji/cubism-dashboard" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zedfauji/cubism-dashboard" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>




                  <a href="/zedfauji/cubism-dashboard/archive/master.zip"
                     class="minibutton sidebar-button"
                     title="Download this repository as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>

              </div>
          </div>

          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
            


<!-- blob contrib key: blob_contributors:v21:e961cc399023c16db313ee4ef631dcf2 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:e961cc399023c16db313ee4ef631dcf2 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/zedfauji/cubism-dashboard/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zedfauji/cubism-dashboard/blob/master/dashboard/extended-cubism.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zedfauji/cubism-dashboard" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">cubism-dashboard</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zedfauji/cubism-dashboard/tree/master/dashboard" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dashboard</span></a></span><span class="separator"> / </span><strong class="final-path">extended-cubism.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="dashboard/extended-cubism.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/47d6c109c4486d3792a8891d38b18b88?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><span rel="author">NexTag User</span></span>
    <time class="js-relative-date" datetime="2013-07-15T23:32:52-07:00" title="2013-07-15 23:32:52">July 15, 2013</time>
    <div class="commit-title">
        <a href="/zedfauji/cubism-dashboard/commit/7045a7f6bd9a524e786fa31de6f21710150d0349" class="message" data-pjax="true">cubism.js extended</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>0</strong> contributors</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>43 lines (39 sloc)</span>
        <span>1.807 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton js-entice" href=""
                 data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
          <a href="/zedfauji/cubism-dashboard/raw/master/dashboard/extended-cubism.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/zedfauji/cubism-dashboard/blame/master/dashboard/extended-cubism.js" class="button minibutton ">Blame</a>
          <a href="/zedfauji/cubism-dashboard/commits/master/dashboard/extended-cubism.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon js-entice" href=""
               data-entice="You must be signed in and on a branch to make or propose changes">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">##################################################################</span></div><div class='line' id='LC3'><span class="cm">#  Method generates a fixed rule that displays the latest value	 #</span></div><div class='line' id='LC4'><span class="cm">#  of the matric on the mouse-over event on the horizon graph	 #</span></div><div class='line' id='LC5'><span class="cm">#  i/p params :-                                                 #</span></div><div class='line' id='LC6'><span class="cm">#  a) _CONTEXT_	:	cubism context.	                         #</span></div><div class='line' id='LC7'><span class="cm">#  b) _MATRIC_	:	Array of the arrays of the matrics       #</span></div><div class='line' id='LC8'><span class="cm"># 			defined for cubism.                      #</span></div><div class='line' id='LC9'><span class="cm">#  c) _HTMLTAG_	:	HTML tag/container in whic the value is  #</span></div><div class='line' id='LC10'><span class="cm"># 			assigned.                                #</span></div><div class='line' id='LC11'><span class="cm">#  :- Paritosh Anand 16/07/2013                                  #</span></div><div class='line' id='LC12'><span class="cm">##################################################################</span></div><div class='line' id='LC13'><span class="cm">*/</span></div><div class='line' id='LC14'><span class="kd">var</span> <span class="nx">CUSTOM_FIXED_RULE</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_CONTEXT_</span><span class="p">,</span><span class="nx">_MATRIC_</span><span class="p">,</span><span class="nx">_HTMLTAG_</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>	<span class="nx">_CONTEXT_</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;focus&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>		<span class="nx">d3</span><span class="p">.</span><span class="nx">selectAll</span><span class="p">(</span><span class="s2">&quot;.value&quot;</span><span class="p">).</span><span class="nx">style</span><span class="p">(</span><span class="s2">&quot;right&quot;</span><span class="p">,</span> <span class="nx">i</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nx">_CONTEXT_</span><span class="p">.</span><span class="nx">size</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">-</span> <span class="nx">i</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">);</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>		<span class="kd">var</span> <span class="nx">_LATEST_VALUE_</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC20'>		<span class="k">if</span><span class="p">(</span><span class="nx">i</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">_CONTEXT_</span><span class="p">.</span><span class="nx">size</span><span class="p">()</span> <span class="o">-</span> <span class="mi">50</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//--handling the internal call to this method--</span></div><div class='line' id='LC21'>			<span class="c1">//--fetching the value of all the matrices--</span></div><div class='line' id='LC22'>			<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">_MATRIC_</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC23'>				<span class="k">for</span><span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">_MATRIC_</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>					<span class="k">if</span><span class="p">(</span><span class="nx">_MATRIC_</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">].</span><span class="nx">valueAt</span><span class="p">(</span><span class="nx">_CONTEXT_</span><span class="p">.</span><span class="nx">size</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>						<span class="nx">_LATEST_VALUE_</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_MATRIC_</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">].</span><span class="nx">valueAt</span><span class="p">(</span><span class="nx">_CONTEXT_</span><span class="p">.</span><span class="nx">size</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span><span class="p">).</span><span class="nx">toFixed</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC26'>						<span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByName</span><span class="p">(</span><span class="nx">_HTMLTAG_</span><span class="p">[</span><span class="nx">i</span><span class="p">])[</span><span class="nx">j</span><span class="p">].</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">_LATEST_VALUE_</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC27'>						<span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByName</span><span class="p">(</span><span class="nx">_HTMLTAG_</span><span class="p">[</span><span class="nx">i</span><span class="p">])[</span><span class="nx">j</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC28'>					<span class="p">}</span></div><div class='line' id='LC29'>				<span class="p">}</span></div><div class='line' id='LC30'>			<span class="p">}</span></div><div class='line' id='LC31'>		<span class="p">}</span></div><div class='line' id='LC32'>	<span class="p">});</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>	<span class="c1">//--function to remove the customized-fixed value of the matric on mouseout/blur--</span></div><div class='line' id='LC35'>	<span class="nx">_CONTEXT_</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;blur&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC36'>		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">_HTMLTAG_</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC37'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByName</span><span class="p">(</span><span class="nx">_HTMLTAG_</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'>				<span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByName</span><span class="p">(</span><span class="nx">_HTMLTAG_</span><span class="p">[</span><span class="nx">i</span><span class="p">])[</span><span class="nx">j</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="s2">&quot;none&quot;</span><span class="p">;</span></div><div class='line' id='LC39'>			<span class="p">}</span></div><div class='line' id='LC40'>		<span class="p">}</span></div><div class='line' id='LC41'>	<span class="p">});</span></div><div class='line' id='LC42'><span class="p">};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

          </div>
        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div>
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.03755s from fe13.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/zedfauji/cubism-dashboard/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

