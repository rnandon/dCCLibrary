import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import FooterBar from './FooterBar/FooterBar';

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

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length) {
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0) {
            tempBookNumber = this.books.length-1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook} />
                <FooterBar />
            </div>
        )
    }
}

export default App;