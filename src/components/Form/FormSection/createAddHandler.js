export default function createAddHandler(
    extensionTemplate,
    groupName,
    data,
    updateFn,
) {
    return () => {
        const newGroup = {
            ...extensionTemplate,
            uniqueId: crypto.randomUUID(),
        };

        const newData = { ...data };
        newData[groupName].push(newGroup);

        updateFn(newData);
    };
}
