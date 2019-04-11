import { h, render } from 'preact'

const App = function (props) {
  return h('div', null, 'Hello World')
}

render(h(App), document.body)
