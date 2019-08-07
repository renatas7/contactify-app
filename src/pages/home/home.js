import React, { useEffect, useCallback } from 'react';
import { actions } from './../../state/actions';
import { connect } from 'react-redux';
import { WithSpinner } from '../../components';

const Home = ({ dispatch, loading }) => {
  const fetchData = useCallback(() => {
    dispatch(actions.dashboard.updateDashboardAction());
  }, [dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <WithSpinner loading={loading}>
      <div>Home page</div>
    </WithSpinner>
  );
};

const mapStateToProps = state => ({
  dashboardData: state.dashboardState.dashboardData,
  loading: state.dashboardState.isOnSync,
});

export default connect(mapStateToProps)(Home);
