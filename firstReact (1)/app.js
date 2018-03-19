const root = document.getElementById('root');

const Shop = (props) => {
    return (
        <li>{props.items}</li>
    )
}

const ShopList = (props) => {
    return props.items.map(e => <Shop items = {e}/>)
}

const App = (props) => {
    return (
        <div>
        <h1>sfdg</h1>
        <ShopList items = {props.name}/>
        </div>
    )   
}



ReactDOM.render(<App name = {["da","dafs","asdf"]} />, root);



































const root = document.getElementById("root")

const ShopList = (props) => {
    return (
        props.items.map(x => {x})
    )
}


const App = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
            <ShopList items={props.name}/>

        </div> 
    )
}











ReactDOM.render (<App title={"Title"} name={["alalalaalal","lalalaalalal","lolololollo"]}/>,root)