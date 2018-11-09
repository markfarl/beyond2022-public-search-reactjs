import React from 'react'
import { Tab, Form, Checkbox, Button } from 'semantic-ui-react'

const fondSearch = (
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

const panes = [
  { menuItem: 'Fonds Search', render: () => fondSearch }
]



const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing