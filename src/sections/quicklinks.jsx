import React from "react";
import { Table, Card } from "react-bootstrap";


export function QuickLinks(props){
  return (
    <Card>
      <Card.Header>Quick Links</Card.Header>
      <Card.Body>
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>Link</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://gist.github.com/TheDonDope/8327101ead7758b9bfc6e86b9a776f80">Keybindings</a></td>
              <td>Short list of commonly used keys</td>
            </tr>
            <tr>
              <td><a href="https://www.reddit.com/r/EscapefromTarkov/comments/dkzshm/interactive_key_sheet/">Keys Excel Sheet</a></td>
              <td>Excel workbook for tracking keys, including maps</td>
            </tr>
            <tr>
              <td><a href="https://odealo.com/articles/best-ammo-in-escape-from-tarkov">Best Ammo</a></td>
              <td>Best ammo guide</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>       
    </Card>
  )
}