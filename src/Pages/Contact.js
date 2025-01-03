export default function Contact() {
    return (
        <>
            {/* <!--header--> */}
            <header id="site-header" class="fixed-top">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-dark stroke">
                        <h1><a class="navbar-brand" href="index.html">
                            Web service
                        </a></h1>
                        {/* <!-- if logo is image enable this */}
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
                                <li class="nav-item @@services__active">
                                    <a class="nav-link" href="services.html">Services</a>
                                </li>
                                <li class="nav-item active">
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
            </header >
            {/* <!--/header--> */}
            {/* <!-- Contact breadcrumb --> */}
            <section class="w3l-about-breadcrumb">
                <div class="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
                    <div class="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
                        <h2 class="title">Get in touch</h2>
                        <ul class="breadcrumbs-custom-path mt-2">
                            <li><a href="index.html">Home</a></li>
                            <li class="mx-2">/ </li>
                            <li class="active"> Contact </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- //Contact breadcrumb --> */}
            {/* < !--contacts --> */}
            <section class="w3l-contact-7 pt-5" id="contact">
                <div class="contacts-9 pt-lg-5 pt-md-4">
                    <div class="container">
                        <div class="top-map">
                            <div class="row map-content-9">
                                <div class="col-lg-8">
                                    <p class="mb-4">Your email address will not be published. Required fields are marked *</p>
                                    <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="text-right">
                                        <div class="form-grid">
                                            <input type="text" name="w3lName" id="w3lName" placeholder="Name*" required="" />
                                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Email*" required="" />
                                            <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Phone number*"
                                                required="" />
                                            <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Subject" />
                                        </div>
                                        <textarea name="w3lMessage" id="w3lMessage" placeholder="Message"></textarea>
                                        <button type="submit" class="btn btn-primary btn-style mt-3">Submit</button>
                                    </form>
                                </div>
                                <div class="col-lg-4 cont-details">
                                    <address>
                                        <h5 class="">Our Office Address</h5>
                                        <p><span class="fa fa-map-marker"></span>Style web design studio, 208 Trainer Avenue street,
                                            Corner Market, NY - 62617 </p>
                                        <p><span class="fa fa-phone"></span><a href="tel:+1(12) 366 411 4999"> +1(12) 366 411
                                            4999</a></p>
                                        <p> <a href="mailto:mail@example.com"><span
                                            class="fa fa-envelope"></span>mail@example.com</a></p>
                                        <p> <a href="mailto:support@example.com"><span
                                            class="fa fa-support"></span>support@example.com</a></p>

                                        <h5 class="mt-4 mb-3">Follow us on social media</h5>
                                        <div class="main-social-footer-29">
                                            <a href="#facebook" class="facebook"><span class="fa fa-facebook m-0"></span></a>
                                            <a href="#twitter" class="twitter"><span class="fa fa-twitter m-0"></span></a>
                                            <a href="#instagram" class="instagram"><span class="fa fa-instagram m-0"></span></a>
                                            <a href="#linkedin" class="linkedin"><span class="fa fa-linkedin m-0"></span></a>
                                        </div>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="map mt-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                            frameborder="0" style={{ border: "0" }} allowfullscreen=""></iframe>
                    </div>
                </div>
            </section>
            {/* <!-- //contacts --> */}

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
            {/* </div > */}
        </>
    );
}