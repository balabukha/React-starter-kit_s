import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends React.Component{

  constructor(props) {
	super(props);

	this.state = {

	}
  }


	render() {
		return (
		    <div>Hello React Starter Kit</div>
        )
	}
  }



// App.propType = {
// 	initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
// }


App.defaultProps = { // дефолтное значение, docs React: https://facebook.github.io/react/docs/react-component.html#defaultprops
	title: 'React ToDo'
}


ReactDOM.render(
	<App initialData = {todos}/>,
	document.getElementById('root')
)
