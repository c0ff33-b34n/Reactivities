import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { LoadingComponent } from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]); // empty array [] as second parameter ensures useEffect only runs once and not continuously.
                      // [activityStore] in the array is required to notify useEffect of it's dependency (for functions)

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading Activities'/>

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
