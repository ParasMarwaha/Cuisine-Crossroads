function BreadCrumb({title}){
    return(
        <>
             <div className="ht_bradcaump_area bg-image--24 py-5">
          <div className="bradcaump_inner text-center brad_white">
              <div></div>
              <div className="ht_bradcaump_wrap d-flex align-items-center">
                  <h2 className="bradcaump-title "></h2>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-2 col-md-2 col-sm-2">
                              <nav className="bradcaump-inner"></nav>
                              <h1>{title}</h1>
                              <div>
                                  <h2 className="bradcaump-title"></h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

        </>
    )
}

export default BreadCrumb