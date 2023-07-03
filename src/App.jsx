import './App.css'
function Header(){
  return(
    <header>
    <nav>
        <img src="https://cdn.cdnlogo.com/logos/r/85/react.svg" width="40px" />
    </nav>
</header>
  )
}
function Main(){
  return(
    <div>
    <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </div>
  )
}
function Footer(){
  return (
    <footer>
    <small>© 2023 Platin's development. All rights reserved.</small>
</footer>
  )
}
function App() {
  return (
    
      <div>
         <Header/>
        <Main />
        <Footer />
         
      </div>
  )
}


export default App
