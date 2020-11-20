import React from "react"
import {
  Alert,
  Button,
  Col,
  Form,
  Row,
  Spinner,
  FormControl,
} from "react-bootstrap"

class SearchBar extends React.Component {
  state = {}

  render() {
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          onKeyDown={this.props.onKeyDown}
          onChange={this.props.onChange}
          className="mr-sm-2"
        />
        <Button variant="outline-danger"></Button>
      </Form>
    )
  }
}
export default SearchBar
