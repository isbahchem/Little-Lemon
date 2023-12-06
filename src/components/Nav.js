
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
            <li style={listStyle}><a href='Header'>Home</a></li>
            <li style={listStyle}>About</li>
            <li style={listStyle}><a href='BookingPage'>Booking</a></li>
            <li style={listStyle}>Contact</li>
        </ul>
        </>
    )
}

export default Nav;