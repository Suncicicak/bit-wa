const root = document.getElementById('root');

const info = postsData;
const Header = props => {
return (
    <div class='div1-class'>
    <a href='#!' class='logo'>Blog App</a>
    </div>
)  
}

const SinglePost = props => {
    return (
    <div>
       <h2> {props.post.title} </h2>
       <p> {props.post.body} </p>
     </div>
     )
}

const Main = props => {
    return (
        <div class='js-outer-div'> 
        
        {props.info.map((item,i) => <SinglePost post={item} key={i} />)}
        </div>
    )
}

const App = (props) => {
    return (
        <div>
             <Header class='header-class'/>
            <Main class='main-class' info={info}/> 
            
            
        </div>
    )   
}




ReactDOM.render(<App />, root);