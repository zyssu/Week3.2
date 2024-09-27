import React from "react";
function Karty({ name, functiom, experience, image,lore }) {

    return (
        <div style={styles.container}>
            <div style={styles.container2}>
                <img src={image} style={styles.image} alt="" />
                <div style={styles.container3}>
                    <h1 style={styles.name}> {name} </h1>
                    <p style={styles.experience}> <b>Level: </b> {experience} </p>
                    <p style={styles.functiom}> <b>Ability:</b> {functiom} </p>
                    <p style={styles.lore}> <b>Lore: </b> {lore} </p>
                </div>
            </div>
        </div>
    )
}
const styles = {
    container: {
        background: "#68ab8a",
        width: "300px",
        borderRadius: "10px",
        height: "450px",

    },
    image: {
        borderRadius: "10px",
        border: "black 3px solid",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "95%",
        height: "170px"


    },
    functiom: {
        margin:"5px"
    },
    experience: {
        margin:"5px"
    },
    name: {
        textAlign: "center",
        marginTop: "-10px"

    },
    container2: {
        background: "#99ffcc",
        width: "280px",
        borderRadius: "10px",
        marginLeft: "10px",
        marginTop: '10px',
        height: "94%",
        paddingTop: "10px"

    },
    container3: {
        background: "#D4F1C5",
        width: "250px",
        borderRadius: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: '10px',
        height: "auto",
        paddingTop: "10px",
        paddingBottom: "5px"
    
    },
    lore: {
        margin:"5px"
    }


}
export default Karty