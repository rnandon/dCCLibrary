import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "The Road", author: "Cormac McCarthy"},
            {title: "1984", author: "George Orwell"},
            {title: "Brave New World", author: "Aldous Huxley"},
            {title: "Dune", author: "Frank Herbert"},
            {title: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien"},
            {title: "The Pragmatic Programmer", author: "Andrew Hunt, David Thomas"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/* Button here to move to the previous book viewed */}
                    </div>
                    <div className="col-md-4">
                        {/* Display book with cover */}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/* Button here to move to the previous book viewed */}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;