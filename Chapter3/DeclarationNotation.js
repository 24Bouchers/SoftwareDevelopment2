/* There is a slightly shorter way to say “var square = ...function”. The function
keyword can also be used at the start of a statement, as in the following: */
function square ( x ) {
return x * x ;
}
/*
This is a function declaration. The statement defines the variable square and
points it at the given function. So far so good. There is one subtlety with this
form of function definition, however. */
console . log (" The future says :" , future () ) ;
function future () {
return " We STILL have no flying cars .";
}

function example () {
    function a () {} // Okay
    if ( something ) {
    function b () {} // Danger !
    }
    }