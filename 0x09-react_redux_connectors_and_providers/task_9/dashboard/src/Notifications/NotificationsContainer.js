import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActions';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import Notifications from './Notifications';

const NotificationsContainer = ({ fetchNotifications, notifications, filter }) => {
  useEffect(() => {
    fetchNotifications(); // Fetch notifications on mount
  }, [fetchNotifications]);

  return <Notifications notifications={notifications} filter={filter} />;
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state).toJS(),
  filter: state.get('filter'),
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
