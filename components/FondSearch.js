import React from 'react'
import { Tab, Form, Checkbox, Button } from 'semantic-ui-react'

const fondSearch = (
		<Tab.Pane attached={false}>
			 <Form>
			    <Form.Field>
			      <label>Title</label>
			      <input placeholder='Enter Keywords
			      ' />
			    </Form.Field>
			    <Form.Field>
			      <label>Descriptions</label>
			      <input placeholder='Enter Keywords
			      ' />
			    </Form.Field>
			    <Form.Field>
			      <label>Adminisative History</label>
			      <input placeholder='Enter Keywords
			      ' />
			    </Form.Field>
			    <Button type='submit'>Submit</Button>
			  </Form>
		</Tab.Pane>
	)

const panes = [
  { menuItem: 'Fonds Search', render: () => fondSearch }
]



const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing