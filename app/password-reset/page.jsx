
export default function passwordresetPage() {
  return (
    <>
      
    
    <div id="preloader">
        <div className="preloader-wrap">
            <img src="assets/img/nio.png" alt="logo" style={{ maxWidth: '160px' }} className="img-fluid" />
            <div className="preloader">
                <i>.</i>
                <i>.</i>
                <i>.</i>
            </div>
        </div>
    </div>
    
    <section className="page-header-section ptb-100 bg-image full-height" data-overlay="8">
        <div className="background-image-wraper" style={{ background: 'url(assets/img/hero-3.jpg)' }}></div>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                        <div className="login-signup-header text-center">
                            <a href="/index"><img src="assets/img/nio.png" className="img-fluid mb-3" alt="Logo" /></a>
                            <h5 className="mb-5">Reset Your Account</h5>
                        </div>
                        <form className="login-signup-form">
                            <div className="form-group">
                                
                                <label className="pb-1"> Email Address </label>
                                
                                <div className="input-group input-group-merge">
                                    <div className="input-icon">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                            </div>

                            
                            <div className="d-grid">
                                <button className="btn btn-primary mt-4 mb-3">
                                    Login Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="copyright-wrap small-text text-center mt-5 text-white">
                        <p className="mb-0">
                            &copy; Seranex lanka solutions seranex.lk Design Agency, All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
