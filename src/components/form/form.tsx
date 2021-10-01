import React, { Component } from "react"

interface State {
    to: string,
    title: string,
    message: string,
}

interface Props {
    getNewText(State: Object): void
}


class Form extends Component<Props, State> {

    state = {
        to: "",
        title: "",
        message: ""
    }

    onChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>):void => {

        switch(evt.target.name) {
            case "to":
                this.setState({to: evt.target.value})
                break;
            case "title":
                this.setState({title: evt.target.value})
                break;
            case "message":
                this.setState({message: evt.target.value})
            break;
        }
        
    }


    onSubmit = (evt:React.FormEvent<HTMLFormElement>):void => {
        evt.preventDefault();
        this.props.getNewText(this.state);  //callback
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="wrapper">
                <input required name="to" type="text" placeholder="To..." value={this.state.to} onChange={this.onChange}/><br />
                <input required name="title" type="text" placeholder="Title..." value={this.state.title} onChange={this.onChange}/><br />
                <textarea required name="message" placeholder="Message..." value={this.state.message} onChange={this.onChange} rows={10} cols={20}/><br />
                <button type="submit">Save</button>
            </form>
        )
    }
};


export default Form;