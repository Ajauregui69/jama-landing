import React, { Component } from 'react';

class PageBanner extends Component {
    render() {

        let { pageTitle } = this.props;
        let { pageSubtitle } = this.props;

        return (
            <div className="page-title-area item-bg1">
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <h4>{pageSubtitle}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBanner;