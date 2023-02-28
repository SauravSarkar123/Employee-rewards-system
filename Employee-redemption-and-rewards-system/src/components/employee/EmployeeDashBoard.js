import React, { useState } from 'react';
import { Table, Button, Card, Row, Col } from 'react-bootstrap';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import { Center } from '@chakra-ui/react';

const EmployeeDashboard = () => {
const [showTokenTable, setShowTokenTable] = useState(false);
const [showRewardsTable, setShowRewardsTable] = useState(false);

const toggleTokenTable = () => setShowTokenTable(!showTokenTable);
const toggleRewardsTable = () => setShowRewardsTable(!showRewardsTable);

const tokenData = [
{
companyName: "SecureKloud",
rewardDesc: "Vue Certification",
date: "02/04/20",
rating: "Excellent",
tokensEarned: 40
},
{
companyName: "Zoho",
rewardDesc: "React Certification",
date: "02/02/22",
rating: "Good",
tokensEarned: 20
},
{
companyName: "Prodapt",
rewardDesc: "Java Certification",
date: "12/9/2022",
rating: "Excellent",
tokensEarned: 40
},
{
companyName: "Deloitte",
rewardDesc: "Python Certification",
date: "23/02/2023",
rating: "Average",
tokensEarned: 10
}
];

const totalTokens = tokenData.reduce((total, token) => total + token.tokensEarned, 0);

return (
<>
<Navbar />
<div className="container my-5">
<Row>
<Col md={3}>
<Card style={{ padding: "20px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmqSWdlFU8Z2oiMcidHb4ZkdSRm2nnaw32w&usqp=CAU" />
<Card.Body>
<Card.Title style={{ fontSize: "1.5em", marginBottom: "10px" }}>John Doe</Card.Title>
<Card.Text style={{ marginBottom: "5px" }}>Phone: +1 123-456-7890</Card.Text>
<Card.Text style={{ marginBottom: "10px" }}>Email: john.doe@example.com</Card.Text>
<Table striped bordered hover>
<thead>
<tr>
<th>Company</th>
<th>Date</th>
</tr>
</thead>
<tbody>
<tr>
<td>ABC Corporation</td>
<td>01/01/21</td>
</tr>
<tr>
<td>XYZ Inc.</td>
<td>05/15/22</td>
</tr>
</tbody>
</Table>
</Card.Body>
</Card>
<Center><Button variant="primary" className="mt-4" onClick={toggleTokenTable}>View Tokens History</Button> </Center>

</Col>
<Col md={9}>
<Card style={{ padding: "20px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
<Card.Body>
<Center>
<h2 style={{ fontSize: "2em", marginBottom: "20px" }}>My Tokens</h2>
</Center>
{showTokenTable &&
<Table striped bordered hover>
<thead>
<tr>
<th>Company</th>
<th>Reward Description</th>
<th>Date</th>
<th>Rating</th>
<th>Tokens Earned</th>
</tr>
</thead>
<tbody>
{tokenData.map((token, index) => (
<tr key={index}>
<td>{token.companyName}</td>
<td>{token.rewardDesc}</td>
<td>{token.date}</td>
<td>{token.rating}</td>
<td>{token.tokensEarned}</td>
</tr>
))}
</tbody>
</Table>
}
<Center>
<h4 style={{ marginTop: "20px" }}>Total Tokens Earned: {totalTokens}</h4>
</Center>
</Card.Body>
</Card>
</Col>
</Row>
</div>
<Footer />
</>
);
};
export default EmployeeDashboard;