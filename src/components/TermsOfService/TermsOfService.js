import React from 'react';
import styles from './TermsOfService.module.css';
import img from './1.png';

function TermsOfService() {
  return (
    <div className={styles.termsService}>
      <h1 className={styles.title}>Условия использования</h1>
      <div className={styles.imageContainer}>
        <img src={img} alt="Terms of Service" className={styles.termsImage} />
      </div>
      <p>Добро пожаловать на наш сайт! Используя наш сайт, вы соглашаетесь соблюдать и выполнять следующие условия использования. Пожалуйста, внимательно ознакомьтесь с ними перед началом использования.</p>

      <section className={styles.section}>
        <h2>1. Введение</h2>
        <p>
          Эти Условия использования (далее – «Условия») регулируют ваши отношения с нашим сайтом. Пользуясь сайтом, вы подтверждаете, что прочитали, поняли и согласны соблюдать эти Условия.
          Если вы не согласны с этими Условиями, вам следует прекратить использование сайта.
        </p>
        <p>
          Мы оставляем за собой право вносить изменения в настоящие Условия в любое время. Обновленная версия Условий будет опубликована на сайте. Продолжение использования сайта после изменений считается принятием новой редакции Условий.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Регистрация и аккаунт</h2>
        <p>
          Для получения доступа к определенным функциям сайта, вам может потребоваться регистрация аккаунта. Вы соглашаетесь предоставить точную и актуальную информацию при регистрации и поддерживать её в актуальном состоянии.
        </p>
        <p>
          Вы обязуетесь не передавать свои учетные данные третьим лицам и соблюдать конфиденциальность информации о вашем аккаунте. Вы несете ответственность за все действия, совершаемые через ваш аккаунт.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Использование сайта</h2>
        <p>При использовании нашего сайта запрещено:</p>
        <ul>
          <li>Нарушать законы и нормативные акты;</li>
          <li>Распространять вредоносное ПО или вирусы;</li>
          <li>Публиковать или передавать запрещенный контент (включая ненавистнические высказывания и незаконные материалы);</li>
          <li>Использовать автоматизированные инструменты для доступа к сайту без нашего разрешения;</li>
          <li>Осуществлять действия, которые могут нарушить работоспособность сайта.</li>
        </ul>
        <p>
          Мы оставляем за собой право ограничивать или приостанавливать доступ к сайту пользователей, нарушающих эти правила.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Интеллектуальная собственность</h2>
        <p>
          Весь контент сайта, включая тексты, изображения, логотипы, дизайн и программный код, защищен авторским правом и принадлежит нам или нашим партнерам. Использование материалов сайта без нашего явного письменного разрешения запрещено.
        </p>
        <p>
          Пользователи могут использовать контент сайта только для личных, некоммерческих целей. Любое копирование, модификация или распространение материалов является нарушением авторских прав.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Ограничение ответственности</h2>
        <p>
          Наш сайт предоставляется «как есть» без каких-либо гарантий. Мы не гарантируем точность, полноту и актуальность информации на сайте и не несем ответственности за убытки, вызванные его использованием.
        </p>
        <p>
          Мы также не несем ответственности за действия третьих лиц, которые могут использовать наш сайт в своих целях, а также за сбои в работе сервера, хакерские атаки и иные обстоятельства, которые не зависят от нас.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Конфиденциальность</h2>
        <p>
          Наша политика конфиденциальности регулирует сбор, использование и защиту персональных данных пользователей. Подробнее об этом можно узнать в разделе «Политика конфиденциальности».
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Сторонние ссылки</h2>
        <p>
          Наш сайт может содержать ссылки на сторонние ресурсы. Мы не контролируем и не несем ответственности за содержание и политику этих сайтов. Используя такие ссылки, вы действуете на свой страх и риск.
        </p>
      </section>

      <section className={styles.section}>
        <h2>8. Изменения условий</h2>
        <p>
          Мы оставляем за собой право вносить изменения в данные Условия в любое время. Обновления вступают в силу с момента их публикации на сайте. Пожалуйста, регулярно проверяйте этот раздел для ознакомления с изменениями.
        </p>
      </section>

      <section className={styles.section}>
        <h2>9. Заключительные положения</h2>
        <p>
          Настоящие Условия использования регулируются действующим законодательством. Все споры, возникающие в связи с настоящими Условиями, будут разрешаться в судебном порядке в соответствии с законодательством.
        </p>
        <p>Благодарим вас за использование нашего сайта!</p>
      </section>
    </div>
  );
}

export default TermsOfService;
