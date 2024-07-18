


export const signInRules = {
    email: "required",
    password: "required"
};

export const updatePasswordRules = {
    current_password: "required",
    new_password: "required",
};

export const addUserRules = {
    firstname: "required",
    lastname: "required",
    email: "required|email",
    password: "required",
    role_id: "required"
}

export const updateUserRules = {
    firstname: "required",
    lastname: "required",
    email: "required|email",
    role_id: "required"
}
