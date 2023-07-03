import './App.css'
function Header(){
  return(
    <header>
    <nav className='nav'>
        <img src="https://cdn.cdnlogo.com/logos/r/85/react.svg" className='nav-logo' />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </nav>
</header>
  )
}
function Main(){
  return(
    <div className='main-content'>
    <h1>Reasons I'm excited to learn React</h1>
          <ol className='main-list'>
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
    <footer className='footer'>
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
