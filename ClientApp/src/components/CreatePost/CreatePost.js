import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';
import { Button } from '@material-ui/core';



/*
 * Component for creating a post
 *  
 * */
export class CreatePost extends Component {
    static displayName = CreatePost.name;


    constructor(props) {
        super(props);

        // Can change this slightly later to take arguments -- that way we can do drafts.
        this.state = { postType: "Post", isAnonymous: false, shareWith: "", selectedTag: "", title: "", body: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
     * 
     * Handles the event that the post button was clicked. 
     * This will check that all required fields are filled out.
     * If so, it notifies the user and takes them back to being
     * able to view each post. Otherwise, it notifies them what
     * needs to be filled in still.
     * 
     */
    handleSubmit(event) {

        alert('share with: ' + this.state.shareWith + '\n is anon: ' + this.state.isAnonymous
            + + ' \nselected tag: ' + this.state.selectedTag + "\n title : " + this.state.title + "\n body: " + this.state.body);
        event.preventDefault();

        this.props.SwapOutCreateFn();


    }

    /**
     * Cancels the post and swaps the screen back to where it was before.
     * 
     * In future - make it so drafts are saved here......
     * 
     * */
    handleCancel() {
        this.props.SwapOutCreateFn();
    }

    handleInputChange(event) {
        const target = event.target;
        let value;
        const name = target.name;
        value = target.value;
        this.setState({ [name]: value });

        if (event.target.name == "body")
        {
            this.setState({ [name]: value });
        }
        //this.setState({ upvotes: "hi"});

        /*const testing = event.target.tagName;
        const target = event.target;
        let value;
        const name = target.name;
        // Check if it was the checkbox or not.
        if (target.type === 'checkbox') {
            value = target.checked;
        }
        else {
            // Must be one of the dropdowns.
            value = target.value;
        }


        this.setState({ [name]: value }); */
    }

    render() {
        return (
            <div>
                <div className="w-100 justify-content-center" style={{ margin: '0 auto', position: 'relative' }}>
                    <form onSubmit={this.handleSubmit}>

                        <label>
                            Share With: &emsp;
                            <select value={this.state.shareWith} name="shareWith" onChange={this.handleInputChange}>
                                <option value="Everyone">Everyone</option>
                                <option value="Instructors Only">Instructors Only</option>
                                <option value="Professor Only">Professor Only</option>
                            </select>
                        </label>

                        <br />
                        <br />

                        <label>
                            Title: &emsp;
                            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                        </label>

                        <br />
                        <br />

                        <textarea className="w-100" name="body" value={this.state.body} onChange={this.handleInputChange} />

                        <div className="btn-group d-flex" role="group">
                            <input className="w-100 m-1 btn accent-color text-white" type="submit" value="Post" />
                            <button className="w-100 m-1 btn white-with-red-outline-button" type="button" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}