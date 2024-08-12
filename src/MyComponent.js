import PropTypes from 'prop-types'

const MyComponent3 = ({name, children}) => {
  return (
  <div>name: {name} <br />
  children: {children} </div>)

}

MyComponent3.propTypes = {
  name: PropTypes.string.isRequired,
}


/*
const MyComponent2 = (props) => {
  const {name, children} = props;
  return (
    <div>
      name: {name}<br />
      children: {children}
    </div>
  )
}
*/

/*
const MyComponent1 = (props) => {
  return <div>firt Component: {props.children}</div>
};
*/

/*
const MyComponent0 = (props) => {
  return <div>firt Component</div>
};

*/

/*
MyComponent1.defaultProps = {
  val: 'IJH',
}
*/

export default MyComponent3;