import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            count: 0,
        }
        console.log(this.props.name +"constructor of UserClass");
    };


    componentDidMount() {
        console.log(this.props.name +"Component did Mount");
    };


    render () {
        console.log(this.props.name +"render of UserClass");
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className = "card">
                <h2 className="card-title">{name}</h2>
                <h3 className="card-text text-small">Location: {location}</h3>
                <h3 className="card-text">Email: nren115@gmail.com</h3>
                <h3 className="card-text">Phone: 7397371808</h3>
                <h3 className="card-text">Count={count}</h3>
                <button onClick={()=>{
                        // Count should increase in hitting the button.
                        // NEVER UPDATE STATE VARIABLES DIRECTLY
                        this.setState({count:this.state.count+1})
                }}>Count Increase </button>
                <button onClick={()=>{
                    //  Decrease the count
                    this.setState({
                        count: this.state.count-1
                    })
                }}>Count Decrease</button>

        
        
            </div>
          );
    };
};

export default UserClass;