import styles from './NavBar.module.css';


const NavBar = (props) => {
    return ( 
    <div className={styles.navBar}>
     <h2>frontHook.ir shopping</h2>
     <span>{props.totalItem}</span>
    </div> );
}
 
export default NavBar;