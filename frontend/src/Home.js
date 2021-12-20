import React from "react";
import Snippet from "./Snippet";
import './App.css';

import { IoCodeSharp } from 'react-icons/io5';
import { IoCodeSlashSharp } from 'react-icons/io5';



export default class Home extends React.Component {
    state = {
        snippets: [],
        searchText: "",
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/get")
        .then(response => response.json())
        .then(data => {
            if(data){
                const dataRes = JSON.parse(data.data);
                this.setState({
                    snippets: dataRes,
                });
            }
            
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleSearch = (event) => {
        let val = event.target.value;
        
            this.setState({
                searchText: val,
            });
            
            if(val === '') {
                val = "all"
            }

            fetch("http://localhost:3001/api/filter/" + val)
                .then(response => response.json())
                .then(data => {
                    if(data){
                        const dataRes = JSON.parse(data.data);
                        this.setState({
                            snippets: dataRes,
                        });
                    }
            
            })
            .catch(err => {
                console.log(err);
            });
        
    }

    render() {
        const {snippets, searchText} = this.state;
        return(
            <div>
                <div className="navbar">
                    <div className="navbar-content">
                        <div className="header-content">
                            <div className="icon"><IoCodeSharp /></div>
                            <h1 className="header">Snippets</h1>
                            <div className="icon"><IoCodeSlashSharp /></div>
                        </div>
                        <div>
                            <input className="search-input" type="text" name="search" id="search" placeholder="Search snippets" value={searchText} onChange={this.handleSearch}/>
                        </div>
                        <div className="sign">
                            Sign In
                        </div>
                    </div>
                </div>

                <div>
                    {
                        snippets && snippets.length>0 && snippets.map(item=>item && <Snippet data={item}/>)
                    }
                </div>
            </div>
        )
    }
}