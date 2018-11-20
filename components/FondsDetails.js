import React, {Component} from 'react'
import Link from 'next/link'
import { Image, Icon, Grid, Card } from 'semantic-ui-react'
import ApiDataCalls from '../services/ApiDataCalls'

class FondsDetails extends Component{
  constructor(){
    super()
    let apiData = new ApiDataCalls
    let fondsData = apiData.getFondsData()
    this.state = {
      isLoaded: false,
      items: [],
      error: ""
    }
  }


  componentDidMount() {
    fetch("http://by2022.adaptcentre.ie/api-get-fonds",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              //"Content-Type": "application/json; charset=utf-8",
               "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
      }

      )
      .then(res => res.json())
      .then(
        (result) => {
          console.log(JSON.parse(result))
          this.setState({
            isLoaded: true,
            items: JSON.parse(result)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderCards(item){
    const itemList = item.map(function(name, index){
      return(
        <Link href={{ pathname: '/fonds-details', query: { id: name.ID } }}>
          <Card color="olive">
            <Card.Content>
              <Card.Header>{name.name} ({name.prefix})</Card.Header>
              <Card.Description>{name.alt_name}</Card.Description>
            </Card.Content>      
          </Card>
        </Link>     
        )
    })
    return itemList
  }

  render(){
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <p><strong>PR | Plea Rolls</strong><br />
            Ancient rolls from the Common Law Courts (1294 – 1623)
            </p>
            <hr />
            <p><i>Description</i></p>
            <p>The ancient rolls containing the judicial pleadings of the Common Law Courts, which were at first kept in the Treasury of the Exchequer, were in the sixteenth century deposited for safety in Bermingham Tower, that being the name of the S.W. tower of Dublin Castle. In 1775 this tower was in part taken down for rebuilding, and the rolls were put into sacks and stored in the Battle Axe Hall. After the rebuilding, the space allotted to them was much reduced and the difficulty of finding room for them was further increased by the addition of the rolls of the Summonister of the Exchequer. In 1815 they were removed to the Wardrobe or Record Tower, the S.E. tower of Dublin Castle, but in the meantime a number of rolls had disappeared. Here they remained till, in 1869. they were transferred to the Public Record Office.

These Plea Rolls were arranged in chronological order without distinguishing the several classes. There are three seventeenth-century repertories to the collection, the two first containing short abstracts of nearly all the rolls to the end of the reign of Edward II. The third gives references to selected entries on 200 rolls to the end of the reign of Elizabeth. Its value is much diminished by the imperfect references to the rolls, and consequent difficulty of identifying them. This volume is well indexed. MSS. calendars of these rolls were made by the Record Commissioners, to the end of the reign of Edward II., but they are very imperfect, several Plea Rolls being calendared amongst the Memoranda Rolls, and many entries being omitted. They also published a catalogue in their 8th Report (1819), pp. 79-125, arranging the rolls into three classes, plea rolls, miscellaneous plea, rolls and fragments, though the fragments are sometimes less fragmentary than the Plea Rolls. In the 26th (Appendix III.) and 28th (Appendix I.) Reports of the Deputy Keeper will be found a classification and catalogue of all the Plea Rolls, including some which were found in the Rolls Office collection.* 

</p>
            <hr />
            <p><i>Bibliography</i></p>
            <p>Connolly, Medieval record sources | CONNOLLY, Philomena. Medieval record sources (Dublin, 2002).</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <p><strong>Sub fonds</strong><br />
            16 Sub Fonds
            </p>
            <hr />
            <p><a href="#">(1) 1 Chancery Enrolments</a></p>
            <p><a href="#">(2) 2 Judicial Proceedings</a></p>
            <p><a href="#">(3) 3 Clerk of the Crown and Hanaper</a></p>
            <p><a href="#">(4) 4 Lunacy Office</a></p>
            <p><a href="#">(5) 5 Secretary to the Lord Chancellor</a></p>
            <p><a href="#">(6) 6 Lord Chancellor's Secretary of Bankrupts</a></p>
            
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
          <hr />
           <p><strong>Substitute items</strong><br />
            16 related substitute items
            </p>
             <Card.Group>
            <Card color="olive">
              <Image src="/static/images/sample_1.jpg" />
              <Card.Content>
                <Card.Header>Armagh Papers</Card.Header>
                <Card.Description>3. Copies of Inquisitions re Parishes: </Card.Description>
              </Card.Content>      
            </Card>
            <Card color="olive">
              <Image src="/static/images/sample_1.jpg" />
              <Card.Content>
                <Card.Header>Armagh Papers</Card.Header>
                <Card.Description>3. Copies of Inquisitions re Parishes: </Card.Description>
              </Card.Content>      
            </Card>
            <Card color="olive">
              <Image src="/static/images/sample_1.jpg" />
              <Card.Content>
                <Card.Header>Armagh Papers</Card.Header>
                <Card.Description>3. Copies of Inquisitions re Parishes: </Card.Description>
              </Card.Content>      
            </Card>
            <Card color="olive">
              <Image src="/static/images/sample_1.jpg" />
              <Card.Content>
                <Card.Header>Armagh Papers</Card.Header>
                <Card.Description>3. Copies of Inquisitions re Parishes: </Card.Description>
              </Card.Content>      
            </Card>
             </Card.Group>
             <p className="link-right"><a href="#">View More >></a></p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
          <hr />
           <p><strong>Related Series</strong><br />
            236 related series
            </p>
             <Card.Group>
            <Card color="olive">
              <Card.Content>
                <Card.Header>Appeal Indexes, 1862-78</Card.Header>
                <Card.Description>Registers of appeal cases </Card.Description>
              </Card.Content>      
            </Card>
            <Card color="olive">
              <Card.Content>
                <Card.Header>Appeal Indexes, 1862-78</Card.Header>
                <Card.Description>Registers of appeal cases </Card.Description>
              </Card.Content>      
            </Card>
            <Card color="olive">
              <Card.Content>
                <Card.Header>Appeal Indexes, 1862-78</Card.Header>
                <Card.Description>Registers of appeal cases </Card.Description>
              </Card.Content>      
            </Card>
            <Card color="olive">
              <Card.Content>
                <Card.Header>Appeal Indexes, 1862-78</Card.Header>
                <Card.Description>Registers of appeal cases </Card.Description>
              </Card.Content>      
            </Card>
             </Card.Group>
             <p className="link-right"><a href="#">View More >></a></p>
          </Grid.Column>
        </Grid.Row>
      </Grid>


      
      )
  }
}

export default FondsDetails