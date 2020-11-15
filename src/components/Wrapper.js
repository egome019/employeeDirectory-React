import React, { Component } from "react";
import NavRow from "./NavRow";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class Wrapper extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }
    
    nav = [
        {name: "Image", width: "10%"},
        {name: "Name", width: "10%"},
        {name: "DOB", width: "10%"},
        {name: "Email", width: "20%"},
        {name: "Phone", width: "20%"}
    ]

    componentDidMount() {
        API.search().then(res => {
            this.setState({
                users: res.data.results,
                filteredUsers: res.data.results
            });
        });
    }

    Sort = heading => {
        if(this.state.order === "descend"){
            this.setState({
                order: "ascend" 
            })
        }else {
            this.setState({
                order: "descend"
            })
        }


        const compareOrder = (a,b) => {
            if (this.state.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                }else if (b[heading] === undefined){
                    return -1;
                }else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                }else{
                    return a[heading]-b[heading]
                }
            }else{
                if (a[heading] === undefined) {
                    return 1;
                }else if (b[heading] === undefined){
                    return -1;
                }else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                }else{
                    return b[heading]-a[heading]
                }
            }
        }

        const userSort = this.state.filteredUsers.sort(compareOrder);
        this.setState({filteredUsers: userSort});
    }

    handleSearch = e => {
        const newValue = e.target.value;
        const filtered = this.state.users.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(newValue.toLowerCase()) !== -1;
        })
        this.setState({filteredUsers: filtered});
    }

    render() {
        return (
            <div>
                <header className="py-4 bg-dark mb-1 border-bottom border-danger text-light w-100">
                    <h1 className="text-center">Employee Directory</h1>
                    <p className="text-center">Click on carrots to filter by heading or use the search box to narrow your results.</p>
                </header>
                <SearchForm handleSearch={this.handleSearch} />
                <div className="w-100">
                    <NavRow nav={this.nav}
                    users={this.state.filteredUsers}
                    Sort={this.Sort}
                    />
                </div>
            </div>
        )
    }
}

export default Wrapper;