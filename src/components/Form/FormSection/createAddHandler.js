export default function createAddHandler(
    extensionTemplate,
    groupName,
    data,
    updateFn,
) {
    return () => {
        let uniqueId = crypto.randomUUID();
        while (groupContainsId(data[groupName], uniqueId)) {
            uniqueId = crypto.randomUUID();
        }

        const newGroup = {
            ...extensionTemplate,
            uniqueId,
        };

        const newData = { ...data };
        newData[groupName].push(newGroup);

        updateFn(newData);
    };
}

function groupContainsId(group, id) {
    for (let item of group) {
        if (item.uniqueId === id) return true;
    }
    return false;
}
