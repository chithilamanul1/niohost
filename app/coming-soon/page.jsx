
export default function comingsoonPage() {
  return (
    <>
      
    
    <div id="preloader">
        <div className="preloader-wrap">
            <img src="/assets/img/nio.png" alt="logo" style={{ maxWidth: '160px' }} className="img-fluid" />
            <div className="preloader">
                <i>.</i>
                <i>.</i>
                <i>.</i>
            </div>
        </div>
    </div>
    

    <div className="main">

        
        <section className="ptb-100 bg-image full-height" data-overlay="8">
            <div className="background-image-wraper" style={{ background: 'url(assets/img/hero-bg9.jpg)' }}></div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-9 col-lg-7">
                        <div className="hero-content-left text-white text-center">
                            <h1 className="text-white">We're Coming Soon</h1>
                            <p className="lead">Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.</p>
                            <ul className="list-unstyled list-inline menu-countdown my-5">
                                <li className="list-inline-item mb-0">
                                    <span
                                  className="counter-days border border-light h1 text-light p-3 rounded fw-medium"></span>
                                </li>
                                <li className="list-inline-item mb-0">
                                    <span
                                  className="counter-hours border border-light h1 text-light p-3 rounded fw-medium"></span>
                                </li>
                                <li className="list-inline-item mb-0">
                                    <span
                                  className="counter-minutes border border-light h1 text-light p-3 rounded fw-medium"></span>
                                </li>
                                <li className="list-inline-item mb-0">
                                    <span
                                  className="counter-seconds border border-light h1 text-light p-3 rounded fw-medium"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 col-lg-5">
                        <form className="newsletter-form position-relative">
                            <input type="text" className="input-newsletter form-control" placeholder="Enter your email" name="email" required="" autocomplete="off" />
                            <button type="submit" className="disabled">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        

    </div>

    <div className="theme-setting show">
        <a href="javascript:void(0)" id="themeSettingShow" className="theme-setting-link"><i className="fas fa-gear fa-spin"></i></a>
        <div className="theme-setting-body">
            <h6>Theme Option</h6>
            <div className="customize-color mt-4">
                <span className="heading-font fs-md fw-semibold">Default Theme</span>
                <a href="javascript:void(0)" className="d-block border theme-color d-flex align-items-center active" id="theme-default">
                    <span className="default-primary"></span>
                    <span className="default-accent"></span>
                    <span className="default-tertiary"></span>
                </a>
            </div>

            <div className="customize-color mt-4">
                <span className="heading-font fs-md fw-semibold">Theme One</span>
                <a href="javascript:void(0)" className="d-block border theme-color d-flex align-items-center" id="theme-1">
                    <span className="theme-1-primary"></span>
                    <span className="theme-1-accent"></span>
                    <span className="theme-1-tertiary"></span>
                </a>
            </div>

            <div className="customize-color mt-4">
                <span className="heading-font fs-md fw-semibold">Theme Two</span>
                <a href="javascript:void(0)" className="d-block border theme-color d-flex align-items-center" id="theme-2">
                    <span className="theme-2-primary"></span>
                    <span className="theme-2-accent"></span>
                    <span className="theme-2-tertiary"></span>
                </a>
            </div>

            <div className="customize-color mt-4">
                <span className="heading-font fs-md fw-semibold">Theme Three</span>
                <a href="javascript:void(0)" className="d-block border theme-color d-flex align-items-center" id="theme-3">
                    <span className="theme-3-primary"></span>
                    <span className="theme-3-accent"></span>
                    <span className="theme-3-tertiary"></span>
                </a>
            </div>
        </div>
    </div>
    <div className="scroll-top scroll-to-target primary-bg text-white" data-target="html">
        <span className="fas fa-hand-point-up"></span>
    </div>
    

    
    
    
    
    
    
    
    
    
    


    </>
  );
}

