import React, {Component} from 'react';

class PostForm extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            title: null,
            body: null
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange = () =>{


    };


    render(){

        return(
            <div>
               <form>
                   <div>
                       <label> Title:</label><br/>
                       <input type='text' name='title'
                              value={this.state.title}
                              onChange={this.onChange}/>
                   </div>
                   <br/>
                   <div>
                       <label> Body:</label><br/>
                       <textarea name='body' value={this.state.body}/>
                   </div>
                   <br/>
                   <button type='submit'> Submit </button>
               </form>
            </div>
        );
    }

}

export default PostForm;