import React from "react";
import Controller from "./component/Controller";
import Display from "./component/Display";
import ZingTouch from 'zingtouch';
import './style/app.css';
import sound from "./assets/music/Senorita.mp3";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            click: false,
            activeItem: 'NowPlaying',
            activePage: 'Home',
            enter: 0,
            play: true
        }
    }

    //  rotate wheel function for change menu active 
    rotateWheel = () => {

        var containerElement = document.getElementById('inner-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;

        if (self.state.enter < 2) {
            activeRegion.bind(containerElement, 'rotate', function (event) {

                var newAngle = event.detail.distanceFromLast;


                if (newAngle < 0) {
                    change++;
                    if (change === 15) {
                        change = 0;
                        if (self.state.activePage === 'Home') {
                            if (self.state.activeItem === 'NowPlaying') {
                                self.setState({
                                    activeItem: "Music"
                                })
                            } else if (self.state.activeItem === 'Music') {
                                self.setState({
                                    activeItem: "Games"
                                })
                            } else if (self.state.activeItem === 'Games') {
                                self.setState({
                                    activeItem: "Settings"
                                })
                            } else if (self.state.activeItem === 'Settings') {
                                self.setState({
                                    activeItem: "NowPlaying"
                                })
                            }
                        } else if (self.state.activePage === 'Music') {
                            if (self.state.activeItem === 'MyMusic') {
                                self.setState({
                                    activeItem: "Artists"
                                })
                            } else if (self.state.activeItem === 'Artists') {
                                self.setState({
                                    activeItem: "MyMusic"
                                })
                            }
                        }
                    }
                } else {
                    change++;
                    if (change === 15) {
                        change = 0;
                        if (self.state.activePage === 'Home') {
                            if (self.state.activeItem === 'NowPlaying') {
                                self.setState({
                                    activeItem: "Settings"
                                })
                            } else if (self.state.activeItem === 'Music') {
                                self.setState({
                                    activeItem: "NowPlaying"
                                })
                            } else if (self.state.activeItem === 'Games') {
                                self.setState({
                                    activeItem: "Music"
                                })
                            } else if (self.state.activeItem === 'Settings') {
                                self.setState({
                                    activeItem: "Games"
                                })
                            }
                        } else if (self.state.activePage === 'Music') {
                            if (self.state.activeItem === 'MyMusic') {
                                self.setState({
                                    activeItem: "Artists"
                                })
                            } else if (self.state.activeItem === 'Artists') {
                                self.setState({
                                    activeItem: "MyMusic"
                                })
                            }
                        }
                    }
                }
            });
        }

    }

    // toggle function
    toggle = () => {
        if (this.state.activePage === 'MyMusic') {
            if (this.state.play === true) {
                this.state.audio.pause();
                this.setState({
                    play: false
                })
            } else {
                this.state.audio.play();
                this.setState({
                    play: true
                })
            }
        }
    }

    // change page function
    changePage = () => {

        if (this.state.activeItem === 'Music') {
            this.setState({
                activeItem: 'MyMusic',
                activePage: this.state.activeItem
            })
        } else if (this.state.activeItem === 'NowPlaying') {
            this.setState({
                activeItem: 'NowPlaying',
                activePage: 'MyMusic'
            })
        } else {
            this.setState({
                activeItem: this.state.activeItem,
                activePage: this.state.activeItem
            })
        }
    }

    // change display page to home screen function
    changePageToHomeScreen = () => {

        if (this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artists') {
            this.setState({
                activeItem: 'Music',
                activePage: 'Home'
            })
        } else {
            this.setState({
                activeItem: this.state.activeItem,
                activePage: 'Home'
            })
        }

    }

    //this function call when component render
    componentDidMount() {
        let audio = document.getElementsByClassName("audio-element")[0];
        this.setState({
            audio: audio,
        })
    }



    render() {
        return (
            <div className="app">
                <audio className="audio-element">
                    <source src={sound}></source>
                </audio>
                <Display activeItem={this.state.activeItem} activePage={this.state.activePage} audio={this.state.audio} />
                <Controller
                    showMenuList={this.showMenu}
                    rotateWheel={this.rotateWheel}
                    toggle={this.toggle}
                    changePage={this.changePage}
                    changePageToHomeScreen={this.changePageToHomeScreen}
                />

            </div>
        )
    }

}
export default App;
