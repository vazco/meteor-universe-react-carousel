import Slider from '../index';

var SingleItem = React.createClass({
    getInitialState: function () {
        return {count: 10};
    },
    click: function () {
        this.setState({count: this.state.count + 1});
    },
    render: function () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div onClick={this.click}><h3 className="carousel-demo-box">{this.state.count}</h3></div>
                    <div><h3 className="carousel-demo-box">2</h3></div>
                    <div><h3 className="carousel-demo-box">3</h3></div>
                    <div><h3 className="carousel-demo-box">4</h3></div>
                    <div><h3 className="carousel-demo-box">5</h3></div>
                    <div><h3 className="carousel-demo-box">6</h3></div>
                </Slider>
            </div>
        );
    }
});

var MultipleItems = React.createClass({

    render: function () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div>
                <h2> Multiple items </h2>
                <Slider {...settings}>
                    <div><h3 className="carousel-demo-box">1</h3></div>
                    <div><h3 className="carousel-demo-box">2</h3></div>
                    <div><h3 className="carousel-demo-box">3</h3></div>
                    <div><h3 className="carousel-demo-box">4</h3></div>
                    <div><h3 className="carousel-demo-box">5</h3></div>
                    <div><h3 className="carousel-demo-box">6</h3></div>
                    <div><h3 className="carousel-demo-box">7</h3></div>
                    <div><h3 className="carousel-demo-box">8</h3></div>
                    <div><h3 className="carousel-demo-box">9</h3></div>
                </Slider>
            </div>
        );
    }
});

var Responsive = React.createClass({
    render: function () {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <div>
                <h2> Responsive </h2>
                <Slider {...settings}>
                    <div><h3 className="carousel-demo-box">1</h3></div>
                    <div><h3 className="carousel-demo-box">2</h3></div>
                    <div><h3 className="carousel-demo-box">3</h3></div>
                    <div><h3 className="carousel-demo-box">4</h3></div>
                    <div><h3 className="carousel-demo-box">5</h3></div>
                    <div><h3 className="carousel-demo-box">6</h3></div>
                    <div><h3 className="carousel-demo-box">7</h3></div>
                    <div><h3 className="carousel-demo-box">8</h3></div>
                </Slider>
            </div>
        );
    }
});


var CenterMode = React.createClass({
    render: function () {
        var settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 7,
            speed: 500,
            beforeChange: function (index) {
                console.log('Slider will change from:' + index);
            },
            afterChange: function (currentSlide) {
                console.log('Slider Changed to :' + (currentSlide + 1));
            }
        };
        return (
            <div>
                <h2>Center Mode</h2>
                <p>Fix flicker issue at warping</p>
                <Slider {...settings}>
                    <div><h3 className="carousel-demo-box">1</h3></div>
                    <div><h3 className="carousel-demo-box">2</h3></div>
                    <div><h3 className="carousel-demo-box">3</h3></div>
                    <div><h3 className="carousel-demo-box">4</h3></div>
                    <div><h3 className="carousel-demo-box">5</h3></div>
                    <div><h3 className="carousel-demo-box">6</h3></div>
                    <div><h3 className="carousel-demo-box">7</h3></div>
                    <div><h3 className="carousel-demo-box">8</h3></div>
                    <div><h3 className="carousel-demo-box">9</h3></div>
                </Slider>
            </div>
        );
    }
});

var AutoPlay = React.createClass({
    render: function () {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div>
                <h2>Auto Play</h2>
                <Slider {...settings}>
                    <div><h3 className="carousel-demo-box">1</h3></div>
                    <div><h3 className="carousel-demo-box">2</h3></div>
                    <div><h3 className="carousel-demo-box">3</h3></div>
                    <div><h3 className="carousel-demo-box">4</h3></div>
                    <div><h3 className="carousel-demo-box">5</h3></div>
                    <div><h3 className="carousel-demo-box">6</h3></div>
                </Slider>
            </div>
        );
    }
});

var VariableWidth = React.createClass({
    render: function () {
        var settings = {
            className: 'slider variable-width',
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };
        return (
            <div>
                <h2>Variable width</h2>
                <Slider {...settings}>
                    <div style={{width: 100}}><p className="carousel-demo-box">100</p></div>
                    <div style={{width: 200}}><p className="carousel-demo-box">200</p></div>
                    <div style={{width: 75}}><p className="carousel-demo-box">75</p></div>
                    <div style={{width: 300}}><p className="carousel-demo-box">300</p></div>
                    <div style={{width: 225}}><p className="carousel-demo-box">225</p></div>
                    <div style={{width: 175}}><p className="carousel-demo-box">175</p></div>
                </Slider>
            </div>
        );
    }
});

var AdaptiveHeight = React.createClass({
    render: function () {
        var settings = {
            className: '',
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        };
        return (
            <div>
                <h2>Adaptive height</h2>
                <Slider {...settings}>
                    <div><h3 className="carousel-demo-box">1</h3></div>
                    <div>
                        <h3 className="carousel-demo-box">2</h3>
                        <p>Hello</p>
                    </div>
                    <div>
                        <h3 className="carousel-demo-box">3</h3>
                        <p>See ....</p>
                        <p>Height is adaptive</p>
                    </div>
                    <div>
                        <h3 className="carousel-demo-box">4</h3>
                    </div>
                    <div>
                        <h3 className="carousel-demo-box">5</h3>
                    </div>
                    <div>
                        <h3 className="carousel-demo-box">6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
});

var LazyLoad = React.createClass({

    render: function () {
        var settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Lazy Load</h2>
                <Slider {...settings}>
                    <div><img src="http://placehold.it/350x150/f0f00f/0000000" /></div>
                    <div><img src="http://placehold.it/350x150/ff0000/000ff00" /></div>
                    <div><img src="http://placehold.it/350x150/00f000/f00000f" /></div>
                    <div><img src="http://placehold.it/350x150" /></div>
                </Slider>
            </div>
        );
    }
});

var Fade = React.createClass({

    render: function () {
        var settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2>Fade</h2>
                <Slider {...settings}>
                    <div><img src="http://placehold.it/350x150" /></div>
                    <div><img src="http://placehold.it/350x150/00f0ff/00f00f" /></div>
                    <div><img src="http://placehold.it/350x150/fff0ff/0f0f00" /></div>
                    <div><img src="http://placehold.it/350x150/f0f00f/000000" /></div>
                </Slider>
            </div>
        );
    }
});

export default React.createClass({
    render: function () {
        //need to add variable width and center mode demo
        return (
            <div className='content'>
                <style>
                    {".carousel-demo-box {" +
                    "background: #0055ff;" +
                    "color: #fff;" +
                    "font-size: 36px;" +
                    "line-height: 80px;" +
                    "margin: 10px;" +
                    "padding: 2%;" +
                    "position: relative;" +
                    "text-align: center;"+
                    "}"}
                </style>
                <SingleItem />
                <MultipleItems />
                <Responsive />
                <CenterMode />
                <AutoPlay />
                <VariableWidth />
                <AdaptiveHeight />
                <LazyLoad />
                <Fade />
            </div>
        );
    }
});