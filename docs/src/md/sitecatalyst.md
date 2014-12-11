## SiteCatalyst

### Configuration

<pre>
<code class="language-markup">
&lt;a class="omnitrack" data-omnilocation="header" data-omnilink="subscribe" data-omnievent="event4" href="#">Example Link&lt;/a>
</code>
</pre>

| Parameter           | Sample Value   | Description |
| ------------------- | -------------- | ----------- |
| `data-omnilocation` | `="header"`    | This parameter refers to the location on the page where the link resides. For instance, if the link that you’re setting up to track is in the footer navigation, you might add something like “footer-navigation" as the value here. This value can only contain letters, numbers, dashes, and underscores. |
| `data-omnilink`     | `="subscribe"` | This parameter refers to the custom name of the link that you assign. For instance, if there is a special “free subscription" link that you would like to track, the value would be something like “Free_Subscription_Deal" for this parameter. This value can only contain letters, numbers, dashes, and underscores. |
| `data-omnievent`    | `="event4"`    | This parameter is used to attach a pre-defined event (from Omniture) to the link. For example, if you wanted the link to record a “New Subscription Click" event when clicked, the value would be “event4". This parameter is optional. |

### Events

- event4 (new subscription click)
- event15 (search result click)
- event22 (print)
- event23 (email)
- event24 (comment)

## MH's tagging

### Breadcrumbs

<pre>
<code class="language-markup">
&lt;ul class="breadcrumbs">
    &lt;li>a class="omnitrack" data-omnilocation="breadcrumbs" data-omnilink="breadcrumbs-home" href="/">Home&lt;/a>&nbsp;&lt;/li>
    &lt;li>&nbsp;&lt;a class="omnitrack" data-omnilocation="breadcrumbs" data-omnilink="breadcrumbs-primary" href="#">Primary&lt;/a>&nbsp;&lt;/li>
    &lt;li>&nbsp;&lt;a class="omnitrack" data-omnilocation="breadcrumbs" data-omnilink="breadcrumbs-secondary" href="#">Secondary&lt;/a>&nbsp;&lt;/li>
    &lt;li>&nbsp;&lt;a class="omnitrack" data-omnilocation="breadcrumbs" data-omnilink="breadcrumbs-tertiary" href="#">Tertiary&lt;/a>&lt;/li>
&lt;/ul>
</code>
</pre>

### Share Buttons

<pre>
<code class="language-markup">
&lt;!-- toggle related/share on touch -->
&lt;div class="pure-g more-buttons">
  &lt;div class="pure-u-1-2">
    &lt;div class="more-buttons-inner">
      &lt;a class="pure-button omnitrack" data-omnilocation="article" data-omnilink="article-toggle-related" data-js="related" href="#">Related&lt;/a>
    &lt;/div>
  &lt;/div>
  &lt;div class="pure-u-1-2">
    &lt;div class="more-buttons-inner">
      &lt;a class="pure-button omnitrack" data-omnilocation="article" data-omnilink="article-toggle-share" data-js="share" href="#">Share &lt;span class="icon-share">&lt;/span>&lt;/a>
    &lt;/div>
  &lt;/div>
&lt;/div>
&lt;!-- share buttons -->
&lt;ul class="tiny-share">
    &lt;li class="twitter">&lt;a class="omnitrack" data-omnilocation="article-social" data-omnilink="article-social-twitter" href="#" target="_blank" title="Share on Twitter">Twitter&lt;/a>&lt;/li>
    &lt;li class="facebook">&lt;a class="omnitrack" data-omnilocation="article-social" data-omnilink="article-social-facebook" href="#" target="_blank" title="Share on Facebook">Facebook&lt;/a>&lt;/li>
    &lt;li class="linkedin">&lt;a class="omnitrack" data-omnilocation="article-social" data-omnilink="article-social-linkedin" href="#" target="_blank" title="Share on LinkedIn">Linkedin&lt;/a>&lt;/li>
    &lt;li class="google-plus">&lt;a class="omnitrack" data-omnilocation="article-social" data-omnilink="article-social-googleplus" href="#" target="_blank" title="Share on Google +">Google Plus&lt;/a>&lt;/li>
    &lt;li class="reprints">&lt;a class="omnitrack" data-omnilocation="article-social" data-omnilink="article-social-reprints" href="#" title="Buy Reprints">Buy Reprints&lt;/a>&lt;/li>
   &lt;li class="print">&lt;a class="omnitrack" data-omnilocation="article-social" data-omnilink="article-social-print" href="#" title="Print Article">Print Article&lt;/a>&lt;/li>
    &lt;li class="email">&lt;a class="omnitrack" data-omnilocation="article-social" data-omnilink="article-social-email" href="#" title="Email this page to a colleague">Email this page to a colleague&lt;/a>&lt;/li>
    &lt;li class="comment last">&lt;a class="omnitrack" data-omnilocation="article-social" data-omnilink="article-social-comments" href="#" title="Comment">Comment&lt;/a>&lt;/li>
 </ul>
</code>
</pre>

### Article ExtLogin

<pre>
<code class="language-markup">
&lt;div class="art-metered">
  &lt;div class="art-metered-header">
    &lt;div class="pure-g">
      &lt;div class="pure-u-2-5">
        &lt;h2 class="art-metered-login omnitrack" data-omnilocation="extlogin" data-omnilink="extlogin-login-bttn">Login&lt;/h2>
      &lt;/div>
      &lt;div class="pure-u-lg-1-5">
        &lt;h2 class="art-metered-or">Or&lt;/h2>
      &lt;/div>
      &lt;div class="pure-u-2-5">
        &lt;h2 class="art-metered-register omnitrack" data-omnilocation="extlogin" data-omnilink="extlogin-register-bttn">Register&lt;br>for Free&lt;/h2>
      &lt;/div>
    &lt;/div>
  &lt;/div>
  &lt;div class="pure-g">
    &lt;div class="pure-u-1 pure-u-lg-1-2">
      &lt;div class="art-metered-inner login">
        &lt;header class="art-metered-inner-header">
          &lt;h2>Login&lt;/h2>
        &lt;/header>
        &lt;form class="pure-form pure-form-stacked" action="'+CCI.AccessControl.authURL+'">
          &lt;input class="pure-input-1 omnitrack" data-omnilocation="extlogin" data-omnilink="extlogin-username-input" id="username" name="userLogin.userName" type="text" placeholder="Username">
          &lt;input class="pure-input-1 omnitrack" data-omnilocation="extlogin" data-omnilink="extlogin-password-input" id="password" name="userLogin.password" type="password" placeholder="Password">
          &lt;input name="CSTargetURL" value="'+CCI.AccessControl.targetURL+'" type="hidden">
          &lt;label class="pure-checkbox omnitrack" data-omnilocation="extlogin" data-omnilink="extlogin-remember-checkbox" for="remember">
            &lt;input id="remember" type="checkbox" value="">
            Remember me
          &lt;/label>
          &lt;button class="pure-button pure-button-primary omnitrack" data-omnilocation="extlogin" data-omnilink="extlogin-signup-bttn" type="submit">Sign in&lt;/button>
        &lt;/form>
        &lt;a class="art-metered-reset omnitrack" data-omnilocation="extlogin" data-omnilink="extlogin-reset" href="'+CCI.AccessControl.baseURL+'/resetPassword.do">Reset password&lt;/a>
      &lt;/div>
    &lt;/div>
    &lt;div class="pure-u-1 mobile">
      &lt;h2 class="art-metered-or">Or&lt;/h2>
    &lt;/div>
    &lt;div class="pure-u-1 pure-u-lg-1-2">
      &lt;div class="art-metered-inner register">
        &lt;header class="art-metered-inner-header">
          &lt;div class="art-metered-or-inner">
            &lt;h2>Register for Free&lt;/h2>
          &lt;/div>
        &lt;/header>
        &lt;h3>What do I get if I register?&lt;/h3>
        &lt;ul class="bullet-list">
          &lt;li>Access to 12 free articles every 30 days&lt;/li>
          &lt;li>Ability to customize the news you need in your in-box&lt;/li>
        &lt;/ul>
        &lt;a omnitrack" data-omnilocation="extlogin" data-omnilink="extlogin-already-member" href="'+CCI.AccessControl.authForceLoginURL+'">Already a Member?&lt;/a>
        &lt;a class="pure-button pure-button-primary omnitrack" data-omnilocation="extlogin" data-omnilink="extlogin-register-bttn href="'+CCI.AccessControl.regURL+'">Register&lt;/a>
      &lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/div>
</code>
</pre>

### Hero

<pre>
<code class="language-markup">
&lt;figure class="hero-fig">
  &lt;a class="hero-img omnitrack" data-omnilocation="frontpage-hero" data-omnilink="frontpage-hero-img-link" href="#">&lt;img class="pure-img" src="/images/thumbnail.jpg" alt="Bacon ipsum dolor amet shank">&lt;/a>
  &lt;figcaption class="hero-figcaption">
    &lt;h1>&lt;a class="omnitrack" data-omnilocation="frontpage-hero" data-omnilink="frontpage-hero-title-link" href="#">Bacon ipsum dolor amet shank&lt;/a>&lt;/h1>
    &lt;strong class="hero-byline">By Author&lt;/strong>
    &lt;p>Bacon ipsum dolor amet shank picanha landjaeger brisket corned beef bacon. Spare ribs t-bone shoulder pig tenderloin cupim porchetta fatback frankfurter ribeye pork bacon cow capicola.>&lt;/p>
  &lt;/figcaption>
&lt;/figure>
</code>
</pre>

### Top Story

<pre>
<code class="language-markup">
&lt;article class="top-story-hero">
  &lt;h4>&lt;a class="slug omnitrack" data-omnilocation="top-story" data-omnilink="top-story-slug" href="#">Category&lt;/a>&lt;/h4>
  &lt;h1>&lt;a class="omnitrack" data-omnilocation="top-story" data-omnilink="top-story-title-link" href="#">Bacon ipsum dolor amet shank&lt;/a>&lt;/h1>
  &lt;div class="meta">By Author | November 17, 2014&lt;/div>
  &lt;a class="omnitrack" data-omnilocation="top-story" data-omnilink="top-story-img-link" href="#">&lt;img src="/images/thumbnail.jpg">&lt;/a>
  &lt;p>Bacon ipsum dolor amet shank picanha landjaeger brisket corned beef bacon. Spare ribs t-bone shoulder pig tenderloin cupim porchetta fatback frankfurter ribeye pork bacon cow capicola.&lt;/p>
&lt;/article>
</code>
</pre>

### News Item (section page)

<pre>
<code class="language-markup">
&lt;article class="news-item">
    &lt;h4>&lt;a class="slug omnitrack" data-omnilocation="news-item" data-omnilink="news-item-slug" href="#">Category&lt;/a>&lt;/h4>
    &lt;h3>&lt;a class="omnitrack" data-omnilocation="news-item" data-omnilink="news-item-title-link" href="#">Bacon ipsum dolor amet shank&lt;/a>&lt;/h3>
    &lt;a class="omnitrack" data-omnilocation="news-item" data-omnilink="news-item-img-link" href="#">&lt;img src="/images/thumbnail.jpg">&lt;/a>
    &lt;p>>Bacon ipsum dolor amet shank picanha landjaeger brisket corned beef bacon. Spare ribs t-bone shoulder pig tenderloin cupim porchetta fatback frankfurter ribeye pork bacon cow capicola.&lt;/p>
&lt;/article>
</code>
</pre>

### TagID

<pre>
<code class="language-markup">
&lt;article class="news-item tagID">
    &lt;a class="omnitrack" data-omnilocation="tagID" data-omnilink="tagID-img-link" href="#">&lt;img src="/images/thumbnail.jpg">&lt;/a>
  &lt;h2>&lt;a class="omnitrack" data-omnilocation="tagID" data-omnilink="tagID-title-link" href="#">Bacon ipsum dolor amet shank&lt;/a>&lt;/h2>
  &lt;div class="meta">By Author | November 12, 2014&lt;/div>
  &lt;p>Bacon ipsum dolor amet shank picanha landjaeger brisket corned beef bacon. Spare ribs t-bone shoulder pig tenderloin cupim porchetta fatback frankfurter ribeye pork bacon cow capicola.&lt;/p>
&lt;/article>
</code>
</pre>

### Touch Menu

#### Toggle

<pre>
<code class="language-markup">
&lt;header class="touch-menu">
  &lt;div class="pure-g">
    &lt;div class="pure-u-1 touch-menu-header">
      &lt;h1 class="logo">&lt;a class="omnitrack" data-omnilocation="touch-menu" data-omnilink="touch-logo" href="/">Modern Healthcare&lt;/a>&lt;/h1>
      &lt;a class="menu-bttn omnitrack" data-omnilocation="touch-menu" data-omnilink="toggle-open" href="#">
        &lt;span class="menu-text">Menu&lt;/span>
        &lt;span class="menu-icon">
          &lt;span class="menu-icon-bar">&lt;/span>
          &lt;span class="menu-icon-bar">&lt;/span>
          &lt;span class="menu-icon-bar">&lt;/span>
        &lt;/span>
      &lt;/a>
    &lt;/div>
