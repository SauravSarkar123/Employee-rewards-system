import React, { useState } from 'react';
import { Table, Button, Card, Row, Col, Nav } from 'react-bootstrap';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import { Center } from '@chakra-ui/react';

const EmployeeDashboard = () => {
const [showTokenTable, setShowTokenTable] = useState(false);
const [showRewardsTable, setShowRewardsTable] = useState(false);

const toggleTokenTable = () => setShowTokenTable(!showTokenTable);
const toggleRewardsTable = () => setShowRewardsTable(!showRewardsTable);

const tokenData = [
{ companyName: "SecureKloud", rewardDesc: "Vue Certification", date: "02/04/20", rating: "Excellent", tokensEarned: 40 },
{ companyName: "Zoho", rewardDesc: "React Certification", date: "02/02/22", rating: "Good", tokensEarned: 20 },
{ companyName: "Prodapt", rewardDesc: "Java Certification", date: "12/9/2022", rating: "Excellent", tokensEarned: 40 },
{ companyName: "Deloitte", rewardDesc: "Python Certification", date: "23/02/2023", rating: "Average", tokensEarned: 10 }
];

const totalTokens = tokenData.reduce((total, token) => total + token.tokensEarned, 0);

return (
<>
<div style={{ height: "100vh", overflowY: "scroll" }}>
<Navbar />
<div className="container my-5">
<Row>
<Col md={3}>
<Card style={{ position: "absolute", right: 150, top: 0, width: "400px", height: "500px" }}>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmqSWdlFU8Z2oiMcidHb4ZkdSRm2nnaw32w&usqp=CAU" />
<Card.Body>
<Card.Title><strong>Name:</strong> John Doe</Card.Title>
<Card.Text><strong>Phone:</strong> +1 123-456-7890</Card.Text>
<Card.Text><strong>Email:</strong> john.doe@example.com</Card.Text>
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
<td>02/02/22</td>
</tr>
</tbody>
</Table>
</Card.Body>
</Card>
</Col>
<Col md={9}>
<h3 style={{ backgroundColor: "#2471A3", color: "white", fontSize: "50px", textAlign: 'center', width: "120%", right: "60%" }}>Tokens Earned: {totalTokens}</h3>
<div style={{ height: "600px", overflowY: "scroll", width: "120%" }}>
<Table striped bordered hover style={{ width: "100%", fontSize: "1.2em", height: "90%" }}>
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
</div>
</Col>
</Row>
</div>
</div>
<Footer />
</>
);
};
export default EmployeeDashboard;