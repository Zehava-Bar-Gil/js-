'use strict';

const Avg = (a ,b ,c) =>{
    return (a+b+c) / 3;
}

const TeamWin = (teamA,teamB,teamC) =>{
    if(teamA > teamB > teamC) return 1;
    else if(teamA < teamB < teamC) return -1;
    else return 0;
}

// const Avg
// const John = Avg( 89 , 120 , 103 );
// const Mike = Avg( 116 , 94 , 123 );

// console.log(John);
// console.log(Mike);

// const TeamWin
const John = Avg( 89 , 120 , 103 );
const Mike = Avg( 116 , 94 , 123 );
const Mary = Avg( 97 , 134 , 105 );

const winner = TeamWin(John,Mike,Mary);
if(winner === -1) {
    console.log("John team win");
}
else if(winner === 1) {
    console.log("Mike team win");
}
else{
    console.log("Mary team win")
}

console.log(TeamWin(John,Mike,Mary));