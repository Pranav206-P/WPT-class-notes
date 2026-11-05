import { Counter } from "./Counter"
import { ExpensiveCalculation } from "./ExpensiveCalculation"
import { Parent } from "./Parent"
import { UsersData } from "./UsersData"
import { UsersList } from "./UsersList"

function App() { // App is a parent

  return (
    <div>
      {/* <ExpensiveCalculation/>
       */}
       <Counter/>
      {/* <Parent/> */}
      {/* <UsersData/> child component of App */}
      {/* <UsersList/> */}
    </div>
  )
}

export default App
