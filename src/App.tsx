import { Component } from "react"
import Form from "./components/form/form"
import ShowText from "./components/message/message";
import './style.css';

interface State {
    to: string, 
    title: string, 
    message: string
}
class App extends Component<State> {
   
    state = {
        to: "",
        title: "",
        message: ""
    }
 
    saveNewText = (getText:Object):void => this.setState(getText);


    render() {
        return (
            <>
            <header>
                <section className="header-section left"><h1>Message</h1></section>
                <section className="header-section right"><h1>Machine</h1></section>
            </header>
            <main>
                <article className="white">
                    <Form getNewText={this.saveNewText}/>
                </article>
                <article className="black">
                    <div className="wrapper">
                        <h2>{this.state.to !== "" ? "To: " : "" }<ShowText showText={this.state.to}/></h2>
                        <h2>{this.state.title !== "" ? "Title: " : "" }<ShowText showText={this.state.title}/></h2>
                        <p>{this.state.message !== "" ? "Message: " : "" }<ShowText showText={this.state.message} /></p>
                    </div>
                </article>
            </main>
            </>
            
        )
    }
}


export default App;