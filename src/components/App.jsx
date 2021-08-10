import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import FooterBar from './FooterBar/FooterBar';
import NewBookForm from './NewBookForm/NewBookForm';

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
            bookNumber: 0,
            newBookForm: false
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

    addBook = (book) => {
        this.books.push(book)
    }

    toggleNewBookForm = () => {
        let currentFormState = this.state.newBookForm
        this.setState({
            newBookForm: !currentFormState
        })
    }

    render(){
        if(!this.state.newBookForm){
            return (
                <div className="container-fluid">
                    <TitleBar toggleForm={this.toggleNewBookForm} />
                    <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook} />
                    <FooterBar />
                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    <TitleBar toggleForm={this.toggleNewBookForm}/>
                    <NewBookForm addBook={this.addBook} toggleForm={this.toggleNewBookForm}/>
                    <FooterBar />
                </div>
            )
        }
    }
}

export default App;