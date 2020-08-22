import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ErrorMsg = styled.h2`
  color: #e42845;
`;

export class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Wrapper>
          <ErrorMsg>
            Извините, что-то сломалось. Мы уже работает над этим.
          </ErrorMsg>
        </Wrapper>
      );
    }

    return children;
  }
}
