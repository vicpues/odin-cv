export default function getDateString(from, to) {
    if (!from) {
        return "";
    }
    if (!to) {
        return `(${from} — Present)`;
    }
    if (from === to) {
        return `(${from})`;
    }
    return `(${from} — ${to})`;
}
