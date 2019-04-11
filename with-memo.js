import { h, render } from 'preact'
import { memo } from 'preact/compat'

const App = memo(function (props) {
  return h('div', null, 'Hello World')
})

render(h(App), document.body)
