import React from 'react'

export default function Dashboard() {
    return (
        <React.Fragment>
            
		<div>
  <div id="global-loader">
    <img src="../../assets/img/loader.svg" className="loader-img" alt="Loader" />
  </div>
  <div className="page">
    <div className="main-header nav nav-item hor-header">
      <div className="container">
        <div className="main-header-left ">
          <a className="animated-arrow hor-toggle horizontal-navtoggle"><span /></a>
          <a className="header-brand" href="index.html">
            <img src="../../assets/img/brand/logo-white.png" className="desktop-dark" />
            <img src="../../assets/img/brand/logo.png" className="desktop-logo" />
            <img src="../../assets/img/brand/favicon.png" className="desktop-logo-1" />
            <img src="../../assets/img/brand/favicon-white.png" className="desktop-logo-dark" />
          </a>
          <div className="main-header-center  ms-4">
            <input className="form-control" placeholder="Search for anything..." type="search" /><button className="btn"><i className="fe fe-search" /></button>
          </div>
        </div>
        <div className="main-header-right">
          <ul className="nav">
            <li className>
              <div className="dropdown  nav-itemd-none d-md-flex">
                <a href="#" className="d-flex  nav-item nav-link pe-0 country-flag1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="avatar country-Flag me-0 align-self-center bg-transparent"><img src="../../assets/img/flags/us_flag.jpg" alt="img" /></span>
                  <div className="my-auto">
                    <strong className="me-2 ms-2 my-auto">English</strong>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-left dropdown-menu-arrow" x-placement="bottom-end">
                  <a href="#" className="dropdown-item d-flex ">
                    <span className="avatar  me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/french_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">French</span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar  me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/germany_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">Germany</span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/italy_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">Italy</span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/russia_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">Russia</span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar  me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/spain_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">spain</span>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="nav nav-item  navbar-nav-right ms-auto">
            <div className="nav-link" id="bs-example-navbar-collapse-1">
              <form className="navbar-form" role="search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-btn">
                    <button type="reset" className="btn btn-default">
                      <i className="fas fa-times" />
                    </button>
                    <button type="submit" className="btn btn-default nav-link resp-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="dropdown nav-item main-header-message ">
              <a className="new nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg><span className=" pulse-danger" /></a>
              <div className="dropdown-menu">
                <div className="menu-header-content bg-primary text-start">
                  <div className="d-flex">
                    <h6 className="dropdown-title mb-1 tx-15 text-white fw-semibold">Messages</h6>
                    <span className="badge rounded-pill bg-warning ms-auto my-auto float-end">Mark All Read</span>
                  </div>
                  <p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread messages</p>
                </div>
                <div className="main-message-list chat-scroll">
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="  drop-img  cover-image  " data-bs-image-src="../../assets/img/faces/3.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Petey Cruiser</h5>
                      </div>
                      <p className="mb-0 desc">I'm sorry but i'm not sure how to help you with that......</p>
                      <p className="time mb-0 text-start float-start ms-2 mt-2">Mar 15 3:55 PM</p>
                    </div>
                  </a>
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-bs-image-src="../../assets/img/faces/2.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Jimmy Changa</h5>
                      </div>
                      <p className="mb-0 desc">All set ! Now, time to get to you now......</p>
                      <p className="time mb-0 text-start float-start ms-2 mt-2">Mar 06 01:12 AM</p>
                    </div>
                  </a>
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-bs-image-src="../../assets/img/faces/9.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Graham Cracker</h5>
                      </div>
                      <p className="mb-0 desc">Are you ready to pickup your Delivery...</p>
                      <p className="time mb-0 text-start float-start ms-2 mt-2">Feb 25 10:35 AM</p>
                    </div>
                  </a>
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-bs-image-src="../../assets/img/faces/12.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Donatella Nobatti</h5>
                      </div>
                      <p className="mb-0 desc">Here are some products ...</p>
                      <p className="time mb-0 text-start float-start ms-2 mt-2">Feb 12 05:12 PM</p>
                    </div>
                  </a>
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-bs-image-src="../../assets/img/faces/5.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Anne Fibbiyon</h5>
                      </div>
                      <p className="mb-0 desc">I'm sorry but i'm not sure how...</p>
                      <p className="time mb-0 text-start float-start ms-2 mt-2">Jan 29 03:16 PM</p>
                    </div>
                  </a>
                </div>
                <div className="text-center dropdown-footer">
                  <a href="text-center">VIEW ALL</a>
                </div>
              </div>
            </div>
            <div className="dropdown nav-item main-header-notification">
              <a className="new nav-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg><span className=" pulse" /></a>
              <div className="dropdown-menu">
                <div className="menu-header-content bg-primary text-start">
                  <div className="d-flex">
                    <h6 className="dropdown-title mb-1 tx-15 text-white fw-semibold">Notifications</h6>
                    <span className="badge rounded-pill bg-warning ms-auto my-auto float-end">Mark All Read</span>
                  </div>
                  <p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread Notifications</p>
                </div>
                <div className="main-notification-list Notification-scroll">
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-pink">
                      <i className="la la-file-alt text-white" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">New files available</h5>
                      <div className="notification-subtext">10 hour ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-purple">
                      <i className="la la-gem text-white" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">Updates Available</h5>
                      <div className="notification-subtext">2 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-success">
                      <i className="la la-shopping-basket text-white" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">New Order Received</h5>
                      <div className="notification-subtext">1 hour ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-warning">
                      <i className="la la-envelope-open text-white" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">New review received</h5>
                      <div className="notification-subtext">1 day ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-danger">
                      <i className="la la-user-check text-white" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">22 verified registrations</h5>
                      <div className="notification-subtext">2 hour ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-primary">
                      <i className="la la-check-circle text-white" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">Project has been approved</h5>
                      <div className="notification-subtext">4 hour ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                </div>
                <div className="dropdown-footer">
                  <a href>VIEW ALL</a>
                </div>
              </div>
            </div>
            <div className="nav-item full-screen fullscreen-button">
              <a className="new nav-link full-screen-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg></a>
            </div>
            <div className="dropdown main-profile-menu nav nav-item nav-link">
              <a className="profile-user d-flex" href><img alt src="../../assets/img/faces/6.jpg" /></a>
              <div className="dropdown-menu">
                <div className="main-header-profile bg-primary p-3">
                  <div className="d-flex wd-100p">
                    <div className="main-img-user"><img alt src="../../assets/img/faces/6.jpg" className /></div>
                    <div className="ms-3 my-auto">
                      <h6>Petey Cruiser</h6><span>Premium Member</span>
                    </div>
                  </div>
                </div>
                <a className="dropdown-item" href><i className="bx bx-user-circle" />Profile</a>
                <a className="dropdown-item" href><i className="bx bx-cog" /> Edit Profile</a>
                <a className="dropdown-item" href><i className="bx bxs-inbox" />Inbox</a>
                <a className="dropdown-item" href><i className="bx bx-envelope" />Messages</a>
                <a className="dropdown-item" href><i className="bx bx-slider-alt" /> Account Settings</a>
                <a className="dropdown-item" href="signin.html"><i className="bx bx-log-out" /> Sign Out</a>
              </div>
            </div>
            <div className="dropdown main-header-message right-toggle">
              <a className="nav-link pe-0" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
                <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-header nav nav-item hor-header top-header">
      <div className="container">
        <div className="main-header-left ">
          <a className="animated-arrow hor-toggle horizontal-navtoggle"><span /></a>
          <a className="header-brand" href="index.html">
            <img src="../../assets/img/brand/logo-white.png" className="desktop-dark" />
            <img src="../../assets/img/brand/logo.png" className="desktop-logo" />
            <img src="../../assets/img/brand/favicon.png" className="desktop-logo-1" />
            <img src="../../assets/img/brand/favicon-white.png" className="desktop-logo-dark" />
          </a>
          <div className="main-header-center  ml-4">
            <input className="form-control" placeholder="Search for anything..." type="search" /><button className="btn"><i className="fe fe-search" /></button>
          </div>
        </div>
        <a className="header-brand header-brand2 d-none d-lg-block" href="index.html">
          <img src="../../assets/img/brand/logo-white.png" className="desktop-dark" />
          <img src="../../assets/img/brand/logo.png" className="desktop-logo" />
          <img src="../../assets/img/brand/favicon.png" className="desktop-logo-1" />
          <img src="../../assets/img/brand/favicon-white.png" className="desktop-logo-dark" />
        </a>
        <div className="main-header-right">
          <ul className="nav">
            <li className>
              <div className="dropdown  nav-itemd-none d-md-flex">
                <a href="#" className="d-flex  nav-item nav-link pr-0 country-flag1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="avatar country-Flag mr-0 align-self-center bg-transparent"><img src="../../assets/img/flags/us_flag.jpg" alt="img" /></span>
                  <div className="my-auto">
                    <strong className="mr-2 ml-2 my-auto">English</strong>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-left dropdown-menu-arrow" x-placement="bottom-end">
                  <a href="#" className="dropdown-item d-flex ">
                    <span className="avatar  mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/french_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">French</span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar  mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/germany_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">Germany</span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/italy_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">Italy</span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/russia_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">Russia</span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar  mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/spain_flag.jpg" alt="img" /></span>
                    <div className="d-flex">
                      <span className="mt-2">spain</span>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="nav nav-item  navbar-nav-right ml-auto">
            <div className="nav-link" id="bs-example-navbar-collapse-1">
              <form className="navbar-form" role="search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-btn">
                    <button type="reset" className="btn btn-default">
                      <i className="fas fa-times" />
                    </button>
                    <button type="submit" className="btn btn-default nav-link resp-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="dropdown nav-item main-header-message ">
              <a className="new nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg><span className=" pulse-danger" /></a>
              <div className="dropdown-menu">
                <div className="menu-header-content bg-primary text-left">
                  <div className="d-flex">
                    <h6 className="dropdown-title mb-1 tx-15 text-white font-weight-semibold">Messages</h6>
                    <span className="badge badge-pill badge-warning ml-auto my-auto float-right">Mark All Read</span>
                  </div>
                  <p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread messages</p>
                </div>
                <div className="main-message-list chat-scroll">
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="  drop-img  cover-image  " data-image-src="../../assets/img/faces/3.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Petey Cruiser</h5>
                      </div>
                      <p className="mb-0 desc">I'm sorry but i'm not sure how to help you with that......</p>
                      <p className="time mb-0 text-left float-left ml-2 mt-2">Mar 15 3:55 PM</p>
                    </div>
                  </a>
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-image-src="../../assets/img/faces/2.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Jimmy Changa</h5>
                      </div>
                      <p className="mb-0 desc">All set ! Now, time to get to you now......</p>
                      <p className="time mb-0 text-left float-left ml-2 mt-2">Mar 06 01:12 AM</p>
                    </div>
                  </a>
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-image-src="../../assets/img/faces/9.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Graham Cracker</h5>
                      </div>
                      <p className="mb-0 desc">Are you ready to pickup your Delivery...</p>
                      <p className="time mb-0 text-left float-left ml-2 mt-2">Feb 25 10:35 AM</p>
                    </div>
                  </a>
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-image-src="../../assets/img/faces/12.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Donatella Nobatti</h5>
                      </div>
                      <p className="mb-0 desc">Here are some products ...</p>
                      <p className="time mb-0 text-left float-left ml-2 mt-2">Feb 12 05:12 PM</p>
                    </div>
                  </a>
                  <a href="#" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-image-src="../../assets/img/faces/5.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Anne Fibbiyon</h5>
                      </div>
                      <p className="mb-0 desc">I'm sorry but i'm not sure how...</p>
                      <p className="time mb-0 text-left float-left ml-2 mt-2">Jan 29 03:16 PM</p>
                    </div>
                  </a>
                </div>
                <div className="text-center dropdown-footer">
                  <a href="text-center">VIEW ALL</a>
                </div>
              </div>
            </div>
            <div className="dropdown nav-item main-header-notification">
              <a className="new nav-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg><span className=" pulse" /></a>
              <div className="dropdown-menu">
                <div className="menu-header-content bg-primary text-left">
                  <div className="d-flex">
                    <h6 className="dropdown-title mb-1 tx-15 text-white font-weight-semibold">Notifications</h6>
                    <span className="badge badge-pill badge-warning ml-auto my-auto float-right">Mark All Read</span>
                  </div>
                  <p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread Notifications</p>
                </div>
                <div className="main-notification-list Notification-scroll">
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-pink">
                      <i className="la la-file-alt text-white" />
                    </div>
                    <div className="ml-3">
                      <h5 className="notification-label mb-1">New files available</h5>
                      <div className="notification-subtext">10 hour ago</div>
                    </div>
                    <div className="ml-auto">
                      <i className="las la-angle-right text-right text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3" href="#">
                    <div className="notifyimg bg-purple">
                      <i className="la la-gem text-white" />
                    </div>
                    <div className="ml-3">
                      <h5 className="notification-label mb-1">Updates Available</h5>
                      <div className="notification-subtext">2 days ago</div>
                    </div>
                    <div className="ml-auto">
                      <i className="las la-angle-right text-right text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-success">
                      <i className="la la-shopping-basket text-white" />
                    </div>
                    <div className="ml-3">
                      <h5 className="notification-label mb-1">New Order Received</h5>
                      <div className="notification-subtext">1 hour ago</div>
                    </div>
                    <div className="ml-auto">
                      <i className="las la-angle-right text-right text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-warning">
                      <i className="la la-envelope-open text-white" />
                    </div>
                    <div className="ml-3">
                      <h5 className="notification-label mb-1">New review received</h5>
                      <div className="notification-subtext">1 day ago</div>
                    </div>
                    <div className="ml-auto">
                      <i className="las la-angle-right text-right text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-danger">
                      <i className="la la-user-check text-white" />
                    </div>
                    <div className="ml-3">
                      <h5 className="notification-label mb-1">22 verified registrations</h5>
                      <div className="notification-subtext">2 hour ago</div>
                    </div>
                    <div className="ml-auto">
                      <i className="las la-angle-right text-right text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="#">
                    <div className="notifyimg bg-primary">
                      <i className="la la-check-circle text-white" />
                    </div>
                    <div className="ml-3">
                      <h5 className="notification-label mb-1">Project has been approved</h5>
                      <div className="notification-subtext">4 hour ago</div>
                    </div>
                    <div className="ml-auto">
                      <i className="las la-angle-right text-right text-muted" />
                    </div>
                  </a>
                </div>
                <div className="dropdown-footer">
                  <a href>VIEW ALL</a>
                </div>
              </div>
            </div>
            <div className="nav-item full-screen fullscreen-button">
              <a className="new nav-link full-screen-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg></a>
            </div>
            <div className="dropdown main-profile-menu nav nav-item nav-link">
              <a className="profile-user d-flex" href><img alt src="../../assets/img/faces/6.jpg" /></a>
              <div className="dropdown-menu">
                <div className="main-header-profile bg-primary p-3">
                  <div className="d-flex wd-100p">
                    <div className="main-img-user"><img alt src="../../assets/img/faces/6.jpg" className /></div>
                    <div className="ml-3 my-auto">
                      <h6>Petey Cruiser</h6><span>Premium Member</span>
                    </div>
                  </div>
                </div>
                <a className="dropdown-item" href><i className="bx bx-user-circle" />Profile</a>
                <a className="dropdown-item" href><i className="bx bx-cog" /> Edit Profile</a>
                <a className="dropdown-item" href><i className="bx bxs-inbox" />Inbox</a>
                <a className="dropdown-item" href><i className="bx bx-envelope" />Messages</a>
                <a className="dropdown-item" href><i className="bx bx-slider-alt" /> Account Settings</a>
                <a className="dropdown-item" href="signin.html"><i className="bx bx-log-out" /> Sign Out</a>
              </div>
            </div>
            <div className="dropdown main-header-message right-toggle">
              <a className="nav-link pr-0" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
                <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky">
      <div className="horizontal-main hor-menu clearfix side-header">
        <div className="horizontal-mainwrapper container clearfix">
          <nav className="horizontalMenu clearfix">
            <ul className="horizontalMenu-list">
              <li aria-haspopup="true"><a href="index.html" className><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>Dashboard</a></li>
              <li aria-haspopup="true"><a href="#" className="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" opacity=".3" /><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" /></svg> Charts<i className="fe fe-chevron-down horizontal-icon" /></a>
                <ul className="sub-menu">
                  <li aria-haspopup="true"><a href="chart-morris.html" className="slide-item">Morris Charts</a></li>
                  <li aria-haspopup="true"><a href="chart-flot.html" className="slide-item">Flot Charts</a></li>
                  <li aria-haspopup="true"><a href="chart-chartjs.html" className="slide-item">ChartJS</a></li>
                  <li aria-haspopup="true"><a href="chart-echart.html" className="slide-item">Echart</a></li>
                  <li aria-haspopup="true"><a href="chart-sparkline.html" className="slide-item">Sparkline</a></li>
                  <li aria-haspopup="true"><a href="chart-peity.html" className="slide-item"> Chart-peity</a></li>
                </ul>
              </li>
              <li aria-haspopup="true"><a href="#" className="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3.31 11l2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" opacity=".3" /><path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg> E-Commerce<i className="fe fe-chevron-down horizontal-icon" /></a>
                <ul className="sub-menu">
                  <li aria-haspopup="true"><a href="products.html" className="slide-item"> Products</a></li>
                  <li aria-haspopup="true"><a href="product-details.html" className="slide-item">Product-Details</a></li>
                  <li aria-haspopup="true"><a href="product-cart.html" className="slide-item">Shopping Cart</a></li>
                </ul>
              </li>
              <li aria-haspopup="true"><a href="#" className="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3" /><path d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z" /></svg> Elements<i className="fe fe-chevron-down horizontal-icon" /></a>
                <div className="horizontal-megamenu clearfix">
                  <div className="container">
                    <div className="mega-menubg hor-mega-menu">
                      <div className="row">
                        <div className="col-lg-3 col-md-12 col-xs-12 link-list">
                          <ul>
                            <li><h3 className="fs-14 fw-bold mb-1 mt-2">Elements</h3></li>
                            <li aria-haspopup="true"><a href="alerts.html" className="slide-item">Alerts</a></li>
                            <li aria-haspopup="true"><a href="avatar.html" className="slide-item">Avatar</a></li>
                            <li aria-haspopup="true"><a href="breadcrumbs.html" className="slide-item">Breadcrumbs</a></li>
                            <li aria-haspopup="true"><a href="buttons.html" className="slide-item">Buttons</a></li>
                            <li aria-haspopup="true"><a href="badge.html" className="slide-item">Badge</a></li>
                            <li aria-haspopup="true"><a href="dropdown.html" className="slide-item">Dropdown</a></li>
                            <li aria-haspopup="true"><a href="thumbnails.html" className="slide-item">Thumbnails</a></li>
                            <li aria-haspopup="true"><a href="images.html" className="slide-item">Images</a></li>
                            <li aria-haspopup="true"><a href="list-group.html" className="slide-item">List Group</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12 link-list">
                          <ul>
                            <li aria-haspopup="true"><a href="navigation.html" className="slide-item">Navigation</a></li>
                            <li aria-haspopup="true"><a href="pagination.html" className="slide-item">Pagination</a></li>
                            <li aria-haspopup="true"><a href="popover.html" className="slide-item">Popover</a></li>
                            <li aria-haspopup="true"><a href="progress.html" className="slide-item">Progress</a></li>
                            <li aria-haspopup="true"><a href="spinners.html" className="slide-item">Spinners</a></li>
                            <li aria-haspopup="true"><a href="media-object.html" className="slide-item">Media Object</a></li>
                            <li aria-haspopup="true"><a href="typography.html" className="slide-item">Typography</a></li>
                            <li aria-haspopup="true"><a href="tooltip.html" className="slide-item">Tooltip</a></li>
                            <li aria-haspopup="true"><a href="toast.html" className="slide-item">Toast</a></li>
                            <li aria-haspopup="true"><a href="tags.html" className="slide-item">Tags</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12 link-list">
                          <ul>
                            <li aria-haspopup="true"><a href="tabs.html" className="slide-item">Tabs</a></li>
                            <li><h3 className="fs-14 fw-bold mb-1 mt-2">Apps</h3></li>
                            <li aria-haspopup="true"><a href="cards.html" className="slide-item">Cards</a></li>
                            <li aria-haspopup="true"><a href="draggablecards.html" className="slide-item">Draggablecards</a></li>
                            <li aria-haspopup="true"><a href="rangeslider.html" className="slide-item">Range-slider</a></li>
                            <li aria-haspopup="true"><a href="calendar.html" className="slide-item">Calendar</a></li>
                            <li aria-haspopup="true"><a href="contacts.html" className="slide-item">Contacts</a></li>
                            <li aria-haspopup="true"><a href="image-compare.html" className="slide-item">Image-compare</a></li>
                            <li aria-haspopup="true"><a href="notification.html" className="slide-item">Notification</a></li>
                            <li aria-haspopup="true"><a href="widget-notification.html" className="slide-item">Widget-notification</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12 link-list">
                          <ul>
                            <li aria-haspopup="true"><a href="treeview.html" className="slide-item">Treeview</a></li>
                            <li><h3 className="fs-14 fw-bold mb-1 mt-2">Icons <span className="badge bg-danger ">New</span></h3></li>
                            <li aria-haspopup="true"><a href="icons.html" className="slide-item">Icons</a></li>
                            <li><h3 className="fs-14 fw-bold mb-1 mt-2">Maps</h3></li>
                            <li aria-haspopup="true"><a href="map-leaflet.html" className="slide-item">Mapel Maps</a></li>
                            <li aria-haspopup="true"><a href="map-vector.html" className="slide-item">Vector Maps</a></li>
                            <li><h3 className="fs-14 fw-bold mb-1 mt-2">Tables</h3></li>
                            <li aria-haspopup="true"><a href="table-basic.html" className="slide-item">Basic Tables</a></li>
                            <li aria-haspopup="true"><a href="table-data.html" className="slide-item">Data Tables</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li aria-haspopup="true"><a href="#" className="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm4.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" opacity=".3" /><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm4 13h-1.77c-1.38 0-2.5 1.12-2.5 2.5 0 .61.22 1.19.63 1.65.06.07.14.19.14.35 0 .28-.22.5-.5.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.14 8 7c0 2.21-1.79 4-4 4z" /><circle cx="6.5" cy="11.5" r="1.5" /><circle cx="9.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /><circle cx="17.5" cy="11.5" r="1.5" /></svg> Advanced UI <i className="fe fe-chevron-down horizontal-icon" /></a>
                <ul className="sub-menu">
                  <li aria-haspopup="true"><a href="accordion.html" className="slide-item"> Accordion</a></li>
                  <li aria-haspopup="true"><a href="carousel.html" className="slide-item">Carousel</a></li>
                  <li aria-haspopup="true"><a href="collapse.html" className="slide-item">Collapse</a></li>
                  <li aria-haspopup="true"><a href="modals.html" className="slide-item">Modals</a></li>
                  <li aria-haspopup="true"><a href="timeline.html" className="slide-item">Timeline</a></li>
                  <li aria-haspopup="true"><a href="sweet-alert.html" className="slide-item">Sweet Alert</a></li>
                  <li aria-haspopup="true"><a href="rating.html" className="slide-item">Ratings</a></li>
                  <li aria-haspopup="true"><a href="counters.html" className="slide-item">Counters</a></li>
                  <li aria-haspopup="true"><a href="search.html" className="slide-item">Search</a></li>
                  <li aria-haspopup="true"><a href="userlist.html" className="slide-item"> Userlist</a></li>
                  <li aria-haspopup="true"><a href="blog.html" className="slide-item">Blog</a></li>
                  <li aria-haspopup="true" className="sub-menu-sub"><a href="#">Submenu</a>
                    <ul className="sub-menu">
                      <li aria-haspopup="true"><a href="#" className="slide-item">Submenu-01</a></li>
                      <li aria-haspopup="true" className="slide-item sub-menu-sub"><a href="#">Submenu-02</a>
                        <ul className="sub-menu">
                          <li aria-haspopup="true"><a href="#" className="slide-item">SubmenuLevel-01</a></li>
                          <li aria-haspopup="true"><a href="#" className="slide-item">SubmenuLevel-02</a></li>
                          <li aria-haspopup="true"><a href="#" className="slide-item">SubmenuLevel-02</a></li>
                        </ul>
                      </li>
                      <li aria-haspopup="true"><a href="form-layouts.html" className="slide-item">Submenu-03</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li aria-haspopup="true"><a href="#" className="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10.9 19.91c.36.05.72.09 1.1.09 2.18 0 4.16-.88 5.61-2.3L14.89 13l-3.99 6.91zm-1.04-.21l2.71-4.7H4.59c.93 2.28 2.87 4.03 5.27 4.7zM8.54 12L5.7 7.09C4.64 8.45 4 10.15 4 12c0 .69.1 1.36.26 2h5.43l-1.15-2zm9.76 4.91C19.36 15.55 20 13.85 20 12c0-.69-.1-1.36-.26-2h-5.43l3.99 6.91zM13.73 9h5.68c-.93-2.28-2.88-4.04-5.28-4.7L11.42 9h2.31zm-3.46 0l2.83-4.92C12.74 4.03 12.37 4 12 4c-2.18 0-4.16.88-5.6 2.3L9.12 11l1.15-2z" opacity=".3" /><path d="M12 22c5.52 0 10-4.48 10-10 0-4.75-3.31-8.72-7.75-9.74l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10zm0-2c-.38 0-.74-.04-1.1-.09L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20zm8-8c0 1.85-.64 3.55-1.7 4.91l-4-6.91h5.43c.17.64.27 1.31.27 2zm-.59-3h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zM12 4c.37 0 .74.03 1.1.08L10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4zm-8 8c0-1.85.64-3.55 1.7-4.91L8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12zm6.27 3h2.3l-2.71 4.7c-2.4-.67-4.35-2.42-5.28-4.7h5.69z" /></svg> Utilities <i className="fe fe-chevron-down horizontal-icon" /></a>
                <ul className="sub-menu">
                  <li aria-haspopup="true"><a href="background.html" className="slide-item">Background</a></li>
                  <li aria-haspopup="true"><a href="border.html" className="slide-item">Border</a></li>
                  <li aria-haspopup="true"><a href="display.html" className="slide-item">Display</a></li>
                  <li aria-haspopup="true"><a href="flex.html" className="slide-item">Flex</a></li>
                  <li aria-haspopup="true"><a href="height.html" className="slide-item">Height</a></li>
                  <li aria-haspopup="true"><a href="margin.html" className="slide-item">Margin</a></li>
                  <li aria-haspopup="true"><a href="padding.html" className="slide-item">Padding</a></li>
                  <li aria-haspopup="true"><a href="position.html" className="slide-item">Position</a></li>
                  <li aria-haspopup="true"><a href="width.html" className="slide-item">Width</a></li>
                  <li aria-haspopup="true"><a href="extras.html" className="slide-item">Extras</a></li>
                </ul>
              </li>
              <li aria-haspopup="true"><a href="#" className="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" className="side-menu__icon" viewBox="0 0 24 24"><g><rect fill="none" /></g><g><g /><g><path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z" /><path d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z" opacity=".3" /></g><g><path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z" /><path d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z" /><path d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z" /></g></g></svg>Pages <i className="fe fe-chevron-down horizontal-icon" /></a>
                <ul className="sub-menu">
                  <li aria-haspopup="true"><a href="profile.html" className="slide-item">Profile</a></li>
                  <li aria-haspopup="true"><a href="editprofile.html" className="slide-item">Edit-profile</a></li>
                  <li aria-haspopup="true" className="sub-menu-sub"><a href="#">Mail</a>
                    <ul className="sub-menu">
                      <li aria-haspopup="true"><a href="mail.html" className="slide-item">Mail-inbox</a></li>
                      <li aria-haspopup="true"><a href="mail-compose.html" className="slide-item">Mail-compose</a></li>
                      <li aria-haspopup="true"><a href="mail-read.html" className="slide-item">Mail-read</a></li>
                      <li aria-haspopup="true"><a href="mail-settings.html" className="slide-item">Mail-settings</a></li>
                      <li aria-haspopup="true"><a href="chat.html" className="slide-item">Chat</a></li>
                    </ul>
                  </li>
                  <li aria-haspopup="true" className="sub-menu-sub"><a href="#">Forms</a>
                    <ul className="sub-menu">
                      <li aria-haspopup="true"><a href="form-elements.html" className="slide-item">Form Elements</a></li>
                      <li aria-haspopup="true"><a href="form-advanced.html" className="slide-item">Advanced Forms</a></li>
                      <li aria-haspopup="true"><a href="form-layouts.html" className="slide-item">Form Layouts</a></li>
                      <li aria-haspopup="true"><a href="form-validation.html" className="slide-item">Form Validation</a></li>
                      <li aria-haspopup="true"><a href="form-wizards.html" className="slide-item">Form Wizards</a></li>
                      <li aria-haspopup="true"><a href="form-editor.html" className="slide-item">WYSIWYG Editor</a></li>
                    </ul>
                  </li>
                  <li aria-haspopup="true"><a href="invoice.html" className="slide-item">Invoice</a></li>
                  <li aria-haspopup="true"><a href="todotask.html" className="slide-item">Todotask</a></li>
                  <li aria-haspopup="true"><a href="pricing.html" className="slide-item">Pricing</a></li>
                  <li aria-haspopup="true"><a href="gallery.html" className="slide-item">Gallery</a></li>
                  <li aria-haspopup="true"><a href="faq.html" className="slide-item">Faqs</a></li>
                  <li aria-haspopup="true"><a href="empty.html" className="slide-item">Empty Page</a></li>
                </ul>
              </li>
              <li aria-haspopup="true"><a href="widgets.html" className><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3.31 11l2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" opacity=".3" /><path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg> Widgets </a></li>
              <li aria-haspopup="true"><a href="#" className="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg> Custom <i className="fe fe-chevron-down horizontal-icon" /></a>
                <ul className="sub-menu">
                  <li aria-haspopup="true"><a href="signin.html" className="slide-item">Sign In</a></li>
                  <li aria-haspopup="true"><a href="signup.html" className="slide-item">Sign Up</a></li>
                  <li aria-haspopup="true"><a href="forgot.html" className="slide-item">Forgot Password</a></li>
                  <li aria-haspopup="true"><a href="reset.html" className="slide-item">Reset Password</a></li>
                  <li aria-haspopup="true"><a href="lockscreen.html" className="slide-item">Lock screen</a></li>
                  <li aria-haspopup="true"><a href="underconstruction.html" className="slide-item">UnderConstruction</a></li>
                  <li aria-haspopup="true"><a href="404.html" className="slide-item">404 Error</a></li>
                  <li aria-haspopup="true"><a href="500.html" className="slide-item">500 Error</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className="main-content horizontal-content">
      <div className="container">
        <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
            <div>
              <h2 className="main-content-title tx-24 mg-b-1 mg-b-lg-1">Hi, welcome back!</h2>
              <p className="mg-b-0">Sales monitoring dashboard template.</p>
            </div>
          </div>
          <div className="main-dashboard-header-right">
            <div>
              <label className="tx-13">Customer Ratings</label>
              <div className="main-star">
                <i className="typcn typcn-star active" /> <i className="typcn typcn-star active" /> <i className="typcn typcn-star active" /> <i className="typcn typcn-star active" /> <i className="typcn typcn-star" /> <span>(14,873)</span>
              </div>
            </div>
            <div>
              <label className="tx-13">Online Sales</label>
              <h5>563,275</h5>
            </div>
            <div>
              <label className="tx-13">Offline Sales</label>
              <h5>783,675</h5>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-primary-gradient">
              <div className="ps-3 pt-3 pe-3 pb-2 pt-0">
                <div className>
                  <h6 className="mb-3 tx-12 text-white">TODAY ORDERS</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className>
                      <h4 className="tx-20 fw-bold mb-1 text-white">$5,74.12</h4>
                      <p className="mb-0 tx-12 text-white op-7">Compared to last week</p>
                    </div>
                    <span className="float-end my-auto ms-auto">
                      <i className="fas fa-arrow-circle-up text-white" />
                      <span className="text-white op-7"> +427</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline" className="pt-1">5,9,5,6,4,12,18,14,10,15,12,5,8,5,12,5,12,10,16,12</span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-danger-gradient">
              <div className="ps-3 pt-3 pe-3 pb-2 pt-0">
                <div className>
                  <h6 className="mb-3 tx-12 text-white">TODAY EARNINGS</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className>
                      <h4 className="tx-20 fw-bold mb-1 text-white">$1,230.17</h4>
                      <p className="mb-0 tx-12 text-white op-7">Compared to last week</p>
                    </div>
                    <span className="float-end my-auto ms-auto">
                      <i className="fas fa-arrow-circle-down text-white" />
                      <span className="text-white op-7"> -23.09%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline2" className="pt-1">3,2,4,6,12,14,8,7,14,16,12,7,8,4,3,2,2,5,6,7</span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-success-gradient">
              <div className="ps-3 pt-3 pe-3 pb-2 pt-0">
                <div className>
                  <h6 className="mb-3 tx-12 text-white">TOTAL EARNINGS</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className>
                      <h4 className="tx-20 fw-bold mb-1 text-white">$7,125.70</h4>
                      <p className="mb-0 tx-12 text-white op-7">Compared to last week</p>
                    </div>
                    <span className="float-end my-auto ms-auto">
                      <i className="fas fa-arrow-circle-up text-white" />
                      <span className="text-white op-7"> 52.09%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline3" className="pt-1">5,10,5,20,22,12,15,18,20,15,8,12,22,5,10,12,22,15,16,10</span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-warning-gradient">
              <div className="ps-3 pt-3 pe-3 pb-2 pt-0">
                <div className>
                  <h6 className="mb-3 tx-12 text-white">PRODUCT SOLD</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className>
                      <h4 className="tx-20 fw-bold mb-1 text-white">$4,820.50</h4>
                      <p className="mb-0 tx-12 text-white op-7">Compared to last week</p>
                    </div>
                    <span className="float-end my-auto ms-auto">
                      <i className="fas fa-arrow-circle-down text-white" />
                      <span className="text-white op-7"> -152.3</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline4" className="pt-1">5,9,5,6,4,12,18,14,10,15,12,5,8,5,12,5,12,10,16,12</span>
            </div>
          </div>
        </div>
        {/* row closed */}
        {/* row opened */}
        <div className="row row-sm">
          <div className="col-md-12 col-lg-12 col-xl-7">
            <div className="card">
              <div className="card-header bg-transparent pd-b-0 pd-t-20 bd-b-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mb-0">Order status</h4>
                  <i className="mdi mdi-dots-horizontal text-gray" />
                </div>
                <p className="tx-12 text-muted mb-0">Order Status and Tracking. Track your order from ship date to arrival. To begin, enter your order number.</p>
              </div>
              <div className="card-body">
                <div className="total-revenue">
                  <div>
                    <h4>120,750</h4>
                    <label><span className="bg-primary" />success</label>
                  </div>
                  <div>
                    <h4>56,108</h4>
                    <label><span className="bg-danger" />Pending</label>
                  </div>
                  <div>
                    <h4>32,895</h4>
                    <label><span className="bg-warning" />Failed</label>
                  </div>
                </div>
                <div id="bar" className="sales-bar mt-4" />
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-5">
            <div className="card card-dashboard-map-one">
              <label className="main-content-label">Sales Revenue by Customers in USA</label>
              <span className="d-block mg-b-20 text-muted tx-12">Sales Performance of all states in the United States</span>
              <div className>
                <div className="vmap-wrapper ht-180" id="vmap2" />
              </div>
            </div>
          </div>
        </div>
        {/* row closed */}
        {/* row opened */}
        <div className="row row-sm">
          <div className="col-xl-4 col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header pb-1">
                <h3 className="card-title mb-2">Recent Customers</h3>
                <p className="tx-12 mb-0 text-muted">A customer is an individual or business that purchases the goods service has evolved to include real-time</p>
              </div>
              <div className="card-body p-0 customers mt-1">
                <div className="list-group list-lg-group list-group-flush">
                  <div className="list-group-item list-group-item-action" href="#">
                    <div className="media mt-0">
                      <img className="avatar-lg rounded-circle me-3 my-auto" src="../../assets/img/faces/3.jpg" alt="Image description" />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-0">
                            <h5 className="mb-1 tx-15">Samantha Melon</h5>
                            <p className="mb-0 tx-13 text-muted">User ID: #1234 <span className="text-success ms-2">Paid</span></p>
                          </div>
                          <span className="ms-auto wd-45p fs-16 mt-2">
                            <div id="spark1" className="wd-100p" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action br-t-1" href="#">
                    <div className="media mt-0">
                      <img className="avatar-lg rounded-circle me-3 my-auto" src="../../assets/img/faces/11.jpg" alt="Image description" />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-1">
                            <h5 className="mb-1 tx-15">Jimmy Changa</h5>
                            <p className="mb-0 tx-13 text-muted">User ID: #1234 <span className="text-danger ms-2">Pending</span></p>
                          </div>
                          <span className="ms-auto wd-45p fs-16 mt-2">
                            <div id="spark2" className="wd-100p" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action br-t-1" href="#">
                    <div className="media mt-0">
                      <img className="avatar-lg rounded-circle me-3 my-auto" src="../../assets/img/faces/17.jpg" alt="Image description" />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-1">
                            <h5 className="mb-1 tx-15">Gabe Lackmen</h5>
                            <p className="mb-0 tx-13 text-muted">User ID: #1234<span className="text-danger ms-2">Pending</span></p>
                          </div>
                          <span className="ms-auto wd-45p fs-16 mt-2">
                            <div id="spark3" className="wd-100p" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action br-t-1" href="#">
                    <div className="media mt-0">
                      <img className="avatar-lg rounded-circle me-3 my-auto" src="../../assets/img/faces/15.jpg" alt="Image description" />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-1">
                            <h5 className="mb-1 tx-15">Manuel Labor</h5>
                            <p className="mb-0 tx-13 text-muted">User ID: #1234<span className="text-success ms-2">Paid</span></p>
                          </div>
                          <span className="ms-auto wd-45p fs-16 mt-2">
                            <div id="spark4" className="wd-100p" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action br-t-1 br-br-7 br-bl-7" href="#">
                    <div className="media mt-0">
                      <img className="avatar-lg rounded-circle me-3 my-auto" src="../../assets/img/faces/6.jpg" alt="Image description" />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-1">
                            <h5 className="mb-1 tx-15">Sharon Needles</h5>
                            <p className="b-0 tx-13 text-muted mb-0">User ID: #1234<span className="text-success ms-2">Paid</span></p>
                          </div>
                          <span className="ms-auto wd-45p fs-16 mt-2">
                            <div id="spark5" className="wd-100p" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 col-lg-6">
            <div className="card">
              <div className="card-header pb-1">
                <h3 className="card-title mb-2">Sales Activity</h3>
                <p className="tx-12 mb-0 text-muted">Sales activities are the tactics that salespeople use to achieve their goals and objective</p>
              </div>
              <div className="product-timeline card-body pt-2 mt-1">
                <ul className="timeline-1 mb-0">
                  <li className="mt-0" id="mrg-8"> <i className="ti-pie-chart bg-primary-gradient text-white product-icon" /> <span className="fw-semibold mb-4 tx-14 ">Total Products</span> <a href="#" className="float-end tx-11 text-muted">3 days ago</a>
                    <p className="mb-0 text-muted tx-12">1.3k New Products</p>
                  </li>
                  <li className="mt-0" id="mrg-8"> <i className="mdi mdi-cart-outline bg-danger-gradient text-white product-icon" /> <span className="fw-semibold mb-4 tx-14 ">Total Sales</span> <a href="#" className="float-end tx-11 text-muted">35 mins ago</a>
                    <p className="mb-0 text-muted tx-12">1k New Sales</p>
                  </li>
                  <li className="mt-0" id="mrg-8"> <i className="ti-bar-chart-alt bg-success-gradient text-white product-icon" /> <span className="fw-semibold mb-4 tx-14 ">Toatal Revenue</span> <a href="#" className="float-end tx-11 text-muted">50 mins ago</a>
                    <p className="mb-0 text-muted tx-12">23.5K New Revenue</p>
                  </li>
                  <li className="mt-0" id="mrg-8"> <i className="ti-wallet bg-warning-gradient text-white product-icon" /> <span className="fw-semibold mb-4 tx-14 ">Toatal Profit</span> <a href="#" className="float-end tx-11 text-muted">1 hour ago</a>
                    <p className="mb-0 text-muted tx-12">3k New profit</p>
                  </li>
                  <li className="mt-0" id="mrg-8"> <i className="si si-eye bg-purple-gradient text-white product-icon" /> <span className="fw-semibold mb-4 tx-14 ">Customer Visits</span> <a href="#" className="float-end tx-11 text-muted">1 day ago</a>
                    <p className="mb-0 text-muted tx-12">15% increased</p>
                  </li>
                  <li className="mt-0 mb-0" id="mrg-8"> <i className="icon-note icons bg-primary-gradient text-white product-icon" /> <span className="fw-semibold mb-4 tx-14 ">Customer Reviews</span> <a href="#" className="float-end tx-11 text-muted">1 day ago</a>
                    <p className="mb-0 text-muted tx-12">1.5k reviews</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 col-lg-6">
            <div className="card">
              <div className="card-header pb-0">
                <h3 className="card-title mb-2">Recent Orders</h3>
                <p className="tx-12 mb-0 text-muted">An order is an investor's instructions to a broker or brokerage firm to purchase or sell</p>
              </div>
              <div className="card-body sales-info ot-0 pt-0 pb-0">
                <div id="chart" className="ht-150" />
                <div className="row sales-infomation pb-0 mb-0 mx-auto wd-100p">
                  <div className="col-md-6 col">
                    <p className="mb-0 d-flex"><span className="legend bg-primary brround" />Delivered</p>
                    <h3 className="mb-1">5238</h3>
                    <div className="d-flex">
                      <p className="text-muted ">Last 6 months</p>
                    </div>
                  </div>
                  <div className="col-md-6 col">
                    <p className="mb-0 d-flex"><span className="legend bg-info brround" />Cancelled</p>
                    <h3 className="mb-1">3467</h3>
                    <div className="d-flex">
                      <p className="text-muted">Last 6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center pb-2">
                      <p className="mb-0">Total Sales</p>
                    </div>
                    <h4 className="fw-bold mb-2">$7,590</h4>
                    <div className="progress progress-style progress-sm">
                      <div className="progress-bar bg-primary-gradient wd-80p" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={78} />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4 mt-md-0">
                    <div className="d-flex align-items-center pb-2">
                      <p className="mb-0">Active Users</p>
                    </div>
                    <h4 className="fw-bold mb-2">$5,460</h4>
                    <div className="progress progress-style progress-sm">
                      <div className="progress-bar bg-danger-gradient wd-75" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={45} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-sm row-deck">
          <div className="col-md-12 col-lg-4 col-xl-4">
            <div className="card card-dashboard-eight pb-2">
              <h6 className="card-title">Your Top Countries</h6><span className="d-block mg-b-10 text-muted tx-12">Sales performance revenue based by country</span>
              <div className="list-group border-top-0">
                <div className="list-group-item border-top-0" id="br-t-0">
                  <i className="flag-icon flag-icon-us flag-icon-squared" />
                  <p>United States</p><span>$1,671.10</span>
                </div>
                <div className="list-group-item">
                  <i className="flag-icon flag-icon-nl flag-icon-squared" />
                  <p>Netherlands</p><span>$1,064.75</span>
                </div>
                <div className="list-group-item">
                  <i className="flag-icon flag-icon-gb flag-icon-squared" />
                  <p>United Kingdom</p><span>$1,055.98</span>
                </div>
                <div className="list-group-item">
                  <i className="flag-icon flag-icon-ca flag-icon-squared" />
                  <p>Canada</p><span>$1,045.49</span>
                </div>
                <div className="list-group-item">
                  <i className="flag-icon flag-icon-in flag-icon-squared" />
                  <p>India</p><span>$1,930.12</span>
                </div>
                <div className="list-group-item border-bottom-0 mb-0">
                  <i className="flag-icon flag-icon-au flag-icon-squared" />
                  <p>Australia</p><span>$1,042.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-8 col-xl-8">
            <div className="card card-table-two">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mb-1">Your Most Recent Earnings</h4>
                <i className="mdi mdi-dots-horizontal text-gray" />
              </div>
              <span className="tx-12 tx-muted mb-3 ">This is your most recent earnings for today's date.</span>
              <div className="table-responsive country-table">
                <table className="table table-striped table-bordered mb-0 text-sm-nowrap text-lg-nowrap text-xl-nowrap">
                  <thead>
                    <tr>
                      <th className="wd-lg-25p">Date</th>
                      <th className="wd-lg-25p tx-right">Sales Count</th>
                      <th className="wd-lg-25p tx-right">Earnings</th>
                      <th className="wd-lg-25p tx-right">Tax Witheld</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>05 Dec 2019</td>
                      <td className="tx-right tx-medium tx-inverse">34</td>
                      <td className="tx-right tx-medium tx-inverse">$658.20</td>
                      <td className="tx-right tx-medium tx-danger">-$45.10</td>
                    </tr>
                    <tr>
                      <td>06 Dec 2019</td>
                      <td className="tx-right tx-medium tx-inverse">26</td>
                      <td className="tx-right tx-medium tx-inverse">$453.25</td>
                      <td className="tx-right tx-medium tx-danger">-$15.02</td>
                    </tr>
                    <tr>
                      <td>07 Dec 2019</td>
                      <td className="tx-right tx-medium tx-inverse">34</td>
                      <td className="tx-right tx-medium tx-inverse">$653.12</td>
                      <td className="tx-right tx-medium tx-danger">-$13.45</td>
                    </tr>
                    <tr>
                      <td>08 Dec 2019</td>
                      <td className="tx-right tx-medium tx-inverse">45</td>
                      <td className="tx-right tx-medium tx-inverse">$546.47</td>
                      <td className="tx-right tx-medium tx-danger">-$24.22</td>
                    </tr>
                    <tr>
                      <td>09 Dec 2019</td>
                      <td className="tx-right tx-medium tx-inverse">31</td>
                      <td className="tx-right tx-medium tx-inverse">$425.72</td>
                      <td className="tx-right tx-medium tx-danger">-$25.01</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sidebar sidebar-right sidebar-animate">
      <div className="panel panel-primary card mb-0 box-shadow">
        <div className="tab-menu-heading border-0 p-3">
          <div className="card-title mb-0">Notifications</div>
          <div className="card-options ms-auto">
            <a href="#" className="sidebar-remove"><i className="fe fe-x" /></a>
          </div>
        </div>
        <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
          <div className="tabs-menu ">
            <ul className="nav panel-tabs">
              <li className><a href="#side1" className="active" data-bs-toggle="tab"><i className="ion ion-md-chatboxes tx-18 me-2" /> Chat</a></li>
              <li><a href="#side2" data-bs-toggle="tab"><i className="ion ion-md-notifications tx-18  me-2" /> Notifications</a></li>
              <li><a href="#side3" data-bs-toggle="tab"><i className="ion ion-md-contacts tx-18 me-2" /> Friends</a></li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active " id="side1">
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className>
                  <span className="avatar bg-primary brround avatar-md">CH</span>
                </div>
                <a className="wrapper w-100 ms-3" href="#">
                  <p className="mb-0 d-flex ">
                    <b>New Websites is Created</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">30 mins ago</small>
                      <p className="mb-0" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className>
                  <span className="avatar bg-danger brround avatar-md">N</span>
                </div>
                <a className="wrapper w-100 ms-3" href="#">
                  <p className="mb-0 d-flex ">
                    <b>Prepare For the Next Project</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">2 hours ago</small>
                      <p className="mb-0" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className>
                  <span className="avatar bg-info brround avatar-md">S</span>
                </div>
                <a className="wrapper w-100 ms-3" href="#">
                  <p className="mb-0 d-flex ">
                    <b>Decide the live Discussion</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">3 hours ago</small>
                      <p className="mb-0" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className>
                  <span className="avatar bg-warning brround avatar-md">K</span>
                </div>
                <a className="wrapper w-100 ms-3" href="#">
                  <p className="mb-0 d-flex ">
                    <b>Meeting at 3:00 pm</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">4 hours ago</small>
                      <p className="mb-0" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className>
                  <span className="avatar bg-success brround avatar-md">R</span>
                </div>
                <a className="wrapper w-100 ms-3" href="#">
                  <p className="mb-0 d-flex ">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">1 day ago</small>
                      <p className="mb-0" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className>
                  <span className="avatar bg-pink brround avatar-md">MS</span>
                </div>
                <a className="wrapper w-100 ms-3" href="#">
                  <p className="mb-0 d-flex ">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">1 day ago</small>
                      <p className="mb-0" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className>
                  <span className="avatar bg-purple brround avatar-md">L</span>
                </div>
                <a className="wrapper w-100 ms-3" href="#">
                  <p className="mb-0 d-flex ">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">45 minutes ago</small>
                      <p className="mb-0" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="list d-flex align-items-center p-3">
                <div className>
                  <span className="avatar bg-blue brround avatar-md">U</span>
                </div>
                <a className="wrapper w-100 ms-3" href="#">
                  <p className="mb-0 d-flex ">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">2 days ago</small>
                      <p className="mb-0" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="tab-pane  " id="side2">
              <div className="list-group list-group-flush ">
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-3">
                    <span className="avatar avatar-lg brround cover-image" data-bs-image-src="../../assets/img/faces/12.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div>
                    <strong>Madeleine</strong> Hey! there I' am available....
                    <div className="small text-muted">
                      3 hours ago
                    </div>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-3">
                    <span className="avatar avatar-lg brround cover-image" data-bs-image-src="../../assets/img/faces/1.jpg" />
                  </div>
                  <div>
                    <strong>Anthony</strong> New product Launching...
                    <div className="small text-muted">
                      5 hour ago
                    </div>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-3">
                    <span className="avatar avatar-lg brround cover-image" data-bs-image-src="../../assets/img/faces/2.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div>
                    <strong>Olivia</strong> New Schedule Realease......
                    <div className="small text-muted">
                      45 minutes ago
                    </div>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-3">
                    <span className="avatar avatar-lg brround cover-image" data-bs-image-src="../../assets/img/faces/8.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div>
                    <strong>Madeleine</strong> Hey! there I' am available....
                    <div className="small text-muted">
                      3 hours ago
                    </div>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-3">
                    <span className="avatar avatar-lg brround cover-image" data-bs-image-src="../../assets/img/faces/11.jpg" />
                  </div>
                  <div>
                    <strong>Anthony</strong> New product Launching...
                    <div className="small text-muted">
                      5 hour ago
                    </div>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-3">
                    <span className="avatar avatar-lg brround cover-image" data-bs-image-src="../../assets/img/faces/6.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div>
                    <strong>Olivia</strong> New Schedule Realease......
                    <div className="small text-muted">
                      45 minutes ago
                    </div>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-3">
                    <span className="avatar avatar-lg brround cover-image" data-bs-image-src="../../assets/img/faces/9.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div>
                    <strong>Olivia</strong> Hey! there I' am available....
                    <div className="small text-muted">
                      12 minutes ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane  " id="side3">
              <div className="list-group list-group-flush ">
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/9.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Mozelle Belt</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/11.jpg" />
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Florinda Carasco</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/10.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Alina Bernier</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/2.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Zula Mclaughin</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/13.jpg" />
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Isidro Heide</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/12.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Mozelle Belt</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/4.jpg" />
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Florinda Carasco</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/7.jpg" />
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Alina Bernier</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/2.jpg" />
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Zula Mclaughin</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/14.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Isidro Heide</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/11.jpg" />
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Florinda Carasco</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/9.jpg" />
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Alina Bernier</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/15.jpg"><span className="avatar-status bg-success" /></span>
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Zula Mclaughin</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
                <div className="list-group-item d-flex  align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md brround cover-image" data-bs-image-src="../../assets/img/faces/4.jpg" />
                  </div>
                  <div className>
                    <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Isidro Heide</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#chatmodel"><i className="fab fa-facebook-messenger" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="chatmodel" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-right chatbox" role="document">
        <div className="modal-content chat border-0">
          <div className="card overflow-hidden mb-0 border-0">
            {/* action-header */}
            <div className="action-header clearfix">
              <div className="float-start hidden-xs d-flex ms-2">
                <div className="img_cont me-3">
                  <img src="../../assets/img/faces/6.jpg" className="rounded-circle user_img" alt="img" />
                </div>
                <div className="align-items-center mt-2">
                  <h4 className="text-white mb-0 fw-semibold">Daneil Scott</h4>
                  <span className="dot-label bg-success" /><span className="me-3 text-white">online</span>
                </div>
              </div>
              <ul className="ah-actions actions align-items-center">
                <li className="call-icon">
                  <a href className="d-done d-md-block phone-button" data-bs-toggle="modal" data-bs-target="#audiomodal">
                    <i className="si si-phone" />
                  </a>
                </li>
                <li className="video-icon">
                  <a href className="d-done d-md-block phone-button" data-bs-toggle="modal" data-bs-target="#videomodal">
                    <i className="si si-camrecorder" />
                  </a>
                </li>
                <li className="dropdown">
                  <a href data-bs-toggle="dropdown" aria-expanded="true">
                    <i className="si si-options-vertical" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><i className="fa fa-user-circle" /> View profile</li>
                    <li><i className="fa fa-users" />Add friends</li>
                    <li><i className="fa fa-plus" /> Add to group</li>
                    <li><i className="fa fa-ban" /> Block</li>
                  </ul>
                </li>
                <li>
                  <a href className data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="si si-close text-white" /></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body msg_card_body">
              <div className="chat-box-single-line">
                <abbr className="timestamp">February 1st, 2019</abbr>
              </div>
              <div className="d-flex justify-content-start">
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
                <div className="msg_cotainer">
                  Hi, how are you Jenna Side?
                  <span className="msg_time">8:40 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end ">
                <div className="msg_cotainer_send">
                  Hi Connor Paige i am good tnx how about you?
                  <span className="msg_time_send">8:55 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
              </div>
              <div className="d-flex justify-content-start ">
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
                <div className="msg_cotainer">
                  I am good too, thank you for your chat template
                  <span className="msg_time">9:00 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end ">
                <div className="msg_cotainer_send">
                  You welcome Connor Paige
                  <span className="msg_time_send">9:05 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
              </div>
              <div className="d-flex justify-content-start ">
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
                <div className="msg_cotainer">
                  Yo, Can you update Views?
                  <span className="msg_time">9:07 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  But I must explain to you how all this mistaken  born and I will give
                  <span className="msg_time_send">9:10 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
              </div>
              <div className="d-flex justify-content-start ">
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
                <div className="msg_cotainer">
                  Yo, Can you update Views?
                  <span className="msg_time">9:07 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  But I must explain to you how all this mistaken  born and I will give
                  <span className="msg_time_send">9:10 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
              </div>
              <div className="d-flex justify-content-start ">
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
                <div className="msg_cotainer">
                  Yo, Can you update Views?
                  <span className="msg_time">9:07 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  But I must explain to you how all this mistaken  born and I will give
                  <span className="msg_time_send">9:10 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="img_cont_msg">
                  <img src="../../assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                </div>
                <div className="msg_cotainer">
                  Okay Bye, text you later..
                  <span className="msg_time">9:12 AM, Today</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="msb-reply d-flex">
                <div className="input-group">
                  <input type="text" className="form-control " placeholder="Typing...." />
                  <div className="input-group-text ">
                    <button type="button" className="btn btn-primary ">
                      <i className="far fa-paper-plane" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="videomodal" className="modal fade">
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-dark border-0 text-white">
          <div className="modal-body mx-auto text-center p-7">
            <h5>Valex Video call</h5>
            <img src="../../assets/img/faces/6.jpg" className="rounded-circle user-img-circle h-8 w-8 mt-4 mb-3" alt="img" />
            <h4 className="mb-1 fw-semibold">Daneil Scott</h4>
            <h6>Calling...</h6>
            <div className="mt-5">
              <div className="row">
                <div className="col-4">
                  <a className="icon icon-shape rounded-circle mb-0 me-3" href="#">
                    <i className="fas fa-video-slash" />
                  </a>
                </div>
                <div className="col-4">
                  <a className="icon icon-shape rounded-circle text-white mb-0 me-3" href="#" data-bs-dismiss="modal" aria-label="Close">
                    <i className="fas fa-phone bg-danger text-white" />
                  </a>
                </div>
                <div className="col-4">
                  <a className="icon icon-shape rounded-circle mb-0 me-3" href="#">
                    <i className="fas fa-microphone-slash" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="audiomodal" className="modal fade">
      <div className="modal-dialog" role="document">
        <div className="modal-content border-0">
          <div className="modal-body mx-auto text-center p-7">
            <h5>Valex Voice call</h5>
            <img src="../../assets/img/faces/6.jpg" className="rounded-circle user-img-circle h-8 w-8 mt-4 mb-3" alt="img" />
            <h4 className="mb-1  fw-semibold">Daneil Scott</h4>
            <h6>Calling...</h6>
            <div className="mt-5">
              <div className="row">
                <div className="col-4">
                  <a className="icon icon-shape rounded-circle mb-0 me-3" href="#">
                    <i className="fas fa-volume-up bg-light text-dark" />
                  </a>
                </div>
                <div className="col-4">
                  <a className="icon icon-shape rounded-circle text-white mb-0 me-3" href="#" data-bs-dismiss="modal" aria-label="Close">
                    <i className="fas fa-phone text-white bg-success" />
                  </a>
                </div>
                <div className="col-4">
                  <a className="icon icon-shape  rounded-circle mb-0 me-3" href="#">
                    <i className="fas fa-microphone-slash bg-light text-dark" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-footer ht-40">
      <div className="container-fluid pd-t-0-f ht-100p">
        <span>Copyright © 2021 <a href="#">Valex</a>. Designed by <a href="https://www.spruko.com/">Spruko</a> All rights reserved.</span>
      </div>
    </div>
  </div>
</div>

		<a href="#top" id="back-to-top"><i class="las la-angle-double-up"></i></a>
        </React.Fragment>
    )
}
