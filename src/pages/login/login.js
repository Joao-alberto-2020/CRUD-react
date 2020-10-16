import React, {Component} from "react"

class Login extends Component {
            componentDidMount() {
                fetch('https://api.github.com/users/kalbzero/repos')
                .then((response) => {response.json()})
                .then((data) => {this.setState({data: data})})
            }
    render(){
        return(
            <div> Nome de usuário: {this.state.data.login} </div>
        )
    }
}

export default Login;