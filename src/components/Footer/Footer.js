import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer class={styles.footer}>
      <p class={styles.footer_text}>
        © 2024 Студенческие Услуги. Все права защищены.
      </p>
      <div class={styles.footer_links}>
        <Link to="/privacy">Политика конфиденциальности</Link>
        <Link to="/terms">Условия использования</Link>
        <Link to="/contact">Свяжитесь с нами</Link>
      </div>
    </footer>
  );
}

export default Footer;