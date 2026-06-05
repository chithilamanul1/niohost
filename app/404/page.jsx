
export default function Custom404Page() {
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
            <div className="background-image-wraper" style={{ background: 'url(assets/img/hero-2.jpg)' }}></div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-9 col-lg-7">
                        <div className="error-content-wrap text-center text-white">
                            <div className="notfound-404">
                                <h1 className="text-white">404</h1>
                            </div>
                            <h2 className="text-white">Sorry, something went wrong</h2>
                            <p className="lead">The page you are looking for might have been removed had its name changed or is temporarily
                                unavailable.</p><a className="btn btn-tertiary mt-3" href="/index">Go to Homepage</a>
                        </div>
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

