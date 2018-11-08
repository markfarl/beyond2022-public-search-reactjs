import React from 'react'
import { Tab, Form, Checkbox, Button } from 'semantic-ui-react'

const basicSearch = (
		<Tab.Pane attached={false}>
			 <Form>
			    <Form.Field>
			      <label>Keywords</label>
			      <input placeholder='Enter Keywords
			      ' />
			    </Form.Field>
			    <Form.Field>
			      <Checkbox label='Include OCR Text in Search' />
			    </Form.Field>
			    <Button type='submit'>Submit</Button>
			  </Form>
		</Tab.Pane>
	)
const advSearch = (
		<Tab.Pane attached={false}>
			<Form>
			    <Form.Field>
			      <label>Keywords</label>
			      <input placeholder='Enter Keywords
			      ' />
			    </Form.Field>
			    <Form.Field>
			      <label>Date</label>
			      <input placeholder='Enter Keywords
			      ' />
			    </Form.Field>
			    <Form.Field>
			      <label>Location</label>
			      <input placeholder='Enter Keywords
			      ' />
			    </Form.Field>
			    <Form.Field>
			      <label>Series</label>
			      <input placeholder='Enter Keywords
			      ' />
			    </Form.Field>
			    <Form.Field>
			      <Checkbox label='Include OCR Text in Search' />
			    </Form.Field>
			    <Button type='submit'>Submit</Button>
			  </Form>
		</Tab.Pane>
	)

const panes = [
  { menuItem: 'Basic Search', render: () => basicSearch },
  { menuItem: 'Advanced Search', render: () => advSearch }
]



const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing