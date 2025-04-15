import './IfElseWithJsx.css';
function IfElseWithJsx(){
    let n=15;
    let count=0;
    const myClass={
        color:'green'
    }
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count==2){
        return(
            <>
                <h2 style={myClass}>The number {n} is a prime number.</h2>
            </>
        )
    }else{
        return(
            <>
                <h2 className="abc"> The number {n} is not a prime number.</h2>
            </>
        )
    }

}
export default IfElseWithJsx;