</code>
</pre>

#### Search

<pre>
<code class="language-markup">
    &lt;div class="clearfix">&lt;/div>
    &lt;div class="menu-items">
      &lt;div class="pure-g">
        &lt;div class="search-touch">
          &lt;form class="pure-form pure-g auto">
              &lt;div class="pure-u-5-8">
                &lt;input class="pure-input-1 st-search-input" type="text" value="" placeholder="Search Modern Healthcare">
              &lt;/div>
              &lt;div class="pure-u-1-4">
                &lt;button class="pure-button st-search-input omnitrack" data-omnilocation="touch-menu" data-omnilink="search-bttn" type="submit">&lt;span class="icon-search">&lt;/span>&lt;/button>
              &lt;/div>
              &lt;div class="pure-u-1-8">
                &lt;a class="omnitrack" data-omnilocation="touch-menu" data-omnilink="my-account" href="https://home.modernhealthcare.com/clickshare/myhome.do">&lt;span class="icon-cog">&lt;/span>&lt;/a>
              &lt;/div>
            &lt;/form>
         &lt;/div>
</code>
</pre>

#### Items

<pre>
<code class="language-markup">
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="providers" href="/section/providers">&lt;span>Providers&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="insurance" href="/section/insurance">&lt;span>Insurance&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="government" href="/section/government">&lt;span>Government&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="finance" href="/section/finance">&lt;span>Finance&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="technology" href="/section/technology">&lt;span>Technology&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="safety &amp; quality" href="/section/safety-and-quality">&lt;span>Safety &amp; Quality&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="people" href="/section/people">&lt;span>People&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="opinion-editorial" href="/section/opinion-and-editorial">&lt;span>Opinion &amp; Editorial&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="research" href="/section/data-center ">&lt;span>Research&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="interactive-data-products" href="/section/interactive-data-products">&lt;span>Interactive Data Products&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="education-events" href="/section/education-and-events">&lt;span>Education &amp; Events&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="awards-recognition" href="/section/awards-and-recognition">&lt;span>Awards &amp; Recognition&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="jobs" href="/jobs">&lt;span>Jobs&lt;/span>&lt;/a>&lt;/div>
        &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="subscribe" href="/section/subscriptions">&lt;span>Subscribe&lt;/span>&lt;/a>&lt;/div>
         &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="advertise" href="/section/advertising">&lt;span>Advertise&lt;/span>&lt;/a>&lt;/div>
         &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="about-us" href="/section/about-us">&lt;span>About Us&lt;/span>&lt;/a>&lt;/div>
         &lt;div class="pure-u-1 pure-u-sm-1-2">&lt;a class="menu-item omnitrack" data-omnilocation="touch-menu" data-omnilink="contact-us" href="/staff/customer-service">&lt;span>Contact Us&lt;/span>&lt;/a>&lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/header>

&lt;script>
    // touch nav
    var menuBttn = $('.menu-bttn'),
        menuItems = $('.menu-items');
    
    menuItems.hide();
    menuBttn.bind('tap', function(e) {
      menuItems.slideToggle(200);
      menuItems.toggleClass('open');
      $('.content').toggleClass('open');
      if (menuItems.hasClass('open')) {
        menuBttn.attr('data-omnilink', 'toggle-close');
      } else {
        menuBttn.attr('data-omnilink', 'toggle-open');
      }
      e.preventDefault();
    });
&lt;/script>
</code>
</pre>

### Main Nav

<pre>
<code class="language-markup">
&lt;div class="search-toggle">
  &lt;div class="container">
    &lt;form class="pure-form pure-g auto">
        &lt;div class="pure-u-11-12">
          &lt;input class="pure-input-1 st-search-input" type="text" value="" placeholder="Search Modern Healthcare">
        &lt;/div>
        &lt;div class="pure-u-1-12">
          &lt;button class="pure-button st-search-input omnitrack" data-omnilocation="sticky-nav" data-omnilink="search-bttn" type="submit">&lt;span class="icon-search">&lt;/span>&lt;/button>
        &lt;/div>
      &lt;/form>
  &lt;/div>
