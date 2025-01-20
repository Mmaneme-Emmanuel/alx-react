import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NotificationsContainer from './NotificationsContainer';

jest.mock('../actions/notificationActions', () => ({
  fetchNotifications: jest.fn(),
}));

describe('NotificationsContainer', () => {
  const mockStore = configureStore();
  const fetchNotifications = require('../actions/notificationActions').fetchNotifications;

  it('should fetch notifications on mount', () => {
    const store = mockStore({
      notifications: {
        entities: { notifications: {} },
      },
      filter: 'default',
    });

    render(
      <Provider store={store}>
        <NotificationsContainer />
      </Provider>
    );

    expect(fetchNotifications).toHaveBeenCalled();
  });
});
