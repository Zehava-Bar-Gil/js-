function findSmallest(a, b, c){
    //Arranging variables
    if (a > c && b > c){
    return c;
    } else if (c> a && b > a) {
    return a;
    } else {
    return b;
    }
    }
    //Rename the function name
    findSmallest(52,66, 2);