&lt;/div>
&lt;nav class="main-nav">
  &lt;div class="container">
    &lt;div class="pure-g">
      &lt;div class="pure-u-1">
        &lt;div class="pure-menu pure-menu-open pure-menu-horizontal">
          &lt;a class="sticky-logo omnitrack" data-omnilocation="sticky-nav" data-omnilink="sticky-logo" href="/">Modern Healthcare&lt;/a>
          &lt;ul class="flex">
            &lt;li>&lt;a class="omnitrack" data-omnilocation="main-nav" data-omnilink="providers" href="/section/providers">&lt;span>Providers&lt;/span>&lt;/a>&lt;/li>
            &lt;li>&lt;a class="omnitrack" data-omnilocation="main-nav" data-omnilink="insurance" href="/section/insurance">&lt;span>Insurance&lt;/span>&lt;/a>&lt;/li>
            &lt;li>&lt;a class="omnitrack" data-omnilocation="main-nav" data-omnilink="government" href="/section/government">&lt;span>Government&lt;/span>&lt;/a>&lt;/li>
            &lt;li>&lt;a class="omnitrack" data-omnilocation="main-nav" data-omnilink="finance" href="/section/finance">&lt;span>Finance&lt;/span>&lt;/a>&lt;/li>
            &lt;li>&lt;a class="omnitrack" data-omnilocation="main-nav" data-omnilink="technology" href="/section/technology">&lt;span>Technology&lt;/span>&lt;/a>&lt;/li>
            &lt;li>&lt;a class="omnitrack" data-omnilocation="main-nav" data-omnilink="safety-quality" href="/section/safety-and-quality">&lt;span>Safety &amp; Quality&lt;/span>&lt;/a>&lt;/li>
            &lt;li>&lt;a class="omnitrack" data-omnilocation="main-nav" data-omnilink="people" href="/section/people">&lt;span>People&lt;/span>&lt;/a>&lt;/li>
          &lt;/ul>
          &lt;ul class="fixed-bttns">
            &lt;li class="search">&lt;a class="omnitrack" data-omnilocation="sticky-nav" data-omnilink="search-open" href="#">&lt;span class="icon-search">&lt;/span>&lt;/a>&lt;/li>
            &lt;li class="my-account last">&lt;a class="omnitrack" data-omnilocation="sticky-nav" data-omnilink="my-account" href="https://home.modernhealthcare.com/clickshare/myhome.do">&lt;span class="icon-cog">&lt;/span>&lt;/a>&lt;/li>
          &lt;/ul>
        &lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/nav>

&lt;script>
  // search toggle
  $('.fixed-bttns .search a').bind('tap', function(e) {
    $('.search-toggle').slideToggle(120);
    $(this).toggleClass('open');
    if($(this).hasClass('open')) {
      $(this).attr('data-omnilink', 'search-close');
    } else {
      $(this).attr('data-omnilink', 'search-open');
    }
    e.preventDefault();
  });
&lt;/script>
</code>
</pre>

### Global Nav

<pre>
<code class="language-markup">
&lt;ul class="global-nav">
  &lt;li>&lt;a class="omnitrack" data-omnilocation="global-nav" data-omnilink="opinions-editorial" href="/section/opinion-and-editorial">&lt;span>Opinion &amp; Editorial&lt;/span>&lt;/a>&lt;/li>
  &lt;li>&lt;a class="omnitrack" data-omnilocation="global-nav" data-omnilink="research" href="/section/data-center ">&lt;span>Research&lt;/span>&lt;/a>&lt;/li>
  &lt;li>&lt;a class="omnitrack" data-omnilocation="global-nav" data-omnilink="interactive-data-products" href="/section/interactive-data-products">&lt;span>Interactive Data Products&lt;/span>&lt;/a>&lt;/li>
  &lt;li>&lt;a class="omnitrack" data-omnilocation="global-nav" data-omnilink="education-events" href="/section/education-and-events">&lt;span>Education &amp; Events&lt;/span>&lt;/a>&lt;/li>
  &lt;li>&lt;a class="omnitrack" data-omnilocation="global-nav" data-omnilink="awards-recognition" href="/section/awards-and-recognition">&lt;span>Awards &amp; Recognition&lt;/span>&lt;/a>&lt;/li>
  &lt;li>&lt;a class="omnitrack" data-omnilocation="global-nav" data-omnilink="jobs" href="/jobs">&lt;span>Jobs&lt;/span>&lt;/a>&lt;/li>
