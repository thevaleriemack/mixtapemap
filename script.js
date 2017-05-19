function reportError(err) {
    $('#errorMsg').html(err);
}

// The following getRandomIntIncluseive function was found on this webpage: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).on('click', '#about', function () {
    $('#splash').css('display', 'block');
});

$(document).on('click', '#closeSplash', function () {
    $('#splash').css('display', 'none');
});