export const formData = [personalData, educationData, workData];
export const inputTemplates = {
    education: educationInputsTemplate,
    work: workInputsTemplate,
};

const CURRENT_YEAR = new Date().getFullYear();

const personalData = {
    id: "personal-details",
    legend: "Personal details",
    groups: [
        {
            uniqueId: crypto.randomUUID(),
            inputs: [
                {
                    label: "Name",
                    type: "text",
                    placeholder: "ex. 'John Doe'",
                    inputProps: { autocapitalize: "words" },
                },
                {
                    label: "Email",
                    type: "mail",
                    placeholder: "ex. 'email@example.com'",
                },
                {
                    label: "Phone number",
                    type: "tel",
                    placeholder: "ex. '+44 444 444 44'",
                    inputProps: { maxlength: 20 },
                },
                {
                    label: "Location",
                    type: "text",
                    placeholder: "ex. 'Boring, Oregon'",
                    inputProps: { autocapitalize: "words" },
                },
            ],
        },
    ],
};

const educationData = {
    id: "education",
    legend: "Education",
    groups: [
        {
            uniqueId: crypto.randomUUID(),
            inputs: [...educationInputsTemplate],
        },
    ],
};

const workData = {
    id: "work",
    legend: "Work experience",
    groups: [
        {
            uniqueId: crypto.randomUUID(),
            inputs: [...workInputsTemplate],
        },
    ],
};

const educationInputsTemplate = [
    {
        label: "School name",
        type: "text",
        placeholder: "ex. 'Monsters University (MU)'",
        inputProps: { autocapitalize: "words" },
    },
    {
        label: "Degree name",
        type: "text",
        placeholder: "ex. 'BA in Scares'",
        inputProps: { autocapitalize: "words" },
    },
    {
        label: "From:",
        type: "number",
        inputProps: { min: 1900, max: CURRENT_YEAR },
    },
    {
        label: "To:",
        type: "number",
        inputProps: { min: 1900, max: CURRENT_YEAR },
    },
    {
        label: "Relevant courses",
        type: "text",
        placeholder: "example:\n-Scares 101\n-Advanced sneaking",
        inputProps: { autocapitalize: "sentence" },
    },
];

const workInputsTemplate = [
    {
        label: "Company name",
        type: "text",
        placeholder: "ex. 'Monsters Inc.'",
        inputProps: { autocapitalize: "words" },
    },
    {
        label: "Job title",
        type: "text",
        placeholder: "ex. 'Scare floor supervisor'",
        inputProps: { autocapitalize: "words" },
    },
    {
        label: "From:",
        type: "number",
        inputProps: { min: 1900, max: CURRENT_YEAR },
    },
    {
        label: "To:",
        type: "number",
        inputProps: { min: 1900, max: CURRENT_YEAR },
    },
    {
        label: "Responsibilities",
        type: "text",
        placeholder:
            "example:\n-Coordinating scare teams\n-Creating performance reports",
        inputProps: { autocapitalize: "sentence" },
    },
];
