import { useEffect, useState } from "react"

export function UsersData() {

    const [users, setUsers] = useState([]);

    // for the first time all the useEffects are going to be executed

    async function fetchUsersData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const usersData = await response.json();
            setUsers(usersData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsersData()
    }, []); // componentDidMount


    return (
        <div>
            <h2>List of Users</h2>
            <table  border={1} cellPadding={10} cellSpacing={0}>
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
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
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