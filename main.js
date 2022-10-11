var array = [6, 2, 3, 1, 7, 4, 8, 5]

array = SortArray(array);

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}

function SortArray(Array) {
    //1st option (the parameter in the function is not needed)
    //array.sort((a, b) => a - b);

    //2d option
    if (Array.length <= 1) {
        return Array;
    }

    const pivot = Array[Array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < Array.length - 1; i++) {
        if (Array[i] < pivot) {
            leftArray.push(Array[i]);
        }
        else {
            rightArray.push(Array[i])
        }
    }

    return [...SortArray(leftArray), pivot, ...SortArray(rightArray)];
}