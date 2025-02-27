export default function Home() {
    return (
        <>
            {/* <!--header--> */}
            <header id="site-header" class="fixed-top">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-dark stroke">
                        <h1><Link class="navbar-brand" to="/">
                            Web service
                        </Link></h1>
                        <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                            {/* </span> */}
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav ml-auto mr-5">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item @@about__active">
                                    <Link class="nav-link" to="/about">About</Link>
                                </li>
                                <li class="nav-item @@services__active">
                                    <Link class="nav-link" to="/services">Services</Link>
                                </li>
                                <li class="nav-item @@contact__active">
                                    <Link class="nav-link" to="/contact">Contact</Link>
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
            </header >
            {/* <!--/header--> */}
            {/* <!-- banner section --> */}
            <section id="home" class="w3l-banner py-5">
                <div class="container py-lg-5 mt-lg-5">
                    <div class="py-lg-4 my-2">
                        <div class="banner-info-grid mt-lg-5">
                            <h3 class="mb-4">Stylish Creative Designs.</h3>
                            <section id="bottom" class="demo">
                                <Link to="/#bottom"><span></span>Scroll</Link>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //banner section --> */}
            {/* <!-- /bottom-grids--> */}
            <section class="w3l-bottom-grids-6 py-5" id="bottom">
                <div class="container py-lg-5 py-md-4 py-2">
                    <div class="grids-area-hny main-cont-wthree-fea row">
                        <div class="col-lg-4 col-md-6 grids-feature">
                            <div class="area-box">
                                <span class="title-small mb-2">01. Video productions</span>
                                <h4><Link to="/#feature" class="title-head">Stunning video sequence and impressing ideas are all here.</Link></h4>
                                <p class="">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
                            <div class="area-box">
                                <span class="title-small mb-2">02. Branding Design</span>
                                <h4><Link to="/#feature" class="title-head">Great reflection of your brand be achieved by top designers.</Link></h4>
                                <p class="">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5">
                            <div class="area-box">
                                <span class="title-small mb-2">03. Graphic Design</span>
                                <h4><Link to="/#feature" class="title-head">Creating gorgeous graphic design meeting clients needs.</Link></h4>
                                <p class="">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //bottom-grids--> */}
            {/* <!--/gallery--> */}
            <section class="w3l-portfolio-8 py-5">
                <div class="portfolio-main py-lg-5 py-md-4 py-2">
                    <div class="container">
                        <div class="row galler-top">
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p1.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <Link to="/#url" class="img-title">UI experience</Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p2.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <Link to="/#url" class="img-title">Wordpress</Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p3.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <Link to="/#url" class="img-title">Ecommerce</Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p4.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <Link to="/#url" class="img-title">Headphones</Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p5.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <Link to="/#url" class="img-title">Mobile app</Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p6.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <Link to="/#url" class="img-title">Modern Ideas</Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p8.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <Link to="/#url" class="img-title">Creativity</Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p7.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <Link to="/#url" class="img-title">Fashion design</Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--//gallery--> */}
            <section class="w3l-servicesblock1 py-5" id="moreservices">
                <div class="container py-lg-5 py-md-4 py-3">
                    <div class="grids-area-hny main-cont-wthree-fea row ">
                        <div class="col-lg-4 col-md-6 grids-feature">
                            <div class="area-box">
                                <span class="fa fa-retweet mt-0"></span>
                                <div class="area-box-info">
                                    <h4><Link to="/#feature" class="title-head">Social Media Strategy</Link></h4>
                                    <p class="mt-lg-3 mt-2">Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
                            <div class="area-box">
                                <span class="fa fa-clock-o mt-0"></span>
                                <div class="area-box-info">
                                    <h4><Link to="/#feature" class="title-head">Branding Strategy</Link></h4>
                                    <p class="mt-lg-3 mt-2">Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5">
                            <div class="area-box">
                                <span class="fa fa-line-chart mt-0"></span>
                                <div class="area-box-info">
                                    <h4><Link to="/#feature" class="title-head">UI/UX Design</Link></h4>
                                    <p class="mt-lg-3 mt-2">Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                            <div class="area-box">
                                <span class="fa fa-trash-o mt-0"></span>
                                <div class="area-box-info">
                                    <h4><Link to="/#feature" class="title-head">Digital Product Strategy</Link></h4>
                                    <p class="mt-lg-3 mt-2">Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                            <div class="area-box">
                                <span class="fa fa-video-camera mt-0"></span>
                                <div class="area-box-info">
                                    <h4><Link to="/#feature" class="title-head">Web Hosting Service</Link></h4>
                                    <p class="mt-lg-3 mt-2">Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                            <div class="area-box">
                                <span class="fa fa-search-plus mt-0"></span>
                                <div class="area-box-info">
                                    <h4><Link to="/#feature" class="title-head">SEO Services</Link></h4>
                                    <p class="mt-lg-3 mt-2">Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-servicesblock py-5" id="services">
                <div class="container py-lg-5 py-md-4 py-2">
                    <div class="row">
                        <div class="col-lg-6 about-right-faq align-self">
                            <h3 class="title-big"> Importance of Skills</h3>
                            <p class="mt-lg-4 mt-3 mb-lg-5 mb-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae, ad.</p>
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
                            <div class="progress-info info4 mb-0">
                                <h6 class="progress-tittle">Adobe Photoshop <span class="">75%</span></h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 left-wthree-img mt-lg-0 mt-5">
                            <img src="assets/images/progress.jpg" alt="" class="img-fluid radius-image" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--  //News section --> */}
            {/* <!-- home page about section --> */}
            <section class="w3l-testimonials" id="testimonials">
                <div class="midd-w3 py-5">
                    <div class="container py-lg-5 py-md-3">
                        <div id="owl-demo1" class="owl-carousel owl-theme mt-4 py-2 mb-4">
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>They have responded immediately whenever we have had a question or problem and have
                                                been an amazing business partner. I Will recommend their services to
                                                many of our clients and have been thrilled with the work that they have done.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Scarlett jack</h3>
                                                <p class="identity">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>The service was excellent! I was very impressed with their work. These guys are
                                                incredibly talented, easy to work with, easy to get a hold of – true professionals.
                                                My project has been completed in time and on the highest level.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Grayson lily</h3>
                                                <p class="identity">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>They have responded immediately whenever we have had a question or problem and have
                                                been an amazing business partner. I Will recommend their services to
                                                many of our clients and have been thrilled with the work that they have done.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Scarlett jack</h3>
                                                <p class="identity">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>The service was excellent! I was very impressed with their work. These guys are
                                                incredibly talented, easy to work with, easy to get a hold of – true professionals.
                                                My project has been completed in time and on the highest level.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Grayson lily</h3>
                                                <p class="identity">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>They have responded immediately whenever we have had a question or problem and have
                                                been an amazing business partner. I Will recommend their services to
                                                many of our clients and have been thrilled with the work that they have done.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Scarlett jack</h3>
                                                <p class="identity">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>The service was excellent! I was very impressed with their work. These guys are
                                                incredibly talented, easy to work with, easy to get a hold of – true professionals.
                                                My project has been completed in time and on the highest level.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Grayson lily</h3>
                                                <p class="identity">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //home page about section --> */}.

            <div class="w3l-faq-block py-5" id="faq">
                <div class="container py-lg-5">
                    <div class="row">
                        <div class="col-lg-6 pr-lg-5">
                            <div class="accordion">
                                <div class="accordion-item">
                                    <button id="accordion-button-1" aria-expanded="true"><span class="accordion-title">How much does
                                        a static website cost?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut tortor.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button id="accordion-button-2" aria-expanded="false"><span class="accordion-title">How to
                                        choose a best web template?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut pretium.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">How to download a template?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut tortor.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button id="accordion-button-4" aria-expanded="false"><span class="accordion-title">Why should i choose a free website?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut potenti.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-lg-0 mt-sm-5 mt-4">
                            <img src="assets/images/faq.jpg" alt="" class="img-fluid radius-image" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- home page newsletter --> */}
            <section class="w3l-bottom py-5" id="newsletter">
                <div class="container py-md-5 py-md-4 text-center">
                    <div class="row">
                        <div class="col-lg-9 col-md-10 mx-auto">
                            <div class="subscribe mx-auto">
                                <div class="header-section text-center mx-auto">
                                    <h3 class="title-big">Subscribe Newsletter </h3>
                                    <p class="mt-2"> Enter your email & receive the latest news, updates & special offers from us.</p>
                                </div>
                                <form action="#" method="post" class="subscribe-wthree pt-2 mt-md-5 mt-3">
                                    <div class="d-md-flex flex-wrap subscribe-wthree-field">
                                        <input class="form-control" type="email" placeholder="Enter your email..." name="email" required="" />
                                        <button class="btn btn-style btn-primary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //home page newsletter --> */}
            {/* <!-- footer --> */}
            <section class="w3l-footer-29-main">
                <div class="footer-29 py-5">
                    <div class="container py-lg-4">
                        <div class="row footer-top-29">
                            <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                                <div class="footer-logo mb-4">
                                    <Link class="navbar-brand" to="/">
                                        Web service</Link>
                                </div>
                                <p>We are real pros at digital and web design. We work for our clients to provide them with the best service
                                    and products. We value every project as we get invaluable experience.</p>
                                <div class="main-social-footer-29 mt-4">
                                    <Link to="/#facebook" class="facebook"><span class="fa fa-facebook"></span></Link>
                                    <Link to="/#twitter" class="twitter"><span class="fa fa-twitter"></span></Link>
                                    <Link to="/#instagram" class="instagram"><span class="fa fa-instagram"></span></Link>
                                    <Link to="/#linkedin" class="linkedin"><span class="fa fa-linkedin"></span></Link>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">

                                <ul>
                                    <h6 class="footer-title-29">Useful Links</h6>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/#blog"> Blog posts</Link></li>
                                    <li><Link to="/#pricing"> Pricing plans</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/contact">Contact us</Link></li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                                <h6 class="footer-title-29">Resources</h6>
                                <ul>
                                    <li><Link to="/#traning">Training</Link></li>
                                    <li><Link to="/#marketplace">Marketplace</Link></li>
                                    <li><Link to="/#experts">Our Experts</Link></li>
                                    <li><Link to="/#platform">Platform</Link></li>
                                    <li><Link to="/#customers"> Customers</Link></li>
                                </ul>

                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                                <h6 class="footer-title-29">Instagram posts</h6>
                                <div class="post1">
                                    <Link to="/#url" class="post-title">Practice Safe Design. Always Use...</Link>
                                    <p>We work for our clients to provide them with the best service</p>
                                </div>
                                <div class="post1 mt-4">
                                    <Link to="/#url" class="post-title">How to Start when You... </Link>
                                    <p>We work for our clients to provide them with the best service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- copyright --> */}
                <section class="w3l-copyright text-center">
                    <div class="container">
                        <p class="copy-footer-29">© 2020 Web Service. All rights reserved. Design by <Link to="/https://w3layouts.com/"
                            target="_blank">
                            W3layouts</Link></p>
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
                    {/* //   <!-- /move top --> */}
                </section>
                {/* // <!-- //copyright --> */}
            </section>
            {/* //   <!-- //footer --> */}
        </>
    );
}