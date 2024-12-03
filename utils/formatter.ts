import moment from 'moment';

export const formatDate = (date: string): string => {
  return moment(date).format('MMM D, YYYY - HH:mm [UTC]');
};
