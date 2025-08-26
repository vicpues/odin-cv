export default function getFormData(formElement) {
    const formObj = new FormData(formElement);
    return Object.fromEntries(formObj.entries());
}
