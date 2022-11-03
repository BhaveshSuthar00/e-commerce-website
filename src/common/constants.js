// export const BaseURL = `http://localhost:2200`;
export const BaseURL = `https://e-commerce-port.herokuapp.com`;
export const headerConfig = authToken => {
    return {
        headers: { Authorization: `Bearer ${authToken}` },
    };
};
