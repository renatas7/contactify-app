import React from 'react';
import { connect } from 'react-redux';
import { WithSpinner } from '../../components';

const Home = ({ loading }) => {
  return (
    <WithSpinner loading={loading}>
      <div>Home page</div>
    </WithSpinner>
  );
};

const mapStateToProps = state => ({
  dashboardData: state.contactsState.dashboardData,
  loading: state.contactsState.isOnSync,
});

export default connect(mapStateToProps)(Home);
