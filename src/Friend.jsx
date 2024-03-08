export default function Friend({friend}){
    const {name, email} =  friend;

    const friendStyle = {
        padding: '15px',
        border: '2px solid tomato',
        margin: '15px',
        borderRadius: '15px'
    }
    return(
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}