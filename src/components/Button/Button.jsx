import styles from "./Button.module.css";


const Button = ({ isOutline, icon, text, ...rest }) => {
  return (

    <button {...rest} 
    className={isOutline ? styles.outline_btn :styles.button  }>
        {icon}
        {text}
        
        </button>
  )
}

export default Button;