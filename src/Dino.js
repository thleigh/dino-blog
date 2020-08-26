import React, {Component} from 'react';
import Comment from './Comment.js'
import { queryAllByAttribute } from '@testing-library/react';




class Dino extends Component {
  //Set an intial state in your component that contains content or body for this post
  constructor(props) {
    super()
    this.state = {
      body: props.body,
      tempBody: ''
    }
    // this.handleBodyEdit = this.handleBodyEdit.bind(this)
  }

  handleBodyEdit = () => {
    let input = prompt("Edit the body of this article")
    console.log(input)
    this.setState({body: input})
  }

  handleFormEdit = e => {
    e.preventDefault()
    this.setState({body: this.state.tempBody})
  }

  render() {
    let allComments = this.props.comments.map((c, i)=> {
      return <Comment key={i} body={c}/>
    })
    return (
      <>
        <h1>{this.props.title}</h1>
        <h4>By: {this.props.author}</h4>
        <p>{this.state.body}</p>
        <hr />
        <form onSubmit={this.handleFormEdit}>
          <h5>New Body Content</h5>
          <input type="text" name="body" onChange={e => this.setState({tempBody: e.target.value})}/>
          <input type="submit" />
        {/* // <button onClick={this.handleBodyEdit}>Edit the body of this article</button> */}
        </form>

        {allComments}
      </>
    );
  }
}

export default Dino;
