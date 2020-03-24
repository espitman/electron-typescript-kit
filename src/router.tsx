import * as React from 'react'
import { Home } from './screen/home'
import { About } from './screen/about'

interface State {
  url?: string
}

interface Props {
  url?: string
}

interface Components {
  [key: string]: any
}

const components: Components = {
  Home,
  About
}

export class Router extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      url: props.url || 'Home'
    }
  }

  navigation = {
    go: (url: string) => {
      this.setState({ url })
    }
  }

  render() {
    const { url } = this.state
    const Component =
      components[
        (url as string).charAt(0).toUpperCase() + (url as string).substring(1)
      ]
    return (
      <div className="app">
        <Component navigation={this.navigation} />
      </div>
    )
  }
}
