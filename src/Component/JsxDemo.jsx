import 'bootstrap/dist/css/bootstrap.min.css';
function JsxDemo(){
    let a=10;
    const myStyle = {
        color: "blue",
        fontSize: "20px"
    };
    return(
        <>
        <h1 style={myStyle}>This is the first jsx element.</h1>
        <h2 className="abc">This is the second jsx element.</h2>
        <p className='text text-warning'>{a}</p>
        <p>
            {
                a>0?"positive":"negetive"
            }
        </p>
        </>
    )
}
export default JsxDemo;