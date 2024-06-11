export default function getRelativeTime(inshortsDate, inshortsTime) {

    const dateString = inshortsDate
    const timeString = inshortsTime
    const dateTimeString = `${dateString} ${timeString}`;
    const DateTime = luxon.DateTime;
    const combinedDate = DateTime.fromFormat(dateTimeString, 'cccc, dd LLLL, yyyy hh:mm a', { zone: 'Asia/Kolkata' });
    const now = DateTime.now().setZone('Asia/Kolkata');
    const diff = now.diff(combinedDate, ['hours', 'minutes']).toObject();
    if (diff.hours < 1) {
        return `${Math.floor(diff.minutes)} minutes ago`;
    } else {
        return `${Math.floor(diff.hours)} hour${diff.hours > 1 ? 's' : ''} ago`;
    }
}