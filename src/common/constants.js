// export const BaseURL = `http://localhost:2200`;
export const BaseURL = `https://indigo-foal-toga.cyclic.app`
export const headerConfig = authToken => {
    return {
        headers: { Authorization: `Bearer ${authToken}` },
    };
};

export const category = [
    "t-shirt",
    "shirt"
];

export const brand = [
    "Roadster",
    "polo",
    "roadster",
    "H&M",
    "Urbano ",
    "puma",
    "Mast & Harbour",
    "arrow",
    "HIGHLANDER",
    "Dennis Lingo",
    "WROGN",
    "V Dot"
];

export const discount = [
    15,
    20,
    25,
    30,
    35,
    39,
    40,
    43,
    45,
    50,
    53,
    55,
    57,
    60,
    63
];