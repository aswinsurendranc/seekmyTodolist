import React, { Component, Fragment } from 'react';
import "./Search.css";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       
        return ( 
            <Fragment>
                <div id="list">
                 
                        {this.props.item.map(list=>(
                           <li>{list}</li>
                        ))
                        
                        
                        }
                 
                  
                </div>
            </Fragment>
         );
    }
}
 
export default Search;