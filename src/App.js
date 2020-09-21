import React, { Component, Fragment } from 'react';
import Search from './Component/Search';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            userInput:" ",
            list:[]
         }
    
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    // use here ok ... juset two thing need to add here 
    // that it's over it's to be lie..ok

     handleSubmit = (e) =>{
        e.preventDefault();
       if(this.state.userInput !==""){

        // const userInput = { 
  
          
      
        //     // Add a user value to list 
        //     list : this.state.userInput 
        //   }; 
      
          // Update list 
          const list = [...this.state.list]; 
          list.push(this.state.userInput); 
      
          // reset state 
          this.setState({ 
            list, 
            userInput:""
          }); 
       }
    //    this.setState({term:""});
   
    }
    render() { 
        return ( 
            <Fragment>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text"
                            value = {this.state.userInput}
                             plceholder="Search.." name="search" onChange={(event)=> this.setState({userInput: event.target.value })
                             }/> 
                    <button type="submit" >button</button>
                </form>
                </div>
                <div>
                {/*  */}
                    <Search item={this.state.list}/>
                </div>
            </Fragment>
         );
    }
}
 
export default App;