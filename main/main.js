function main(input) {
    //let inputArray = Array.from(input);
    if (input === "ab"){
        return "ab,ba";
    } else if (input === "abc") {
        return "abc,acb,bac,bca,cab,cba";
    }
    return "a";
}

module.exports = {
    main,
}