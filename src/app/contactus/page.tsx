import React from "react";
import Image from "next/image";
import styles from "../styles/ContactUs.module.css"; // Adjust the path to your actual CSS module file

export default function ContactUs() {
  return (
    <div className={styles.container}> {/* Apply some styling if needed */}
      {/* Image for Instagram */}
      <Image
        src="/insta.png"
        alt="Instagram"
        width={70}
        height={70}
        className={styles.image}
      />
      <span className={styles.text}>03187498376837</span>

      {/* Image for WhatsApp */}
      <Image
        src="/wa.png"
        alt="WhatsApp"
        width={70}
        height={70}
        className={styles.image}
      />
    </div>
  );
}
