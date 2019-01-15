import React, { PureComponent } from "react";
import { Icon } from 'antd';
import styled from "styled-components";


const GitHubLabel = styled.a`
  display: flex;
  align-items: center;
  transition: 0.3;
  color: rgba(0, 0, 0, 0.85);
  &:hover {
    transition: 0.3;
    color: #1890ff;
  }
  .anticon.anticon-github {
    margin-left: 10px;
    font-size: 40px;
  }
  margin: auto 0 0 0; 
`

export class GitHubLink extends PureComponent{
  render() {
    return (
      <GitHubLabel>
        Check us out on GitHub!
        <Icon type="github" />
      </GitHubLabel>
    );
  }
}
