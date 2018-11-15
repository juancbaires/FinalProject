import React, { Component } from 'react';
import './User.css'
import {Link} from 'react-router-dom'

class Show extends Component {

    render() {
      let { user } = this.props
        return (
            <div className="show-page">
                {/* user.username is undefined the first time, so nothing gets rendered. The second time, both are truthy so JS returns the second truthy, which is user.username.toUpperCase()  */}
                <h1 className="show-title">{user.username && "Hey " + user.username.charAt(0).toUpperCase() + user.username.slice(1)}</h1>
                <form onSubmit={this.handleSubmit} className="LoginForm">
                    <div className="foods">
                        <div className="foods--list">
                            <h1>Person 1's foods</h1>
                            <label htmlFor="">Food 1</label>
                            <input className="foodInput" spellcheck="true" required name="food1" onChange={this.handleInput} placeholder={user.food1}></input>
                            <label htmlFor="">Food 2</label>
                            <input className="foodInput" required name="food2" spellcheck="true" onChange={this.handleInput} placeholder={user.food2}></input>
                            <label htmlFor="">Food 3</label>
                            <input className="foodInput" spellcheck="true" required name="food3" onChange={this.handleInput} placeholder={user.food3}></input>
                        </div>
                        <div className="foods--list">
                            <h1>Person 2's foods</h1>
                            <label htmlFor="">Food 1</label>
                            <input className="foodInput" required name="food4" spellcheck="true" onChange={this.handleInput} placeholder={user.food4}></input>
                            <label htmlFor="">Food 2</label>
                            <input className="foodInput" spellcheck="true" required name="food5" onChange={this.handleInput} placeholder={user.food5}></input>
                            <label htmlFor="">Food 3</label>
                            <input className="foodInput" spellcheck="true" name="food6" onChange={this.handleInput} required placeholder={user.food6}></input>
                        </div>
                    </div>
                    <button type="submit" className="loginButton">Save Foods</button>
                    <Link to="/ateball" className="loginButton">Ateball me!</Link>
                  </form>
            </div>
        );
    }
}

export default Show;