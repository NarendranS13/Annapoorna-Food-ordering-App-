import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            userInfo: {
                login: "Dummy",
                id: 123,
                avatar_url: "https:dummy.jpeg",
            },

        }
        
    };

// To call an API in class based we need to make componentDidMount as async
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/narendrans13");
        const json = await data.json();
        

        this.setState({
            userInfo: json,
        });
        console.log(json);
    };

    componentDidUpdate() {
        console.log("Component Did Update");
    };

    componentWillUnmount() {
        console.log("Will unmount");
    };

    render () {
        
        const {login,id,avatar_url} = this.state.userInfo;

        return (
            <div className = "card">
                <img src={avatar_url} />
                <h2 className="card-title">{login}</h2>
                <h3 className="card-text text-small">Github: {id}</h3>
                <h3 className="card-text">Email: nren115@gmail.com</h3>
                <h3 className="card-text">Phone: 7397371808</h3>
            </div>
          );
    };
};

export default UserClass;