&lt;/ul>
</code>
</pre>

### Sub Nav

<pre>
<code class="language-javascript">
<script>
  var showHide = $('.show-hide'),
      showHideChild = $('.sub-nav-child .show-hide-child'),
      subNavChild = $('.sub-nav-child'),
      subNav = $('.sub-nav'),
      subMenu = $('.sub-nav-child .sub-menu'),
      subNavLink = $('.sub-nav h1 a').not('.show-hide'),
      subNavTitle = subNavLink.text().replace(/\s+/g, '-').toLowerCase();


  subNavLink.addClass('omnitrack').attr('data-omnilocation', 'subnav').attr('data-omnilink', 'subnav-' + subNavTitle);

  if( $(window).width() < 768 ) {
    subNavChild.hide();
    subMenu.hide();
    showHideChild.attr('data-omnilink', 'subnav-child-open');
    showHide.attr('data-omnilink', 'subnav-parent-open').find('span').removeClass('icon-minus3').addClass('icon-plus3');
  } else {
    subMenu.hide();
    showHideChild.attr('data-omnilink', 'subnav-child-open');
    showHide.attr('data-omnilink', 'subnav-parent-close').find('span').removeClass('icon-plus3').addClass('icon-minus3');
  }

  var parentSubNav = (function() {
    //showHide.addClass('omnitrack').attr('data-omnilocation', 'subnav');
    showHide.bind('tap', function(e) {
      if( $(this).find('span').hasClass('icon-plus3') ) {
        $(this).attr('data-omnilink', 'subnav-parent-close');
        $(this).find('span').removeClass('icon-plus3');
        $(this).find('span').addClass('icon-minus3');
      } else {
        $(this).attr('data-omnilink', 'subnav-parent-open');
        $(this).find('span').removeClass('icon-minus3');
        $(this).find('span').addClass('icon-plus3');
      }
      subNavChild.slideToggle(180);
      e.preventDefault();
    });
  });

  var childSubNav = (function() {
    showHideChild.each(function() {
      //$(this).addClass('omnitrack').attr('data-omnilocation', 'subnav');
      $(this).bind('tap', function(e) {
        if( $(this).find('span').hasClass('icon-plus3') ) {
          $(this).attr('data-omnilink', 'subnav-child-close');
          $(this).find('span').removeClass('icon-plus3');
          $(this).find('span').addClass('icon-minus3');
        } else {
          $(this).attr('data-omnilink', 'subnav-child-open');
          $(this).find('span').removeClass('icon-minus3');
          $(this).find('span').addClass('icon-plus3');
        }
        $(this).next().slideToggle(180);
        e.preventDefault();
        //e.preventDefault();
      });
    });
  });

  parentSubNav();
  childSubNav();
</script>
</code>
</pre>

### Subscriptions

<pre>
<code class="language-markup">
&lt;!-- default 'Continue →' button state -->
&lt;a class="pure-button pure-button-primary omnitrack" data-omnilocation="subscriptions" data-omnilink="subscription-premium-digital" id="sub-cont" href="https://sec.crain.com/MH/QuickOrder.aspx?PromotionCode=W4MHPN1">Continue &lt;span class="icon-arrow-right4">&lt;/span>&lt;/a>
&lt;!-- script to track selected subscription option -->
&lt;script>
  $('input[name="subscription"]').change(function(){
    var checkedVal = $('input[name="subscription"]:checked').val(),
         checkedID = $('input[name="subscription"]:checked').attr('id');
    console.log(checkedVal);
    console.log('subscription-' + checkedID);
    if(checkedVal !== 'https://home.modernhealthcare.com/clickshare/addAccountFree.do') {
      $('#sub-cont').attr('href', 'https://sec.crain.com/MH/QuickOrder.aspx?PromotionCode=' + checkedVal).attr('data-omnilink', 'subscription-' + checkedID);
    } else {
      $('#sub-cont').attr('href', 'https://home.modernhealthcare.com/clickshare/addAccountFree.do').attr('data-omnilink', 'subscription-website-registration-and-newsletters');
    }
    
  });
&lt;/script>
</code>
</pre>