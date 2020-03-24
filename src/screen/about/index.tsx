import * as React from 'react'

export class About extends React.Component<any> {
  handleClick = () => {
    this.props.navigation.go('home')
  }

  render() {
    const { params } = this.props
    return (
      <>
        <h1>About Page</h1>
        <h5>Name: {params.name}</h5>
        <button onClick={this.handleClick}>Go</button>
      </>
    )
  }
}
