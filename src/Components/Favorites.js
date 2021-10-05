import React, { Component } from 'react';
import axios from 'axios';
import FavCards from "./FavCards"

export class Favorites extends Component {

    constructor(props){
        super(props);
        this.state={
            favApiData:[],
            showFavData:false,
            url:process.env.REACT_APP_URL_SERVER,
            slugName:'',
            watchName:'',
            showFormData:false
        }
    }



    componentDidMount=async()=>{
        const request= await axios.get(`${this.state.url}/get-fav`)
        this.setState({
            favApiData:request.data,
            showFavData:true,
        })
    } 

    handleDelete=async(slug)=>{
        await axios.delete(`${this.state.url}/delete-fav/${slug}`);
        const newFavdataApi=this.state.favApiData.filter(obj=>obj.slug!==slug);
        this.setState({
            favApiData:newFavdataApi
        })
    }
    showForm=async(watchName,slug)=>{
        this.setState({
            watchName:watchName,
            slugName:slug,
            showFormData:true
        })
    }
    

    render() {
        return (
            <div>
                <h1>MY FAV</h1>
                <>{
                    this.state.showFavData&& (<FavCards favApiData={this.state.favApiData} handleDelete={this.handleDelete}/>)
                }
                
                
               </>
                
            </div>
        )
    }
}

export default Favorites
