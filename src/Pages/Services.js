export default function Services() {
    return (
        <>
            {/* <!--header--> */}
            <header id="site-header" class="fixed-top">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-dark stroke">
                        <h1><a class="navbar-brand" href="index.html">
                            Web service
                        </a></h1>
                        {/* <!-- if logo is image enable this    */}
                        {/* <a class="navbar-brand" href="#index.html">
    <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
</a> --> */}
                        <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                            {/* </span> */}
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav ml-auto mr-5">
                                <li class="nav-item @@home__active">
                                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item @@about__active">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="services.html">Services</a>
                                </li>
                                <li class="nav-item @@contact__active">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                                <nav class="ml-lg-3">
                                    <div class="search-bar">
                                        <form action="#" method="GET" class="search">
                                            <input type="search" class="search__input" name="search"
                                                placeholder="Search here.." onload="equalWidth()" required />
                                            <span class="fa fa-search search__icon"></span>
                                        </form>
                                    </div>
                                </nav>
                            </ul>
                        </div>
                        {/* <!-- toggle switch for light and dark theme --> */}

                        <div class="mobile-position">
                            <nav class="navigation">
                                <div class="theme-switch-wrapper">
                                    <label class="theme-switch" for="checkbox">
                                        <input type="checkbox" id="checkbox" />
                                        <div class="mode-container py-1">
                                            <i class="gg-sun"></i>
                                            <i class="gg-moon"></i>
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                        {/* <!-- //toggle switch for light and dark theme --> */}
                    </nav>
                </div>
            </header>
            {/* <!--/header--> */}
            {/* <!-- services breadcrumb --> */}
            <section class="w3l-about-breadcrumb">
                <div class="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
                    <div class="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
                        <h2 class="title">Our Services</h2>
                        <ul class="breadcrumbs-custom-path mt-2">
                            <li><a href="index.html">Home</a></li>
                            <li class="mx-2">/ </li>
                            <li class="active"> Services </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- //services breadcrumb --> */}
            <section class="w3l-servicesblock w3l-servicesblock1 py-5" id="services">
                <div class="container py-lg-5 py-md-4 py-2">
                    <h3 class="title-big text-center mb-5"> What you will have</h3>
                    <div class="row">
                        <div class="col-lg-6 align-self pr-lg-4">
                            <div class="progress-info info1">
                                <h6 class="progress-tittle">Figma illustrations <span class="">80%</span></h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "80%" }}
                                        aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="progress-info info2">
                                <h6 class="progress-tittle">PHP programming <span class="">95%</span>
                                </h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "95%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="progress-info info3">
                                <h6 class="progress-tittle">Web design & development <span class="">90%</span></h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "90%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="progress-info info4">
                                <h6 class="progress-tittle">Adobe Photoshop <span class="">75%</span></h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="progress-info info2 mb-0">
                                <h6 class="progress-tittle">Wordpress design <span class="">95%</span></h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "95%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-lg-0 mt-5 pl-lg-4">
                            <h3 class="title-left"> Our Skills - We are qualified and of experienced with a lot of skills</h3>
                            <p class="mt-md-4 mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at. Lorem ipsum dolor sit amet
                                elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init
                                dolor sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.</p>
                            <p class="mt-3">Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at. Lorem init ipsum dolor sit amet elit. Dolor ipsum non velit,
                                culpa! Pellen tesque libero ut justo, ultrices in ligula amet dolor sit.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--  services section --> */}
            <div class="w3l-servicesblock2" id="why">
                <section id="grids5-block" class="py-5">
                    <div class="container py-lg-5 py-md-4 py-2">
                        <h3 class="title-big text-center">Why Choose us</h3>
                        <div class="row mt-lg-5 mt-4">
                            <div class="col-lg-4 col-md-6">
                                <div class="grids5-info">
                                    <a href="#service" class="d-block zoom"><img src="assets/images/service1.jpg" alt=""
                                        class="img-fluid service-image" /></a>
                                    <div class="blog-info">
                                        <h4><a href="#service">We believe in Quality</a></h4>
                                        <p class="mt-sm-3 mt-2">Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                                <div class="grids5-info">
                                    <a href="#service" class="d-block zoom"><img src="assets/images/service2.jpg" alt=""
                                        class="img-fluid service-image" /></a>
                                    <div class="blog-info">
                                        <h4><a href="#service">We stand for uniqueness</a></h4>
                                        <p class="mt-sm-3 mt-2">Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                                <div class="grids5-info">
                                    <a href="#service" class="d-block zoom"><img src="assets/images/service3.jpg" alt=""
                                        class="img-fluid service-image" /></a>
                                    <div class="blog-info">
                                        <h4><a href="#service">We respect Deadlines</a></h4>
                                        <p class="mt-sm-3 mt-2">Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!--  //services section --> */}
            <section class="w3l-servicesblock1 py-5" id="moreservices">
                <div class="container py-lg-5 py-md-4 py-2">
                    <h3 class="title-big text-center">Hand-Crafted services</h3>
                    <div class="grids-area-hny main-cont-wthree-fea row mt-lg-5 mt-4 pb-lg-0 pb-2">
                        <div class="col-lg-4 col-md-6 grids-feature">
                            <div class="area-box">
                                <span class="fa fa-retweet mt-0"></span>
                                <div class="area-box-info">
                                    <h4><a href="#feature" class="title-head">Social Media Strategy</a></h4>
                                    <p class="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
                            <div class="area-box">
                                <span class="fa fa-clock-o mt-0"></span>
                                <div class="area-box-info">
                                    <h4><a href="#feature" class="title-head">Branding Strategy</a></h4>
                                    <p class="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5">
                            <div class="area-box">
                                <span class="fa fa-line-chart mt-0"></span>
                                <div class="area-box-info">
                                    <h4><a href="#feature" class="title-head">UI/UX Design</a></h4>
                                    <p class="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                            <div class="area-box">
                                <span class="fa fa-trash-o mt-0"></span>
                                <div class="area-box-info">
                                    <h4><a href="#feature" class="title-head">Digital Product Strategy</a></h4>
                                    <p class="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                            <div class="area-box">
                                <span class="fa fa-video-camera mt-0"></span>
                                <div class="area-box-info">
                                    <h4><a href="#feature" class="title-head">Web Hosting Service</a></h4>
                                    <p class="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                            <div class="area-box">
                                <span class="fa fa-search-plus mt-0"></span>
                                <div class="area-box-info">
                                    <h4><a href="#feature" class="title-head">SEO Services</a></h4>
                                    <p class="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- footer --> */}
            <section class="w3l-footer-29-main">
                <div class="footer-29 py-5">
                    <div class="container py-lg-4">
                        <div class="row footer-top-29">
                            <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                                <div class="footer-logo mb-4">
                                    <a class="navbar-brand" href="index.html">
                                        Web service</a>
                                </div>
                                <p>We are real pros at digital and web design. We work for our clients to provide them with the best service
                                    and products. We value every project as we get invaluable experience.</p>
                                <div class="main-social-footer-29 mt-4">
                                    <a href="#facebook" class="facebook"><span class="fa fa-facebook"></span></a>
                                    <a href="#twitter" class="twitter"><span class="fa fa-twitter"></span></a>
                                    <a href="#instagram" class="instagram"><span class="fa fa-instagram"></span></a>
                                    <a href="#linkedin" class="linkedin"><span class="fa fa-linkedin"></span></a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">

                                <ul>
                                    <h6 class="footer-title-29">Useful Links</h6>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#blog"> Blog posts</a></li>
                                    <li><a href="#pricing"> Pricing plans</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                                <h6 class="footer-title-29">Resources</h6>
                                <ul>
                                    <li><a href="#traning">Training</a></li>
                                    <li><a href="#marketplace">Marketplace</a></li>
                                    <li><a href="#experts">Our Experts</a></li>
                                    <li><a href="#platform">Platform</a></li>
                                    <li><a href="#customers"> Customers</a></li>
                                </ul>

                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                                <h6 class="footer-title-29">Instagram posts</h6>
                                <div class="post1">
                                    <a href="#url" class="post-title">Practice Safe Design. Always Use...</a>
                                    <p>We work for our clients to provide them with the best service</p>
                                </div>
                                <div class="post1 mt-4">
                                    <a href="#url" class="post-title">How to Start when You... </a>
                                    <p>We work for our clients to provide them with the best service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- copyright --> */}
                <section class="w3l-copyright text-center">
                    <div class="container">
                        <p class="copy-footer-29">© 2020 Web Service. All rights reserved. Design by <a href="https://w3layouts.com/"
                            target="_blank">
                            W3layouts</a></p>
                    </div>

                    {/* <!-- move top --> */}
                    <button onclick="topFunction()" id="movetop" title="Go to top">
                        &#10548;
                    </button>
                    {/* <script>
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
          scrollFunction()
        };

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("movetop").style.display = "block";
          } else {
            document.getElementById("movetop").style.display = "none";
          }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
      </script> */}
                    {/* <!-- /move top --> */}
                </section>
                {/* <!-- //copyright --> */}
            </section>
            {/* <!-- //footer --> */}
        </>
    );
}