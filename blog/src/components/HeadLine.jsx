import React from 'react'

export default function HeadLine() {
    return (
        <div className="headline">
            <div className="nav" id="headline-nav">
                <a className="left carousel-control" role="button" data-slide="prev">
                    <span className="ion-ios-arrow-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" role="button" data-slide="next">
                    <span className="ion-ios-arrow-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="owl-carousel owl-theme owl-loaded owl-drag" id="headline">
                <div className="item">
                    <a href="#"><div className="badge">Tip!</div> Vestibulum ante ipsum primis in faucibus orci</a>
                </div>
                <div className="item">
                    <a href="#">Ut rutrum sodales mauris ut suscipit</a>
                </div>
            </div>
        </div>
    )
}
