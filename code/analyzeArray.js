export function analyzeArray(arr) {
    const average = arr.reduce((sum, value) => sum + value) / arr.length;
    const min = arr.reduce(function (min, currentValue) {
        if (currentValue < min) {
            min = currentValue;
        };  
        return min; // or Math.min();
    });
    const max = Math.max(...arr);
    const length = arr.length;

    return {average, min, max, length};
};
