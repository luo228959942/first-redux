import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
    render() {
        const {color, text, changeText, changeTColor} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div style={{'color': color}}>
                    {text}
                </div>
                <button onClick={changeText.bind(this,text)}>改变文字</button>
                <button onClick={changeTColor.bind(this,color)}>改变颜色</button>
            </div>
        );
    }
}

function mapStatrToProps(state) {
    return{
        text:state.text,
        color:state.color
    }
}

function mapDispatchToProps(dispatch) {
    return{
        changeTColor:(color)=>{
            if(color==="red"){
                dispatch({type:"CHANGE_COLOR",color:"blue"})
            }else {
                dispatch({type:"CHANGE_COLOR",color:"red"})
            }

        },
        changeText:(text)=>{
            if(text==="改变后的文字"){
                dispatch({type:"CHANGE_TEXT",text:"默认文字"})
            }else {
                dispatch({type:"CHANGE_TEXT",text:"改变后的文字"})
            }

        }
    }
}

export default connect(mapStatrToProps,mapDispatchToProps)(App);
