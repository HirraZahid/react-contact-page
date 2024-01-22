import Button from "../Button/Button"
import styles from "./Contactform.module.css"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const Contactform = () => {

 
  
  const mammy = (event) => {
    event.preventDefault();
    console.log(name,event.target[0].value);
  }
  
  return (
    <section className={` ${styles.container}`}>

      <div className={styles.btn}>
        <div className={styles.button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>

        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

        <form  onSubmit={mammy}>
          <div className={styles.form_control}>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>

            <label htmlFor="text">Text</label>
            <textarea  name="text" rows={5}/>
          </div>
          <div style={{
            display: 'flex', // Fix: Added quotes to 'flex'
            justifyContent: 'flex-end',
          }}>
          <Button 
          // onClick={mammy}
          text="Submit"/>
          </div>
          
        </form>
      </div>


    </section>
  )
}

export default Contactform