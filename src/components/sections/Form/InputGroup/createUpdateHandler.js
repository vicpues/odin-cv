import getFormData from "./getFormData";

export default function createUpdateHandler({
    data,
    groupName,
    groupId,
    updateFn,
}) {
    return (e) => {
        e.preventDefault();

        const newGroupData = [...data[groupName]];
        const index = data[groupName].findIndex(
            (group) => group.uniqueId === groupId,
        );

        newGroupData[index] = {
            ...getFormData(e.target),
            uniqueId: groupId,
        };

        const newData = { ...data };
        newData[groupName] = newGroupData;

        updateFn(newData);
    };
}
