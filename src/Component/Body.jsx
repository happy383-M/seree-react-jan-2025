function Body() {
    return (
        <div style={{ textAlign: "center" }}>
            <p>This is a Homepage.</p>
            <button 
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
                onClick={() => alert("Read Open Book")}
            >
                Learn More
            </button>
        </div>
    );
}

export default Body;


