import React, {Component} from 'react';

class TodoList extends Component {
    render(){
        return(
            <div><h1>Ma TodoList</h1>
            <form>
                <input type="text" placeholder="Renseigner un item"></input>
            </form>
            </div>
        );
    }
}

export default TodoList;