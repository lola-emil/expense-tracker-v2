
export type ValidatorError<T> = {
    path: keyof T,
    message: string,
};

export const isEmpty = (val:  any) => !val || val.trim() == "";

export function isEmail(email: any) {
    if (!email) return false;

    // Split the email into local and domain parts
    const parts = email.split('@');

    // Email must contain exactly one @ symbol
    if (parts.length !== 2) return false;

    const [localPart, domainPart] = parts;

    // Local part and domain part must not be empty
    if (!localPart || !domainPart) return false;

    // Domain part must contain at least one dot
    const domainParts = domainPart.split('.');
    if (domainParts.length < 2) return false;

    // Each part of the domain must not be empty
    for (const part of domainParts) {
        if (!part) return false;
    }

    // Local part must not start or end with a dot
    if (localPart.startsWith('.') || localPart.endsWith('.')) return false;

    // Local part must not contain two consecutive dots
    if (localPart.includes('..')) return false;

    // Check for valid characters in local part
    const validLocalChars = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
    if (!validLocalChars.test(localPart)) {
        return false;
    }

    // Check for valid characters in domain part
    const validDomainChars = /^[a-zA-Z0-9.-]+$/;
    if (!validDomainChars.test(domainPart)) {
        return false;
    }

    return true;
}
