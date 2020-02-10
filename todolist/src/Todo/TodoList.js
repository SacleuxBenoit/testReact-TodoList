import React, {Component} from 'react';

class TodoList extends Component {
    constructor(){
        super();
        this.state={
            userInput="",
            items=[''],
        };
    }
    render(){
        return(
            <div><h1>Ma TodoList</h1>
            <form>
                <input value={this.state.userInput}type="text" placeholder="Renseigner un item"></input>
                <button>Ajouter</button>
            </form>
            </div>
        );
    }
}

export default TodoList;