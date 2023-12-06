
function Nav(){
    const styles = {
        display:  'flex',
       borderRadius: '8px',
        padding: '8px',
        color: 'red',
        backgroundColor: 'yellow'
      };
      const listStyle = {
        padding: '15px',
        
      }
    return(
        <>
        <ul style={styles}>
            <li style={listStyle}>Home</li>
            <li style={listStyle}>About</li>
            <li style={listStyle}>Booking</li>
            <li style={listStyle}>Contact</li>
        </ul>
        </>
    )
}

export default Nav;