import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <React.Fragment>
            <div>
  {/* Loader */}
  <div id="global-loader">
    <img src="../../assets/img/loader.svg" className="loader-img" alt="Loader" />
  </div>
  {/* /Loader */}
  {/* Page */}
  <div className="page">
    <div className="container-fluid">
      <div className="row no-gutter">
        {/* The image half */}
        <div className="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-primary-transparent">
          <div className="row wd-100p mx-auto text-center">
            <div className="col-md-12 col-lg-12 col-xl-12 my-auto mx-auto wd-100p">
              <img src="../../assets/img/media/login.png" className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
            </div>
          </div>
        </div>
        {/* The content half */}
        <div className="col-md-6 col-lg-6 col-xl-5 bg-white">
          <div className="login d-flex align-items-center py-2">
            {/* Demo content*/}
            <div className="container p-0">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-xl-9 mx-auto">
                  <div className="card-sigin">
                    <div className="mb-5 d-flex">
                      <a href="index.html"><img src="../../assets/img/brand/favicon.png" className="sign-favicon-a ht-40" alt="logo" />
                        <img src="../../assets/img/brand/favicon-white.png" className="sign-favicon-b ht-40" alt="logo" />
                      </a>
                      <h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1>
                    </div>
                    <div className="card-sigin">
                      <div className="main-signup-header">
                        <h2>Welcome back!</h2>
                        <h5 className="fw-semibold mb-4">Please sign in to continue.</h5>
                        <form action="#">
                          <div className="form-group">
                            <label>Email</label> <input className="form-control" placeholder="Enter your email" type="text" />
                          </div>
                          <div className="form-group">
                            <label>Password</label> <input className="form-control" placeholder="Enter your password" type="password" />
                          </div><NavLink to="/dashboard" className="btn btn-main-primary btn-block">Sign In</NavLink>
                          <div className="row row-xs">
                            <div className="col-sm-6">
                              <button className="btn btn-block"><i className="fab fa-facebook-f" /> Signup with Facebook</button>
                            </div>
                            <div className="col-sm-6 mg-t-10 mg-sm-t-0">
                              <button className="btn btn-info btn-block btn-b"><i className="fab fa-twitter" /> Signup with Twitter</button>
                            </div>
                          </div>
                        </form>
                        <div className="main-signin-footer mt-5">
                          <p><a href>Forgot password?</a></p>
                          <p>Don't have an account? <a href="page-signup.html">Create an Account</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End */}
          </div>
        </div>{/* End */}
      </div>
    </div>
  </div>
</div>

        </React.Fragment>
    )
}
