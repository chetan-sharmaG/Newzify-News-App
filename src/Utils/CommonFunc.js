import { DateTime } from 'luxon';

export default function getRelativeTime(createdAt) {
  const createdDate = DateTime.fromMillis(Number(createdAt), { zone: 'Asia/Kolkata' });
  const now = DateTime.now().setZone('Asia/Kolkata');
  
  const diffInDays = now.diff(createdDate, 'days').days;
  const diffInHours = now.diff(createdDate, 'hours').hours;
  const diffInMinutes = now.diff(createdDate, 'minutes').minutes;

  if (diffInDays >= 1) {
    if (diffInDays === 1) {
      return 'Yesterday';
    } else {
      return `${Math.floor(diffInDays)} days ago`;
    }
  } else if (diffInHours >= 1) {
    return `${Math.floor(diffInHours)} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else {
    return `${Math.floor(diffInMinutes)} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }
}
