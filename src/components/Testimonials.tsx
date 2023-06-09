import { FeedbackCard } from '.';
import { feedback } from '../constants';
import styles from '../styles';

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2} max-w-[410px] sm:max-w-[450px] text-center sm:text-left`}>
        What people are saying about us
      </h1>
      <p className={`${styles.paragraph} max-w-[450px] text-center sm:text-left`}>
        Everything you need to accept card payments and grow your business anywhere on the planet
      </p>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard
          key={card.id}
          name={card.name}
          title={card.title}
          content={card.content}
          img={card.img}
        />
      ))}
    </div>
  </section>
);

export default Testimonials;
