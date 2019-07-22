import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  DataTable,
  TableHeader,
  Textfield,
  Button
} from "react-mdl";


class Resume extends Component {
  render() {
    return(
      
      <div style={{ height: "300px", position: "relative" }}>
        <Layout>
         
          <Content>
            <Textfield
              onChange={() => {}}
              label="Name..."
              style={{ width: "200px" }}
            />
            
          </Content>
          <Content>
            <Textfield
              onChange={() => {}}
              label="Univercity..."
              style={{ width: "200px" }}
            />
            <Textfield
              onChange={() => {}}
              label="Major..."
              style={{ width: "200px" }}
            />
          </Content>
          <Content>
            <Button raised ripple>
              Upload here
            </Button>
            <Button primary>Submit</Button>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default Resume;
