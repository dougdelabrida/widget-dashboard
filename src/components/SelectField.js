import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectContext = React.createContext();

const StyledSelectField = styled.div`
  display: inline-block;
  min-width: 128px;
  position: relative;
`;

const StyledSelectOption = styled.button`
  background: ${props => props.theme.blackBackgroundOpacity};
  border: none;
  border-bottom: none;
  cursor: pointer;
  color: rgba(255, 255, 255, .85);
  display: block;
  font-family: ${props => props.theme.defaultFont};
  font-size: 16px;
  min-width: 195px;
  padding: 16px 20px;
  text-align: left;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:hover {
    background: rgba(5, 33, 37, .9);
  }

  &:last-child {
    border: none;
  }
`;

 const SelectOptionList = styled.div`
  max-height: ${props => props.open ? '290px' : '0'};
  overflow: hidden;
  position: absolute;
  transition: all .3s;
  width: 100%;
`;

const ArrowIcon = styled.div`
    content: "";
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-color: rgba(255, 255, 255, .5) transparent transparent transparent;
    position: absolute;
    top: ${props => props.open ? '14px' : '23px'};
    right: 16px;
    transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const SelectOption = (props) => (
  <SelectContext.Consumer>
    {context => (
      <StyledSelectOption
        onClick={() => context.onSelectOption({value: props.value, text: props.children})}
      >
        {props.children}
      </StyledSelectOption>
    )}
  </SelectContext.Consumer>
);

export default class SelectField extends PureComponent {
  state = {
    open: false,
    selected: {}
  }

  static propTypes = {
    onSelect: PropTypes.func.isRequired,
  }

  contextValue = {
    onSelectOption: (value) => this.handleSelectOption(value)
  }

  handleSelectOption (option) {
    this.setState({selected: option});
    this.props.onSelect(option.value)
  }

  handleOpen () {
    this.setState({open: true})

    document.onclick = () => {
      this.setState({open: false})
      document.onclick = null;
    }
  }

  componentDidMount () {
    if (!this.props.children) return;
    
    const selectedOption = this.props.children.find(({props}) => props.selected);

    const selected = {
      text: selectedOption.props.children,
      value: selectedOption.props.value
    };

    this.setState({
      selected
    });
  }

  render() {
    
    return (
      <StyledSelectField>
        <SelectContext.Provider value={this.contextValue}>

          <StyledSelectOption onClick={() => this.handleOpen()}>
            {this.state.selected.text}
            <ArrowIcon open={this.state.open} />
          </StyledSelectOption>

          <SelectOptionList open={this.state.open}>
            {this.props.children}
          </SelectOptionList>

        </SelectContext.Provider>
      </StyledSelectField>
    );
  }
}
