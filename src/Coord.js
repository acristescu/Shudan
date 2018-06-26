const {h, Component} = require('preact')
const helper = require('./helper')

class CoordX extends Component {
    render() {
        let {style, xs, coordX = i => helper.alpha[i]} = this.props

        return h('div',
            {
                className: 'shudan-coordx',
                style: Object.assign({
                    display: 'flex',
                    textAlign: 'center'
                }, style)
            },

            xs.map(i =>
                h('div', {style: {width: '1em'}},
                    h('span', {style: {display: 'block'}}, coordX(i))
                )
            )
        )
    }
}

class CoordY extends Component {
    render() {
        let {style, height, ys, coordY = i => height - i} = this.props

        return h('div',
            {
                className: 'shudan-coordy',
                style: Object.assign({
                    textAlign: 'center'
                }, style)
            },

            ys.map(i =>
                h('div', {style: {height: '1em'}},
                    h('span', {style: {display: 'block'}}, coordY(i))
                )
            )
        )
    }
}

module.exports = {CoordX, CoordY}
