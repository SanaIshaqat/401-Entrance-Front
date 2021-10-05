import React, { Component } from 'react'
import axios from 'axios';
import ApiCards from './ApiCards'
class Home extends Component {
constructor(props){
    super(props);
    this.state={
        apiData:[],
        showData:false,
        url:process.env.REACT_APP_URL_SERVER,
    }
}

componentDidMount=async()=>{
    const request= await axios.get(`${this.state.url}/get-data`)
    this.setState({
        apiData:request.data,
        showData:true,
    })
}
 createFav =async(obj)=>{
     await axios.post(`${this.state.url}/create-fav`,obj)
 }

    render() {
        return (
            <div>
                <h1>MY HOME PAGE</h1>
                <>{
                    this.state.showData&& (<ApiCards apiData={this.state.apiData} createFav={this.createFav} />)
                }
                
                
               </>
            </div>
        )
    }
}

export default Home
