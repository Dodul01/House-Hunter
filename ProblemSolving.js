function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const length = cleanStr.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (cleanStr[i] !== cleanStr[length - 1 - i]) {
            return false;
        }
    }

    return true;
}