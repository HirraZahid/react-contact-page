import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={`container ${styles.contact_section}`}> 
        <h1>Contact Us</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit non quam tristique sodales.
         Proin euismod lectus ut nisi luctus, eu sagittis justo vestibulum. Nullam posuere ultricies ante,
          et volutpat nunc bibendum nec. Duis vestibulum, tellus id varius lacinia, est quam accumsan justo.
      </p>
    </div>
  )
}

export default Contact;