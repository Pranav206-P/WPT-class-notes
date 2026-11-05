import { Component } from "react";

export class UsersList extends Component {
    constructor() {
        super();
        console.log("inside cons of Userslist");
        this.state = {
            users: []
        }
    }

    render() {
        console.log("inside render of Userslist");
        return (
            <div>
                <h4>List of Users</h4>
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.length === 0 ? <h4>Loading...</h4> : this.state.users.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            </div>
        )
    }

    async componentDidMount() {
        console.log("inside did mount of Userslist");
        try {
            setTimeout(async () => {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const usersData = await response.json();
                console.log(usersData);
                this.setState({ users: usersData });
            }, 3000);

        } catch (error) {
            console.log(error);

        }
    }
}