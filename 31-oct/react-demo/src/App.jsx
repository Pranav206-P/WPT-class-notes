// import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";
// import { NavigationBar } from "./NavigationBar";
// import { Intro } from "./Intro";
// import { Introduction } from "./Introduction";
// import { Scoreboard } from "./Scoreboard";
// import { ScoreCard } from "./ScoreCard";

import { UsersList } from "./UsersList"

function App() {
  return (
    <div>
      <UsersList/>
      {/* <Navbar></Navbar> */}
      {/* <Navbar />
      <ScoreCard/>
      <NavigationBar />
      <Scoreboard/>
      <Intro
        headingText="Welcome to our app"
        description="This is our first react app"
        buttonText="Click me"
      > */}
        {/* 
          {
            headingText: "Welcome to our app",
            description: "This is our first react app",
            buttonText: "Click me"
          }

        */}
      {/* </Intro> */}

      {/* <Intro
        headingText="Know About Us"
        description="We have 20 years of experience in industry...."
        buttonText="Know more..."
      ></Intro>

      <Introduction
        headingText="Know About Us (class component)"
        description="We have 20 years of experience in industry.... (class component)"
        buttonText="Know more... (class component)"
      />
      <Introduction />

      {/* <h1>Welcome to our app</h1> */}
      {/* <Footer></Footer> */} 
    </div>
  )
}

export default App
