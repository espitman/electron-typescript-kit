import * as React from 'react'

export class Home extends React.Component<any> {
  handleClick = () => {
    this.props.navigation.go('about')
  }

  render() {
    return (
      <>
        <h1>Home Page</h1>
        <button onClick={this.handleClick}>Go</button>
      </>
    )
  }
}
