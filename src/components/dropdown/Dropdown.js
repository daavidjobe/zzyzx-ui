import React, { Component, PropTypes } from 'react'
import { RippleButton } from '../ripplebutton/RippleButton'
import Arrow from '../arrow/Arrow'
import './styles.scss'

// TODO: Make items searchable

export class Dropdown extends Component {

  state = {
    isOpen: false,
    search: ''
  }

  static propTypes = {
    items: PropTypes.array,
    arrowColor: PropTypes.string,
    elementCass: PropTypes.string,
    open: PropTypes.bool,
    label: PropTypes.string,
    searchable: PropTypes.bool
  }

  static defaultProps = {
    items: [],
    arrowColor: '#fff',
    elementClass: '',
    label: 'Dropdown',
    searchable: false
  }

  componentWillMount = () => {
    window.addEventListener('click', this.close)
  }

  componentWillUnmount = () => {
    window.removeEventListener('click', this.close)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.open) {
      this.setState({ isOpen: newProps.open })
    }
  }

  close = event => {
    if (!this.hovering) {
      this.setState({
        isOpen: false,
        search: ''
      })
    }
  }

  handleKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.hovering = false
      this.close()
    }
    if (this.state.isOpen && this.props.searchable) {
      this.searchInput.focus()
    }
  }

  handleClick = event => {
    event.stopPropagation()
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen,
      search: ''
    })
  }

  handleMouseOver = () => {
    this.hovering = true
  }

  handleMouseLeave = () => {
    this.hovering = false
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value })
  }

  renderLabel = (searchable, isOpen) => {
    if (isOpen && searchable) {
      return (
        <input
          onChange={this.handleSearch}
          type='text'
          ref={searchInput => { this.searchInput = searchInput }}
        />
      )
    } else {
      return <div>{this.props.label}</div>
    }
  }

  renderItems = items => {
    const results = []
    if (items) {
      items.forEach((item, index) => {
        const value = item.props.children
        if (value.startsWith(this.state.search)) {
          results.unshift(<li key={index}>{item}</li>)
        } else {
          results.push(<li key={index}>{item}</li>)
        }
      })
    }
    return results
  }

  render () {
    const { isOpen } = this.state
    const { searchable, items } = this.props
    return (
      <div
        onKeyDown={this.handleKeyDown}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        className={`awsm-dropdown ${this.props.elementCass}`}
      >
        <div className='dropdown-btn'>
          <RippleButton onClick={this.handleClick}>
            {this.renderLabel(searchable, isOpen)}
            <Arrow
              elementClass={`arrow-${isOpen ? 'up' : 'down'}`}
              width={25}
              color={this.props.arrowColor}
            />
          </RippleButton>
        </div>
        <div className={`dropdown-list ${isOpen ? 'slide-down' : 'slide-up'}`}>
          <ul>
            {this.renderItems(items)}
          </ul>
        </div>
      </div>
    )
  }
}
