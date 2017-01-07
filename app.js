// var App = () => (
//   <div>Some cliche salutation</div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//       <ul>
//         <li>Cucumber</li>
//         <li>Kale</li>
//       </ul>
//   </div>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//     <li>{props.groceryItems[2]}</li>
//   </ul>
// );

// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem groceryItems={['Cucmber', 'Kale', 'Carrots']}/> 
//   </div>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));

// var GroceryListItem = (props) => {

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
//       <li>{props.groceryItems[1]}</li>
//       <li>{props.groceryItems[2]}</li>
//     </ul>
//   );
// }

// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
    // <GroceryListItem groceryItems={['Cucmber', 'Kale', 'Carrots']}/> 
//   </div>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));
// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library

// class GroceryListItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {

//     return (
//       <li>{this.props.groceryItems}</li>
//     );

//   }

// }

// var GroceryList = (props) => {
//   console.log(props, 'props')
//   return (
//     <ul>
//       {props.groceryItems.map(item =>
//         <GroceryListItem item={item} />
//       )}
//     </ul>
//   )

// }

// ReactDOM.render(<GroceryList groceryItems={['Cucmber', 'Kale', 'Carrots']} whale={[1, 2 ,3]}/>, document.getElementById("app"));

// class GroceryListItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.item}</li>
//     );

//   }

// }




 class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
    <ul>
      {props.groceryItems.map(item =>
        <GroceryListItem item={item}/>
      )}
    </ul>
);

ReactDOM.render(<GroceryList groceryItems={['Cucmber', 'Kale', 'Carrots']} />, document.getElementById("app"));
