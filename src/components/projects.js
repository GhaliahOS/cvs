import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* cv 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png) center / cover'}} >CV #1</CardTitle>
            <CardText>
                  university :
                  major : 

            </CardText>
            <CardActions border>
                <Button colored>SHOW THE CV</Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* cv 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png) center / cover'}} >CV #2</CardTitle>
            <CardText>
              university :
              major : 
            </CardText>
            <CardActions border>
               <Button colored>SHOW THE CV</Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* cv 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png) center / cover'}} >CV #3</CardTitle>
            <CardText>
            university :
            major : 
            </CardText>
            <CardActions border>
              <Button colored>SHOW THE CV</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>CVs</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
