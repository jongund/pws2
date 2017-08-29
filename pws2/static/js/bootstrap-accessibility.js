




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.js at master · paypal/bootstrap-accessibility-plugin · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="paypal/bootstrap-accessibility-plugin" name="twitter:title" /><meta content="bootstrap-accessibility-plugin - Accessibility Plugin for Bootstrap 3 and Bootstrap 3 as SubModule" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/476675?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/476675?s=400" property="og:image" /><meta content="paypal/bootstrap-accessibility-plugin" property="og:title" /><meta content="https://github.com/paypal/bootstrap-accessibility-plugin" property="og:url" /><meta content="bootstrap-accessibility-plugin - Accessibility Plugin for Bootstrap 3 and Bootstrap 3 as SubModule" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="80AE5DD9:5E0A:83445:53ADD049" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="YjY2msU3ogT2yj4IYBESQi+vKwTnwY3za4B5Od40i9kykwSnqjMA2pIsl0SKeV9Mpstxa7bjyTJ8l9gng4zDaw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-bbf4e7b5ed0367744288dcb496d8dcb1b048f4a2.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-830b6eccd2ef85b203e66317cf87f0e48fa5f878.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="9a986c072ca221c7aa2087752c4d53e7">

      
  <meta name="description" content="bootstrap-accessibility-plugin - Accessibility Plugin for Bootstrap 3 and Bootstrap 3 as SubModule" />


  <meta content="476675" name="octolytics-dimension-user_id" /><meta content="paypal" name="octolytics-dimension-user_login" /><meta content="16303997" name="octolytics-dimension-repository_id" /><meta content="paypal/bootstrap-accessibility-plugin" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="16303997" name="octolytics-dimension-repository_network_root_id" /><meta content="paypal/bootstrap-accessibility-plugin" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/paypal/bootstrap-accessibility-plugin/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-accessibility-plugin:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fpaypal%2Fbootstrap-accessibility-plugin%2Fblob%2Fmaster%2Fplugins%2Fjs%2Fbootstrap-accessibility.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
          <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="paypal/bootstrap-accessibility-plugin"
      data-branch="master"
      data-sha="f3d99b85c0cf5b90f5d3fd5bc45fdff0a7846305"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="paypal/bootstrap-accessibility-plugin" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
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

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fpaypal%2Fbootstrap-accessibility-plugin"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/paypal/bootstrap-accessibility-plugin/stargazers">
      390
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fpaypal%2Fbootstrap-accessibility-plugin"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/paypal/bootstrap-accessibility-plugin/network" class="social-count">
        60
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/paypal" class="url fn" itemprop="url" rel="author"><span itemprop="title">paypal</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/paypal/bootstrap-accessibility-plugin" class="js-current-repository js-repo-home-link">bootstrap-accessibility-plugin</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/paypal/bootstrap-accessibility-plugin" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /paypal/bootstrap-accessibility-plugin">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/paypal/bootstrap-accessibility-plugin/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /paypal/bootstrap-accessibility-plugin/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>6</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/paypal/bootstrap-accessibility-plugin/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /paypal/bootstrap-accessibility-plugin/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/paypal/bootstrap-accessibility-plugin/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /paypal/bootstrap-accessibility-plugin/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/paypal/bootstrap-accessibility-plugin/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /paypal/bootstrap-accessibility-plugin/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/paypal/bootstrap-accessibility-plugin/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /paypal/bootstrap-accessibility-plugin/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/paypal/bootstrap-accessibility-plugin.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/paypal/bootstrap-accessibility-plugin.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/paypal/bootstrap-accessibility-plugin" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/paypal/bootstrap-accessibility-plugin" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/paypal/bootstrap-accessibility-plugin" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save paypal/bootstrap-accessibility-plugin to your computer and use it in GitHub Desktop." aria-label="Save paypal/bootstrap-accessibility-plugin to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/paypal/bootstrap-accessibility-plugin/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download paypal/bootstrap-accessibility-plugin as a zip file"
                   title="Download paypal/bootstrap-accessibility-plugin as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/paypal/bootstrap-accessibility-plugin/blob/a7e7f9a4395301bdd83c0b54294547c0151500a1/plugins/js/bootstrap-accessibility.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f78f5c368da4f6bc575d34279c080811 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
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


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paypal/bootstrap-accessibility-plugin/blob/gh-pages/plugins/js/bootstrap-accessibility.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paypal/bootstrap-accessibility-plugin/blob/master/plugins/js/bootstrap-accessibility.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paypal/bootstrap-accessibility-plugin/tree/v1.0.2/plugins/js/bootstrap-accessibility.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paypal/bootstrap-accessibility-plugin/tree/v1.0.0/plugins/js/bootstrap-accessibility.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/paypal/bootstrap-accessibility-plugin/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="plugins/js/bootstrap-accessibility.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/paypal/bootstrap-accessibility-plugin" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap-accessibility-plugin</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/paypal/bootstrap-accessibility-plugin/tree/master/plugins" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">plugins</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/paypal/bootstrap-accessibility-plugin/tree/master/plugins/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap-accessibility.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Nawaz" class="main-avatar js-avatar" data-user="2254656" height="24" src="https://avatars2.githubusercontent.com/u/2254656?s=140" width="24" />
      <span class="author"><a href="/mpnkhan" rel="contributor">mpnkhan</a></span>
      <time datetime="2014-06-11T15:41:34+05:30" is="relative-time">June 11, 2014</time>
      <div class="commit-title">
          <a href="/paypal/bootstrap-accessibility-plugin/commit/b1c70224e12d225159a5c36215a3dda65951fc11" class="message" data-pjax="true" title="Split plugin into individual files fixes #34">Split plugin into individual files fixes</a> <a href="https://github.com/paypal/bootstrap-accessibility-plugin/issues/34" class="issue-link" title="split plugins into individual files for easier consumption">#34</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>8</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="mpnkhan" href="/paypal/bootstrap-accessibility-plugin/commits/master/plugins/js/bootstrap-accessibility.js?author=mpnkhan"><img alt="Nawaz" class=" js-avatar" data-user="2254656" height="20" src="https://avatars2.githubusercontent.com/u/2254656?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="vick08" href="/paypal/bootstrap-accessibility-plugin/commits/master/plugins/js/bootstrap-accessibility.js?author=vick08"><img alt="Victor Tsaran" class=" js-avatar" data-user="1222729" height="20" src="https://avatars3.githubusercontent.com/u/1222729?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="rohk" href="/paypal/bootstrap-accessibility-plugin/commits/master/plugins/js/bootstrap-accessibility.js?author=rohk"><img alt="rohk" class=" js-avatar" data-user="493210" height="20" src="https://avatars3.githubusercontent.com/u/493210?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="bassettsj" href="/paypal/bootstrap-accessibility-plugin/commits/master/plugins/js/bootstrap-accessibility.js?author=bassettsj"><img alt="Steven Bassett" class=" js-avatar" data-user="1218420" height="20" src="https://avatars1.githubusercontent.com/u/1218420?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="janwalther" href="/paypal/bootstrap-accessibility-plugin/commits/master/plugins/js/bootstrap-accessibility.js?author=janwalther"><img alt="Jan Walther" class=" js-avatar" data-user="1847612" height="20" src="https://avatars3.githubusercontent.com/u/1847612?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="biggeleben" href="/paypal/bootstrap-accessibility-plugin/commits/master/plugins/js/bootstrap-accessibility.js?author=biggeleben"><img alt="Mattes" class=" js-avatar" data-user="1384704" height="20" src="https://avatars2.githubusercontent.com/u/1384704?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ixisio" href="/paypal/bootstrap-accessibility-plugin/commits/master/plugins/js/bootstrap-accessibility.js?author=ixisio"><img alt="Andreas Klein" class=" js-avatar" data-user="2619812" height="20" src="https://avatars0.githubusercontent.com/u/2619812?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="AndreasIgelCC" href="/paypal/bootstrap-accessibility-plugin/commits/master/plugins/js/bootstrap-accessibility.js?author=AndreasIgelCC"><img alt="AndreasIgelCC" class=" js-avatar" data-user="2921976" height="20" src="https://avatars3.githubusercontent.com/u/2921976?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Nawaz" class=" js-avatar" data-user="2254656" height="24" src="https://avatars2.githubusercontent.com/u/2254656?s=140" width="24" />
            <a href="/mpnkhan">mpnkhan</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Victor Tsaran" class=" js-avatar" data-user="1222729" height="24" src="https://avatars3.githubusercontent.com/u/1222729?s=140" width="24" />
            <a href="/vick08">vick08</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="rohk" class=" js-avatar" data-user="493210" height="24" src="https://avatars3.githubusercontent.com/u/493210?s=140" width="24" />
            <a href="/rohk">rohk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Steven Bassett" class=" js-avatar" data-user="1218420" height="24" src="https://avatars1.githubusercontent.com/u/1218420?s=140" width="24" />
            <a href="/bassettsj">bassettsj</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jan Walther" class=" js-avatar" data-user="1847612" height="24" src="https://avatars3.githubusercontent.com/u/1847612?s=140" width="24" />
            <a href="/janwalther">janwalther</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mattes" class=" js-avatar" data-user="1384704" height="24" src="https://avatars2.githubusercontent.com/u/1384704?s=140" width="24" />
            <a href="/biggeleben">biggeleben</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andreas Klein" class=" js-avatar" data-user="2619812" height="24" src="https://avatars0.githubusercontent.com/u/2619812?s=140" width="24" />
            <a href="/ixisio">ixisio</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="AndreasIgelCC" class=" js-avatar" data-user="2921976" height="24" src="https://avatars3.githubusercontent.com/u/2921976?s=140" width="24" />
            <a href="/AndreasIgelCC">AndreasIgelCC</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>404 lines (319 sloc)</span>
          <span class="meta-divider"></span>
        <span>15.406 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/paypal/bootstrap-accessibility-plugin?branch=master&amp;filepath=plugins%2Fjs%2Fbootstrap-accessibility.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/paypal/bootstrap-accessibility-plugin/raw/master/plugins/js/bootstrap-accessibility.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/paypal/bootstrap-accessibility-plugin/blame/master/plugins/js/bootstrap-accessibility.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/paypal/bootstrap-accessibility-plugin/commits/master/plugins/js/bootstrap-accessibility.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
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
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/* ========================================================================</span></div><div class='line' id='LC2'><span class="cm">* Extends Bootstrap v3.1.1</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="cm">* Copyright (c) &lt;2014&gt; eBay Software Foundation</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="cm">* All rights reserved.</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="cm">* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="cm">* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="cm">* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="cm">* Neither the name of eBay or any of its subsidiaries or affiliates nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="cm">* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'><span class="cm">* ======================================================================== */</span></div><div class='line' id='LC19'>&nbsp;&nbsp;</div><div class='line' id='LC20'>&nbsp;</div><div class='line' id='LC21'>&nbsp;<span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="s2">&quot;use strict&quot;</span><span class="p">;</span> </div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="c1">// GENERAL UTILITY FUNCTIONS</span></div><div class='line' id='LC25'>&nbsp;&nbsp;<span class="c1">// ===============================</span></div><div class='line' id='LC26'>&nbsp;&nbsp;</div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">uniqueId</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">prefix</span> <span class="o">||</span> <span class="s1">&#39;ui-id&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span><span class="o">*</span><span class="mi">1000</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>&nbsp;&nbsp;</div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">removeMultiValAttributes</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">attr</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">describedby</span> <span class="o">=</span> <span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="nx">attr</span> <span class="p">)</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span> <span class="sr">/\s+/</span> <span class="p">)</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">describedby</span><span class="p">)</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">index</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">describedby</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span> <span class="nx">index</span><span class="p">,</span> <span class="mi">1</span> <span class="p">)</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;<span class="nx">describedby</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span> <span class="nx">describedby</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span> <span class="s2">&quot; &quot;</span> <span class="p">)</span> <span class="p">)</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">describedby</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="nx">attr</span><span class="p">,</span> <span class="nx">describedby</span> <span class="p">)</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">el</span><span class="p">.</span><span class="nx">removeAttr</span><span class="p">(</span> <span class="nx">attr</span> <span class="p">)</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC45'><span class="c1">// Alert Extension</span></div><div class='line' id='LC46'><span class="c1">// ===============================</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.alert&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span> <span class="s1">&#39;alert&#39;</span><span class="p">)</span></div><div class='line' id='LC49'><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.close&#39;</span><span class="p">).</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s1">&#39;aria-hidden&#39;</span><span class="p">).</span><span class="nx">wrapInner</span><span class="p">(</span><span class="s1">&#39;&lt;span aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;sr-only&quot;&gt;Close&lt;/span&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="c1">// TOOLTIP Extension</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="c1">// ===============================</span></div><div class='line' id='LC53'>&nbsp;&nbsp;</div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">showTooltip</span> <span class="o">=</span>    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tooltip</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">show</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">hideTooltip</span> <span class="o">=</span>    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tooltip</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hide</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tooltip</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">show</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">showTooltip</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$tip</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tip</span><span class="p">()</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">tooltipID</span> <span class="o">=</span> <span class="nx">$tip</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">uniqueId</span><span class="p">(</span><span class="s1">&#39;ui-tooltip&#39;</span><span class="p">)</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tip</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span><span class="s1">&#39;role&#39;</span><span class="o">:</span><span class="s1">&#39;tooltip&#39;</span><span class="p">,</span><span class="s1">&#39;id&#39;</span> <span class="o">:</span> <span class="nx">tooltipID</span><span class="p">})</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;aria-describedby&#39;</span><span class="p">,</span> <span class="nx">tooltipID</span><span class="p">)</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tooltip</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hide</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hideTooltip</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">removeMultiValAttributes</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">,</span> <span class="s1">&#39;aria-describedby&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">tip</span><span class="p">().</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">))</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="c1">// Popover Extension</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="c1">// ===============================</span></div><div class='line' id='LC72'>&nbsp;&nbsp;</div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">showPopover</span> <span class="o">=</span>   <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">popover</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setContent</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">hideTPopover</span> <span class="o">=</span>   <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">popover</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hide</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">popover</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setContent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">showPopover</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$tip</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tip</span><span class="p">()</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">tooltipID</span> <span class="o">=</span> <span class="nx">$tip</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">uniqueId</span><span class="p">(</span><span class="s1">&#39;ui-tooltip&#39;</span><span class="p">)</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tip</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span><span class="s1">&#39;role&#39;</span><span class="o">:</span><span class="s1">&#39;alert&#39;</span><span class="p">,</span><span class="s1">&#39;id&#39;</span> <span class="o">:</span> <span class="nx">tooltipID</span><span class="p">})</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;aria-describedby&#39;</span><span class="p">,</span> <span class="nx">tooltipID</span><span class="p">)</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">focus</span><span class="p">()</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">popover</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hide</span> <span class="o">=</span>  <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hideTooltip</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">removeMultiValAttributes</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">,</span> <span class="s1">&#39;aria-describedby&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">tip</span><span class="p">().</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">))</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC88'>&nbsp;&nbsp;<span class="c1">// Modal Extension</span></div><div class='line' id='LC89'>&nbsp;&nbsp;<span class="c1">// ===============================</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>	<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.modal-dialog&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span> <span class="p">{</span><span class="s1">&#39;role&#39;</span> <span class="o">:</span> <span class="s1">&#39;document&#39;</span><span class="p">})</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">modalhide</span> <span class="o">=</span>   <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hide</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hide</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">modalOpener</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[data-target=&quot;#&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">)</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modalhide</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modalOpener</span><span class="p">.</span><span class="nx">focus</span><span class="p">()</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC98'>&nbsp;&nbsp;<span class="c1">// DROPDOWN Extension</span></div><div class='line' id='LC99'>&nbsp;&nbsp;<span class="c1">// ===============================</span></div><div class='line' id='LC100'>&nbsp;&nbsp;</div><div class='line' id='LC101'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">toggle</span>   <span class="o">=</span> <span class="s1">&#39;[data-toggle=dropdown]&#39;</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$par</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">firstItem</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">focusDelay</span> <span class="o">=</span> <span class="mi">200</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">menus</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">toggle</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;ul&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span><span class="s1">&#39;menu&#39;</span><span class="p">)</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">lis</span> <span class="o">=</span> <span class="nx">menus</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span><span class="s1">&#39;presentation&#39;</span><span class="p">)</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lis</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span><span class="s1">&#39;role&#39;</span><span class="o">:</span><span class="s1">&#39;menuitem&#39;</span><span class="p">,</span> <span class="s1">&#39;tabIndex&#39;</span><span class="o">:</span><span class="s1">&#39;-1&#39;</span><span class="p">})</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">toggle</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-haspopup&#39;</span><span class="o">:</span><span class="s1">&#39;true&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-expanded&#39;</span><span class="o">:</span> <span class="s1">&#39;false&#39;</span><span class="p">})</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">toggle</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;shown.bs.dropdown&#39;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$par</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$toggle</span> <span class="o">=</span> <span class="nx">$par</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">toggle</span><span class="p">)</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$toggle</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;aria-expanded&#39;</span><span class="p">,</span><span class="s1">&#39;true&#39;</span><span class="p">)</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">firstItem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.dropdown-menu [role=menuitem]:visible&#39;</span><span class="p">,</span> <span class="nx">$par</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span><span class="p">{</span> <span class="nx">firstItem</span><span class="p">.</span><span class="nx">focus</span><span class="p">()}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">ex</span><span class="p">)</span> <span class="p">{}</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">focusDelay</span><span class="p">)</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">toggle</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;hidden.bs.dropdown&#39;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$par</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$toggle</span> <span class="o">=</span> <span class="nx">$par</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">toggle</span><span class="p">)</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$toggle</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;aria-expanded&#39;</span><span class="p">,</span><span class="s1">&#39;false&#39;</span><span class="p">)</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Adding Space Key Behaviour, opens on spacebar</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dropdown</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">keydown</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span>  <span class="nx">$par</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">firstItem</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="sr">/(32)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">))</span> <span class="k">return</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$par</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">parent</span><span class="p">()</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">trigger</span> <span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">)</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">()</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">)</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;focusout.dropdown.data-api&#39;</span><span class="p">,</span> <span class="s1">&#39;.dropdown-menu&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">that</span><span class="p">,</span> <span class="nb">document</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">)){</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;open&#39;</span><span class="p">)</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[data-toggle=dropdown]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;aria-expanded&#39;</span><span class="p">,</span><span class="s1">&#39;false&#39;</span><span class="p">)</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">150</span><span class="p">)</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;keydown.bs.dropdown.data-api&#39;</span><span class="p">,</span> <span class="nx">toggle</span> <span class="o">+</span> <span class="s1">&#39;, [role=menu]&#39;</span> <span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dropdown</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">keydown</span><span class="p">)</span></div><div class='line' id='LC150'>&nbsp;&nbsp;<span class="c1">// Tab Extension</span></div><div class='line' id='LC151'>&nbsp;&nbsp;<span class="c1">// ===============================</span></div><div class='line' id='LC152'>&nbsp;&nbsp;</div><div class='line' id='LC153'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$tablist</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.nav-tabs, .nav-pills&#39;</span><span class="p">)</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$lis</span> <span class="o">=</span> <span class="nx">$tablist</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">)</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$tabs</span> <span class="o">=</span> <span class="nx">$tablist</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[data-toggle=&quot;tab&quot;], [data-toggle=&quot;pill&quot;]&#39;</span><span class="p">)</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tablist</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span> <span class="s1">&#39;tablist&#39;</span><span class="p">)</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lis</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span> <span class="s1">&#39;presentation&#39;</span><span class="p">)</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tabs</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span> <span class="s1">&#39;tab&#39;</span><span class="p">)</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tabs</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">index</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tabpanel</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">))</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">tab</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">tabid</span> <span class="o">=</span> <span class="nx">tab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">uniqueId</span><span class="p">(</span><span class="s1">&#39;ui-tab&#39;</span><span class="p">)</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">,</span> <span class="nx">tabid</span><span class="p">)</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">tab</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;active&#39;</span><span class="p">)){</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="p">{</span> <span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;0&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-selected&#39;</span> <span class="o">:</span> <span class="s1">&#39;true&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-controls&#39;</span><span class="o">:</span> <span class="nx">tab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">).</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="p">}</span> <span class="p">)</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tabpanel</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;role&#39;</span> <span class="o">:</span> <span class="s1">&#39;tabpanel&#39;</span><span class="p">,</span> <span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;0&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-hidden&#39;</span> <span class="o">:</span> <span class="s1">&#39;false&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-labelledby&#39;</span><span class="o">:</span><span class="nx">tabid</span> <span class="p">})</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span><span class="k">else</span><span class="p">{</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="p">{</span> <span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;-1&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-selected&#39;</span> <span class="o">:</span> <span class="s1">&#39;false&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-controls&#39;</span><span class="o">:</span> <span class="nx">tab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">).</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="p">}</span> <span class="p">)</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tabpanel</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="p">{</span> <span class="s1">&#39;role&#39;</span> <span class="o">:</span> <span class="s1">&#39;tabpanel&#39;</span><span class="p">,</span> <span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;-1&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-hidden&#39;</span> <span class="o">:</span> <span class="s1">&#39;true&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-labelledby&#39;</span><span class="o">:</span><span class="nx">tabid</span> <span class="p">}</span> <span class="p">)</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tab</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">keydown</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$items</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$ul</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;ul[role=tablist] &#39;</span><span class="p">)</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">index</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">which</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="sr">/(37|38|39|40)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">k</span><span class="p">))</span> <span class="k">return</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$items</span> <span class="o">=</span> <span class="nx">$ul</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[role=tab]:visible&#39;</span><span class="p">)</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">index</span><span class="p">(</span><span class="nx">$items</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;:focus&#39;</span><span class="p">))</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">k</span> <span class="o">==</span> <span class="mi">38</span> <span class="o">||</span> <span class="nx">k</span> <span class="o">==</span> <span class="mi">37</span><span class="p">)</span> <span class="nx">index</span><span class="o">--</span>                         <span class="c1">// up &amp; left</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">k</span> <span class="o">==</span> <span class="mi">39</span> <span class="o">||</span> <span class="nx">k</span> <span class="o">==</span> <span class="mi">40</span><span class="p">)</span> <span class="nx">index</span><span class="o">++</span>                        <span class="c1">// down &amp; right</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">index</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span><span class="mi">1</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">index</span> <span class="o">==</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nextTab</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">nextTab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">)</span> <span class="o">===</span><span class="s1">&#39;tab&#39;</span><span class="p">){</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nextTab</span><span class="p">.</span><span class="nx">tab</span><span class="p">(</span><span class="s1">&#39;show&#39;</span><span class="p">)</span>      <span class="c1">//Comment this line for dynamically loaded tabPabels, to save Ajax requests on arrow key navigation</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">focus</span><span class="p">()</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// nextTab.focus()</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">()</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;keydown.tab.data-api&#39;</span><span class="p">,</span><span class="s1">&#39;[data-toggle=&quot;tab&quot;], [data-toggle=&quot;pill&quot;]&#39;</span> <span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tab</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">keydown</span><span class="p">)</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tabactivate</span> <span class="o">=</span>    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tab</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">activate</span><span class="p">;</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tab</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">activate</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">container</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$active</span> <span class="o">=</span> <span class="nx">container</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;&gt; .active&#39;</span><span class="p">)</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$active</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[data-toggle=tab], [data-toggle=pill]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;-1&#39;</span><span class="p">,</span><span class="s1">&#39;aria-selected&#39;</span> <span class="o">:</span> <span class="kc">false</span> <span class="p">})</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$active</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;.tab-pane&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-hidden&#39;</span> <span class="o">:</span> <span class="kc">true</span><span class="p">,</span><span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;-1&#39;</span> <span class="p">})</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tabactivate</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;active&#39;</span><span class="p">)</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[data-toggle=tab], [data-toggle=pill]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;0&#39;</span><span class="p">,</span><span class="s1">&#39;aria-selected&#39;</span> <span class="o">:</span> <span class="kc">true</span> <span class="p">})</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;.tab-pane&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-hidden&#39;</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span><span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;0&#39;</span> <span class="p">})</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC223'><br/></div><div class='line' id='LC224'>&nbsp;&nbsp;<span class="c1">// Collapse Extension</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="c1">// ===============================</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$colltabs</span> <span class="o">=</span>  <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;[data-toggle=&quot;collapse&quot;]&#39;</span><span class="p">)</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$colltabs</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;role&#39;</span><span class="o">:</span><span class="s1">&#39;tab&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-selected&#39;</span><span class="o">:</span><span class="s1">&#39;false&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-expanded&#39;</span><span class="o">:</span><span class="s1">&#39;false&#39;</span> <span class="p">})</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$colltabs</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">index</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">colltab</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">collpanel</span> <span class="o">=</span> <span class="p">(</span><span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-target&#39;</span><span class="p">))</span> <span class="o">?</span> <span class="nx">$</span><span class="p">(</span><span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-target&#39;</span><span class="p">))</span> <span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">))</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">parent</span>  <span class="o">=</span> <span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-parent&#39;</span><span class="p">)</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">collparent</span> <span class="o">=</span> <span class="nx">parent</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">(</span><span class="nx">parent</span><span class="p">)</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">collid</span> <span class="o">=</span> <span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">uniqueId</span><span class="p">(</span><span class="s1">&#39;ui-collapse&#39;</span><span class="p">)</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">collparent</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;div:not(.collapse,.panel-body), h4&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span><span class="s1">&#39;presentation&#39;</span><span class="p">)</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">,</span> <span class="nx">collid</span><span class="p">)</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">collparent</span><span class="p">){</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collparent</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;role&#39;</span> <span class="o">:</span> <span class="s1">&#39;tablist&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-multiselectable&#39;</span> <span class="o">:</span> <span class="s1">&#39;true&#39;</span> <span class="p">})</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">collpanel</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;in&#39;</span><span class="p">)){</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-controls&#39;</span><span class="o">:</span> <span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">).</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span> <span class="s1">&#39;aria-selected&#39;</span><span class="o">:</span><span class="s1">&#39;true&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-expanded&#39;</span><span class="o">:</span><span class="s1">&#39;true&#39;</span><span class="p">,</span> <span class="s1">&#39;tabindex&#39;</span><span class="o">:</span><span class="s1">&#39;0&#39;</span> <span class="p">})</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collpanel</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;role&#39;</span><span class="o">:</span><span class="s1">&#39;tabpanel&#39;</span><span class="p">,</span> <span class="s1">&#39;tabindex&#39;</span><span class="o">:</span><span class="s1">&#39;0&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-labelledby&#39;</span><span class="o">:</span><span class="nx">collid</span><span class="p">,</span> <span class="s1">&#39;aria-hidden&#39;</span><span class="o">:</span><span class="s1">&#39;false&#39;</span> <span class="p">})</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span><span class="k">else</span><span class="p">{</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span><span class="s1">&#39;aria-controls&#39;</span> <span class="o">:</span> <span class="nx">colltab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">).</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span> <span class="s1">&#39;tabindex&#39;</span><span class="o">:</span><span class="s1">&#39;-1&#39;</span> <span class="p">})</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collpanel</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;role&#39;</span><span class="o">:</span><span class="s1">&#39;tabpanel&#39;</span><span class="p">,</span> <span class="s1">&#39;tabindex&#39;</span><span class="o">:</span><span class="s1">&#39;-1&#39;</span><span class="p">,</span> <span class="s1">&#39;aria-labelledby&#39;</span><span class="o">:</span><span class="nx">collid</span><span class="p">,</span> <span class="s1">&#39;aria-hidden&#39;</span><span class="o">:</span><span class="s1">&#39;true&#39;</span> <span class="p">})</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">collToggle</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">collapse</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toggle</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">collapse</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toggle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">prevTab</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$parent</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$parent</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[aria-expanded=&quot;true&quot;]&#39;</span><span class="p">)</span> <span class="p">,</span> <span class="nx">href</span></div><div class='line' id='LC254'><br/></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">prevTab</span><span class="p">){</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">prevPanel</span> <span class="o">=</span> <span class="nx">prevTab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-target&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">prevTab</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">href</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/.*(?=#[^\s]+$)/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$prevPanel</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">prevPanel</span><span class="p">)</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$curPanel</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">par</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$parent</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">curTab</span></div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$parent</span><span class="p">)</span> <span class="nx">curTab</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$parent</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[data-toggle=collapse][href=&quot;#&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">)</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collToggle</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">one</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prevTab</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-selected&#39;</span><span class="o">:</span><span class="s1">&#39;false&#39;</span><span class="p">,</span><span class="s1">&#39;aria-expanded&#39;</span><span class="o">:</span><span class="s1">&#39;false&#39;</span><span class="p">,</span> <span class="s1">&#39;tabIndex&#39;</span><span class="o">:</span><span class="s1">&#39;-1&#39;</span> <span class="p">})</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$prevPanel</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-hidden&#39;</span> <span class="o">:</span> <span class="s1">&#39;true&#39;</span><span class="p">,</span><span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;-1&#39;</span><span class="p">})</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">curTab</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-selected&#39;</span><span class="o">:</span><span class="s1">&#39;true&#39;</span><span class="p">,</span><span class="s1">&#39;aria-expanded&#39;</span><span class="o">:</span><span class="s1">&#39;true&#39;</span><span class="p">,</span> <span class="s1">&#39;tabIndex&#39;</span><span class="o">:</span><span class="s1">&#39;0&#39;</span> <span class="p">})</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">$curPanel</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;in&#39;</span><span class="p">)){</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$curPanel</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-hidden&#39;</span> <span class="o">:</span> <span class="s1">&#39;false&#39;</span><span class="p">,</span><span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;0&#39;</span> <span class="p">})</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span><span class="k">else</span><span class="p">{</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">curTab</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-selected&#39;</span><span class="o">:</span><span class="s1">&#39;false&#39;</span><span class="p">,</span><span class="s1">&#39;aria-expanded&#39;</span><span class="o">:</span><span class="s1">&#39;false&#39;</span><span class="p">})</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$curPanel</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-hidden&#39;</span> <span class="o">:</span> <span class="s1">&#39;true&#39;</span><span class="p">,</span><span class="s1">&#39;tabIndex&#39;</span> <span class="o">:</span> <span class="s1">&#39;-1&#39;</span> <span class="p">})</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span><span class="k">else</span><span class="p">{</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collToggle</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">collapse</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">keydown</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$items</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$tablist</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;div[role=tablist] &#39;</span><span class="p">)</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">index</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">which</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="sr">/(32|37|38|39|40)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">k</span><span class="p">))</span> <span class="k">return</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">k</span><span class="o">==</span><span class="mi">32</span><span class="p">)</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">click</span><span class="p">()</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$items</span> <span class="o">=</span> <span class="nx">$tablist</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[role=tab]&#39;</span><span class="p">)</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">index</span><span class="p">(</span><span class="nx">$items</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;:focus&#39;</span><span class="p">))</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">k</span> <span class="o">==</span> <span class="mi">38</span> <span class="o">||</span> <span class="nx">k</span> <span class="o">==</span> <span class="mi">37</span><span class="p">)</span> <span class="nx">index</span><span class="o">--</span>                                        <span class="c1">// up &amp; left</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">k</span> <span class="o">==</span> <span class="mi">39</span> <span class="o">||</span> <span class="nx">k</span> <span class="o">==</span> <span class="mi">40</span><span class="p">)</span> <span class="nx">index</span><span class="o">++</span>                        <span class="c1">// down &amp; right</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">index</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span><span class="mi">1</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">index</span> <span class="o">==</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC305'><br/></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$items</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="nx">index</span><span class="p">).</span><span class="nx">focus</span><span class="p">()</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">()</span></div><div class='line' id='LC310'><br/></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;keydown.collapse.data-api&#39;</span><span class="p">,</span><span class="s1">&#39;[data-toggle=&quot;collapse&quot;]&#39;</span> <span class="p">,</span>  <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">collapse</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">keydown</span><span class="p">)</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC315'>&nbsp;&nbsp;<span class="c1">// Carousel Extension</span></div><div class='line' id='LC316'>&nbsp;&nbsp;<span class="c1">// ===============================</span></div><div class='line' id='LC317'>&nbsp;&nbsp;</div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.carousel&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">prev</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[data-slide=&quot;prev&quot;]&#39;</span><span class="p">)</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">next</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[data-slide=&quot;next&quot;]&#39;</span><span class="p">)</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$options</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.item&#39;</span><span class="p">)</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$listbox</span> <span class="o">=</span> <span class="nx">$options</span><span class="p">.</span><span class="nx">parent</span><span class="p">()</span></div><div class='line' id='LC324'><br/></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="p">{</span> <span class="s1">&#39;data-interval&#39;</span> <span class="o">:</span> <span class="s1">&#39;false&#39;</span><span class="p">,</span> <span class="s1">&#39;data-wrap&#39;</span> <span class="o">:</span> <span class="s1">&#39;false&#39;</span> <span class="p">}</span> <span class="p">)</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$listbox</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span> <span class="s1">&#39;listbox&#39;</span><span class="p">)</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$options</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span> <span class="s1">&#39;option&#39;</span><span class="p">)</span></div><div class='line' id='LC328'><br/></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">spanPrev</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;span&#39;</span><span class="p">)</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spanPrev</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;class&#39;</span><span class="p">,</span> <span class="s1">&#39;sr-only&#39;</span><span class="p">)</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spanPrev</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="s1">&#39;Previous&#39;</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">spanNext</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;span&#39;</span><span class="p">)</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spanNext</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;class&#39;</span><span class="p">,</span> <span class="s1">&#39;sr-only&#39;</span><span class="p">)</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spanNext</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="s1">&#39;Next&#39;</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prev</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span> <span class="s1">&#39;button&#39;</span><span class="p">)</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">next</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;role&#39;</span><span class="p">,</span> <span class="s1">&#39;button&#39;</span><span class="p">)</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prev</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">spanPrev</span><span class="p">)</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">next</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">spanNext</span><span class="p">)</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$options</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;active&#39;</span><span class="p">)){</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-selected&#39;</span><span class="o">:</span> <span class="s1">&#39;true&#39;</span><span class="p">,</span> <span class="s1">&#39;tabindex&#39;</span> <span class="o">:</span> <span class="s1">&#39;0&#39;</span> <span class="p">})</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span><span class="k">else</span><span class="p">{</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span> <span class="s1">&#39;aria-selected&#39;</span><span class="o">:</span> <span class="s1">&#39;false&#39;</span><span class="p">,</span> <span class="s1">&#39;tabindex&#39;</span> <span class="o">:</span> <span class="s1">&#39;-1&#39;</span> <span class="p">})</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC352'><br/></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">slideCarousel</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">carousel</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slide</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">carousel</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slide</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">next</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$active</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.item.active&#39;</span><span class="p">)</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$next</span> <span class="o">=</span> <span class="nx">next</span> <span class="o">||</span> <span class="nx">$active</span><span class="p">[</span><span class="nx">type</span><span class="p">]()</span></div><div class='line' id='LC357'><br/></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">slideCarousel</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC359'><br/></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$active</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">one</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$active</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span><span class="s1">&#39;aria-selected&#39;</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span> <span class="s1">&#39;tabIndex&#39;</span><span class="o">:</span> <span class="s1">&#39;-1&#39;</span><span class="p">})</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$next</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span><span class="s1">&#39;aria-selected&#39;</span><span class="o">:</span><span class="kc">true</span><span class="p">,</span> <span class="s1">&#39;tabIndex&#39;</span><span class="o">:</span> <span class="s1">&#39;0&#39;</span><span class="p">})</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//.focus()</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC367'><br/></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">carousel</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">keydown</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$ul</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;div[role=listbox]&#39;</span><span class="p">)</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$items</span> <span class="o">=</span> <span class="nx">$ul</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;[role=option]&#39;</span><span class="p">)</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$parent</span> <span class="o">=</span> <span class="nx">$ul</span><span class="p">.</span><span class="nx">parent</span><span class="p">()</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">which</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">index</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">i</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="sr">/(37|38|39|40)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">k</span><span class="p">))</span> <span class="k">return</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">index</span><span class="p">(</span><span class="nx">$items</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;.active&#39;</span><span class="p">))</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">k</span> <span class="o">==</span> <span class="mi">37</span> <span class="o">||</span> <span class="nx">k</span> <span class="o">==</span> <span class="mi">38</span><span class="p">)</span> <span class="p">{</span>                           <span class="c1">//  Up</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$parent</span><span class="p">.</span><span class="nx">carousel</span><span class="p">(</span><span class="s1">&#39;prev&#39;</span><span class="p">)</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span><span class="o">--</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">index</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span><span class="mi">1</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span>  <span class="nx">$this</span><span class="p">.</span><span class="nx">prev</span><span class="p">().</span><span class="nx">focus</span><span class="p">()</span></div><div class='line' id='LC385'><br/></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">k</span> <span class="o">==</span> <span class="mi">39</span> <span class="o">||</span> <span class="nx">k</span> <span class="o">==</span> <span class="mi">40</span><span class="p">)</span> <span class="p">{</span>                          <span class="c1">// Down</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$parent</span><span class="p">.</span><span class="nx">carousel</span><span class="p">(</span><span class="s1">&#39;next&#39;</span><span class="p">)</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span><span class="o">++</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">index</span> <span class="o">==</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span>  <span class="p">{</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">one</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">next</span><span class="p">().</span><span class="nx">focus</span><span class="p">()</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC398'><br/></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">()</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;keydown.carousel.data-api&#39;</span><span class="p">,</span> <span class="s1">&#39;div[role=option]&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">carousel</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">keydown</span><span class="p">)</span></div><div class='line' id='LC403'><br/></div><div class='line' id='LC404'>&nbsp;<span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div></td>
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

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
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
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04492s from github-fe126-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-7e83b343734e1b60b9e3f241fabdf7ef833678e9.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-0f06d0f46fe7bcfbf31f2380f23aec15ba21b8ec.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

