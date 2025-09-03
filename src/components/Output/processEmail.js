export default function processEmail(string) {
    const zeroWidthSpace = "\u200B";
    const breakPoints = ".-@";

    const letters = [];

    for (const letter of string) {
        if (breakPoints.includes(letter)) {
            letters.push(zeroWidthSpace);
        }
        letters.push(letter);
    }

    return letters.join("");
}
