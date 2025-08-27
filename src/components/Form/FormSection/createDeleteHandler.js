export default function createDeleteHandler({
    data,
    groupName,
    groupId,
    updateFn,
}) {
    return () => {
        const index = data[groupName].findIndex(
            (group) => group.uniqueId === groupId,
        );

        const newData = { ...data };
        newData[groupName].splice(index, 1);

        updateFn(newData);
    };
}
