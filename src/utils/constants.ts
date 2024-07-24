export const REQUIRED_MIN_PASSWORD_LENGTH = 8;
export const DANGER_STRENGTH_VALUE = 4;
const EMPTY_STRENGTH = ''
const WEAK_STRENGTH = 'weak';
const MEDIUM_STRENGTH = 'medium';
const STRONG_STRENGTH = 'strong';
const DANGER_STRENGTH = 'danger';
interface Dictionary {
    [key: string]: string
}
export const STRENGTH_DICTIONARY: Dictionary = {
    0: EMPTY_STRENGTH,
    1: WEAK_STRENGTH,
    2: MEDIUM_STRENGTH,
    3: STRONG_STRENGTH,
    4: DANGER_STRENGTH
};