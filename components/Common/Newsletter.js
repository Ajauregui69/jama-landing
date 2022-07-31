import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="newsletter-wrap">
                                <h2>Sign Up To The Free Newsletter</h2>

                                <form className="newsletter-form">
                                    <input type="email" className="form-control" placeholder="Your Email" name="email" required />
                                    <button className="default-btn" type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsletter;