import styled, { injectGlobal } from 'styled-components';
import React from 'react';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans';
    outline: 0;
  }
`;

const Background = styled.div`
  display: flex;
  align-items: center;
  background: rgb(40, 42, 54);
  min-height: 100vh;
  flex-direction: column;
  padding: 1rem;
`;

const Link = styled.button`
  background: none;
  border: none;
  color: rgba(255,255,255,0.25);
  margin: 1rem;
  font-size: 1.15rem;
  font-weight: bold;
  padding: 0.5rem;
  outline: 0;
  cursor: pointer;
  ${props => !props.active} {
    color: white;
  }
`;

const Links = styled.nav`
  display: flex;
  margin-bottom: 5rem;
`;

class Demo extends React.Component {
  state = {
    selectedName: this.props.default
  };
  selectName = (name) => {
    this.setState({ selectedName: name });
  };
  render() {
    return (
      <Background>
        <Links>
          {React.Children.map(this.props.children, (child) => (
            <Link
              key={child.props.name}
              onClick={() => this.selectName(child.props.name)}
              active={child.props.name === this.state.selectedName}
            >
              {child.props.name}
            </Link>
          ))}
        </Links>
        {React.Children.map(this.props.children, (child) => {
          if (child.props.name === this.state.selectedName) {
            return child;
          }
        })}
      </Background>
    );
  }
}

export default Demo;