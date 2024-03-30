import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component {

    constructor (props){
        super(props);
        console.log("constructor of About");
    };
    componentDidMount() {
        console.log("Parent Component did mount");
    }

    render () {
        console.log("render of About");
        return (
        <div className="container p-5 my-5 border">
        <h1 className="display-2">About Us 🧑‍🚀</h1>
        <p className="">We are aspiring Food Service Provider with an objective of delivering food to all places across Bharat.</p>
        <footer className="blockquote-footer">Narendran.S, CEO🐼</footer>
        {/* <User name={"Narendran (function)"}  location={"Chennai (function)"} /> */}

        <UserClass name={"Narendran (class)"} location={"Chennai (class)"} />
        <UserClass name={"Melon (class)"} location={"London (class)"} />
    </div>
        );
    };
};


// const About = () => {
//     return (
//         <div className="container p-5 my-5 border">
//             <h1 className="display-2">About Us 🧑‍🚀</h1>
//             <p className="">We are aspiring Food Service Provider with an objective of delivering food to all places across Bharat.</p>
//             <footer className="blockquote-footer">Narendran.S, CEO🐼</footer>
//             {/* <User name={"Narendran (function)"}  location={"Chennai (function)"} /> */}

//             <UserClass name={"Narendran (class)"} location={"Chennai (class)"} />

//         </div>
//     );
// };

export default About;