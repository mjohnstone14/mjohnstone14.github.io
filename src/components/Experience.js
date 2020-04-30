import React, { useState } from 'react';
import Accordion from './Accordion';
import Card from './Card';
import '../styles/experience.scss';

const content = [
  {
      question: 'Hello',
      answer: 'rrrrrrr',
      answer2: 'second content'
  }
];
const Experience = () => {
    const [activeEventKey, setActiveEventKey] = useState(0);
    return (
        <fragment className="experience">
        <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
            {content.map(({ question, answer, answer2 }, index) => (
                <Card key={index}>
                    <Accordion.Toggle element={Card.Header} eventKey={index}>
                        {question}
                        {activeEventKey !== index && <span>v</span>}
                        {activeEventKey === index && <span>^</span>}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index} element={Card.Body}>
                        <li>{answer}</li>
                        <li>{answer}</li>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
        <fragment>
            <h2>Experience</h2>
            <fragment>
                <h3>Nordstrom, Seattle WA</h3>
                <h4>August 2019 - Present</h4>
                <li>
                    Developed and continuously deployed an internal applications tool designed to
                    process and inspect product returns in Nordstrom stores, inventory facilities, and
                    fulfillment centers that would save ~$14.5M projected expenses for the company in
                    2020.
                </li>
                <li>
                    Developed front-end facing applications designed to work on a company-wide scale
                    using React Hooks, Sass, and Java Spring API.
                </li>
                <li>
                    Maintained a Java Spring API running on Kubernetes, added and exposed endpoints
                    that filtered and managed data from DynamoDB and other calls to company
                    services.
                </li>
                <li>
                    Reviewed project user interface code, incorporated automated testing with Jest,
                    logging, and refactored and reimplemented parts of the React UI.
                </li>
                <li>
                    Utilized Sass along with React Hooks to design interactive UIs, used Zeplin overlay
                    to review and match the UI to company requirements
                </li>
                <li>
                    Created, managed, and resolved issues in GitLab and Jira boards to track progress
                    with the team, as well as communicate goals with product and project
                    management.
                </li>
            </fragment>
        
        </fragment>
        </fragment>
    )
    
}

export default Experience;