import styles from './NavBar.module.css';


const NavBar = ({totalItems}) => {
    console.log('NavBar.js render');
    return ( 
    <div className={styles.navBar}>
     <h2>frontHook.ir shopping</h2>
     <span>{totalItems}</span>
    </div> );
}
 
export default NavBar;