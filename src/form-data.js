export const data = {
    personalData: {
        name: "",
        email: "",
        phone: "",
        location: "",
    },

    educationData: [
        {
            uniqueId: crypto.randomUUID(),
            school: "",
            degree: "",
            from: "",
            to: "",
            details: "",
        },
    ],

    workData: [
        {
            uniqueId: crypto.randomUUID(),
            company: "",
            position: "",
            from: "",
            to: "",
            details: "",
        },
    ],
};

export const educationTemplate = {
    school: "",
    degree: "",
    from: "",
    to: "",
    details: "",
};

export const workTemplate = {
    company: "",
    position: "",
    from: "",
    to: "",
    details: "",
};
