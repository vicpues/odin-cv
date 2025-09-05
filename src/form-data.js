export const data = {
    personalData: [
        {
            uniqueId: crypto.randomUUID(),
            name: "Mike Wazowski",
            description: "Scare supervisor",
            email: "mike.wazowski@example.com",
            phone: "+44 444 444 44",
            location: "Scareville, Monsterland",
            about: "An inspired, team-focused worker who doesn't lose his cool when things get tough.\nMy career goal is to appear in a commercial!",
        },
    ],

    educationData: [
        {
            uniqueId: crypto.randomUUID(),
            school: "Monsters University MU",
            degree: "BA in Scare Management",
            from: "2018",
            to: "2022",
            details: "-Scares 101\n-If you're reading this, the test worked",
        },
    ],

    workData: [
        {
            uniqueId: crypto.randomUUID(),
            company: "Monsters Inc.",
            position: "Scare floor supervisor",
            from: "2023",
            to: "",
            details: "-Coordinating scare teams\n-Writing performance reports",
        },
    ],
};
