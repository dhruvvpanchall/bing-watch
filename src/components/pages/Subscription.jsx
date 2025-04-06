

function Subscription(){
    return(
        <>
         {/* Choose Plan */}
         <section className="subscrition">
            <div className="container">
                <div className="common_top">
                    <div className="faq_title">
                        <h2 className="heading_title">Choose the plan that's right for you</h2>
                        <p className="heading_text">Join BingeWatch and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop<br></br>entertainment!</p>
                    </div>
                    <div className="plan_option">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Monthly</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Yearly</button>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                    <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="plan_boxes">
                                    <div className="plan_box" data-aos="fade-right" data-aos-duration="1500">
                                        <h5>Basic Plan</h5>
                                        <p className="heading_text">Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                        <h1>Rs.149.00<span>/month</span></h1>
                                        <div className="plan_btn" id="month_149">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_14kfZDefv9pIcy45ks" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan_box" data-aos="fade-up" data-aos-duration="1500">
                                        <h5>Standard Plan</h5>
                                        <p className="heading_text">Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                                        <h1>Rs.499.00<span>/month</span></h1>
                                        <div className="plan_btn" id="month_499">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_4gwbJn0oFgSa41y3cj" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan_box" data-aos="fade-left" data-aos-duration="1500">
                                        <h5>Premium Plan</h5>
                                        <p className="heading_text">Access to a widest selection of movies and shows, including all new releases and Offline Viewing</p>
                                        <h1>Rs.799.00<span>/month</span></h1>
                                        <div className="plan_btn" id="month_799">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_bIY00F9ZfdFYeGcaEK" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                            <div className="plan_boxes">
                                    <div className="plan_box">
                                        <h5>Basic Plan</h5>
                                        <p className="heading_text">Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                        <h1>Rs.1499.00<span>/Year</span></h1>
                                        <div className="plan_btn">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_6oEeVz4EV59sapWaEJ" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan_box">
                                        <h5>Standard Plan</h5>
                                        <p className="heading_text">Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                                        <h1>Rs.1999.00<span>/Year</span></h1>
                                        <div className="plan_btn">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_5kA8xb3AR7hAcy45ko" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan_box">
                                        <h5>Premium Plan</h5>
                                        <p className="heading_text">Access to a widest selection of movies and shows, including all new releases and Offline Viewing</p>
                                        <h1>Rs.2499.00<span>/Year</span></h1>
                                        <div className="plan_btn">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_fZeeVz1sJ1Xg55C7sv" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Choose Plan */}

        {/* Plan Details */}
        <section className="plan_sec" data-aos="fade-up" data-aos-duration="1500">
            <div className="container">
                <div className="">
                    <h2 className="heading_title">Compare our plans and find the right one for you</h2>
                    <p className="heading_text">BingeWatch offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
                </div>
                <div className="table d-md-block d-none">
                    <table>
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Basic</th>
                                <th>Standard <a href="#!" className="top">Popular</a></th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Price</td>
                                <td>Rs.149.00/Month</td>
                                <td>Rs.499.00/Month</td>
                                <td>Rs.799.00/Month</td>
                            </tr>
                            <tr>
                                <td>Content</td>
                                <td>Access to a wide selection of movies and shows, including some new releases.</td>
                                <td>Access to a wider selection of movies and shows, including most new releases and exclusive content</td>
                                <td>Access to a widest selection of movies and shows, including all new releases and Offline Viewing</td>
                            </tr>
                            <tr>
                                <td>Devices</td>
                                <td>Watch on one device simultaneously</td>
                                <td>Watch on Two device simultaneously</td>
                                <td>Watch on Four device simultaneously</td>
                            </tr>
                            <tr>
                                <td>Free Trail</td>
                                <td>7 Days</td>
                                <td>7 Days</td>
                                <td>7 Days</td>
                            </tr>
                            <tr>
                                <td>Cancel Anytime</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>HDR</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Dolby Atmos</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Ad - Free</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Offline Viewing</td>
                                <td>No</td>
                                <td>Yes, for select titles.</td>
                                <td>Yes, for all titles.</td>
                            </tr>
                            <tr>
                                <td>Family Sharing</td>
                                <td>No</td>
                                <td>Yes, up to 5 family members.</td>
                                <td>Yes, up to 6 family members.</td>
                            </tr>
                        </tbody>
                       
                    </table>
                </div>
                <div className="d-md-none d-block">
                <div className="plan_option" id="plan_details">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-basic-tab" data-bs-toggle="pill" data-bs-target="#pills-basic" type="button" role="tab" aria-controls="pills-basic" aria-selected="true">Basic</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-standard-tab" data-bs-toggle="pill" data-bs-target="#pills-standard" type="button" role="tab" aria-controls="pills-standard" aria-selected="false">Standard</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Premium-tab" data-bs-toggle="pill" data-bs-target="#pills-Premium" type="button" role="tab" aria-controls="pills-Premium" aria-selected="false">Premium</button>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                    <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-basic" role="tabpanel" aria-labelledby="pills-basic-tab" tabindex="0">
                                <div className="detail_plan_box">
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Price</span>
                                            <h4>Rs.149.00/Month</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>Free Trail</span>
                                            <h4>7Days</h4>
                                        </div>
                                    </div>
                                    <div className="">
                                        <span>Content</span>
                                        <h4>Access to a wider selection of movies and shows, including most new releases and exclusive content</h4>
                                    </div>
                                    <div className="">
                                        <span>Devices</span>
                                        <h4>Watch on Two device simultaneously</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Cancel Anytime</span>
                                            <h4>Yes</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>HDR</span>
                                            <h4>Yes</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Dolby Atmos</span>
                                            <h4>Yes</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>Ad - Free</span>
                                            <h4>No</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Offline Viewing</span>
                                            <h4>No</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>Family Sharing</span>
                                            <h4>No</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-standard" role="tabpanel" aria-labelledby="pills-standard-tab" tabindex="0">
                                <div className="detail_plan_box">
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Price</span>
                                            <h4>Rs.499.00/Month</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>Free Trail</span>
                                            <h4>7Days</h4>
                                        </div>
                                    </div>
                                    <div className="">
                                        <span>Content</span>
                                        <h4>Access to a wider selection of movies and shows, including most new releases and exclusive content</h4>
                                    </div>
                                    <div className="">
                                        <span>Devices</span>
                                        <h4>Watch on Two device simultaneously</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Cancel Anytime</span>
                                            <h4>Yes</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>HDR</span>
                                            <h4>Yes</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Dolby Atmos</span>
                                            <h4>Yes</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>Ad - Free</span>
                                            <h4>Yes</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Offline Viewing</span>
                                            <h4>Yes, for select titles.</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>Family Sharing</span>
                                            <h4>5 family members.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Premium" role="tabpanel" aria-labelledby="pills-Premium-tab" tabindex="0">
                                <div className="detail_plan_box">
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Price</span>
                                            <h4>Rs.799.00/Month</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>Free Trail</span>
                                            <h4>7Days</h4>
                                        </div>
                                    </div>
                                    <div className="">
                                        <span>Content</span>
                                        <h4>Access to a wider selection of movies and shows, including most new releases and exclusive content</h4>
                                    </div>
                                    <div className="">
                                        <span>Devices</span>
                                        <h4>Watch on Two device simultaneously</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Cancel Anytime</span>
                                            <h4>Yes</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>HDR</span>
                                            <h4>Yes</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Dolby Atmos</span>
                                            <h4>Yes</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>Ad - Free</span>
                                            <h4>Yes</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span>Offline Viewing</span>
                                            <h4>Yes, for All titles.</h4>
                                        </div>
                                        <div className="col-6">
                                            <span>Family Sharing</span>
                                            <h4>6 family members.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/* Plan Details */}

        {/* Free Trail */}
        <section className='free_trail_sec' data-aos="fade-left-in" data-aos-duration="1500">
            <div className="container">
                <div className="free_trail">
                    <div className="common_top">
                        <div className="faq_title">
                            <h2 className="heading_title">Start your free trial today!</h2>
                            <p className="heading_text">This is a clear and concise call to action that encourages users to sign up for a free trial of BingeWatch.</p>
                        </div>
                        <div className="">
                            <a href="/Subscriptions">Start a Free Trail</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Free Trail */}
        </>
    )
}

export default Subscription