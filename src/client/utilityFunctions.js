export const validateForm = data => {

    const isCorrectISBN = validateISBN(data.isbn);

    let parsedPages;
    data.pages ? parsedPages = parseInt(data.pages) : parsedPages = null;

    if (!data.title || !data.author || !data.isbn) {
        alert("Please fill all required fields.");
        return false
    } else if (data.title && data.author && !isCorrectISBN) {
        alert("Incorrect ISBN number. Should be 10 or 13 digits.")
        return false
    } else if (data.pages && !parsedPages > 0) {
        alert("Incorrect pages' value.")
        return false
    } else {
        console.log("validation passed");
        return true
    }
}

export const validateISBN = isbn => {

    let isDigitsOnly;

    const chars = isbn.replace(/-/g, "").split('');
    const nums = chars.map(char => parseInt(char));
    nums.every(num => num >= 0) ? isDigitsOnly = true : isDigitsOnly = false;
        
    if (!isDigitsOnly) { return false }

    else if (isDigitsOnly && nums.length === 10) {

        const numsMultipliedByPos = [];
        let multiplier = 10;

        for (let i=0; i<nums.length; i++) {
            const multiplied = nums[i] * multiplier;
            numsMultipliedByPos.push(multiplied);
            multiplier--;
        };

        const sum = numsMultipliedByPos.reduce((numA, numB) => numA + numB, 0);
        return sum % 11 === 0 ? true : false

        }

    else if (isDigitsOnly && nums.length === 13) {

        const oddNums = [];
        const evenNums = [];

        for (let i=0; i<nums.length; i += 2) { oddNums.push(nums[i]) }
        for (let i=1; i<nums.length; i += 2) { evenNums.push(nums[i]) }

        const evenNumsMultiplied = evenNums.map(num => num*3);
        const allNums = oddNums.concat(evenNumsMultiplied);

        const sum = allNums.reduce((numA, numB) => numA + numB, 0);
        return sum % 10 === 0 ? true : false

        }

}