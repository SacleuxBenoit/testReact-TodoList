import React, {Component} from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput:'',
            items:[]
        };
    }

    onChange(event){
        console.log(event.target.value)
    }
    render(){
        return(
            <div><h1>Ma TodoList</h1>
            <form>
                <input 
                    value={this.state.userInput}
                    type="text" 
                    placeholder="Renseigner un item"
                    onChange={this.onChange.bind(this)} 
                >
                </input>
                <button>Ajouter</button>
            </form>
            </div>
        );
    }
}

export default TodoList;