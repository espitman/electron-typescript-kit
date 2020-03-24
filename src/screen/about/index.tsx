import * as React from 'react'

export class About extends React.Component<any> {
  handleClick = () => {
    this.props.navigation.go('home')
  }

  render() {
    return (
      <>
        <h1>About Page</h1>
        <button onClick={this.handleClick}>Go</button>
      </>
    )
  }
}
