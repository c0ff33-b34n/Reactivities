import React, { useState, useEffect } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data);
      });
  }, []); // empty array [] as second parameter ensures useEffect only runs once and not continuously.

  return (
    <div>
      <NavBar />
      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
