import styles from "./Intro.module.scss";
import applesAndGreens from "../../../../public/assets/images/about/apples-and-greens.jpg";
import broccoliKid from "../../../../public/assets/images/about/broccoli-kid.jpeg";
import packedGreens from "../../../../public/assets/images/about/packed-greens.jpg";
import tomatoKids from "../../../../public/assets/images/about/tomato-kids.jpeg";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles["intro-text"]}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to help create a place-based, resilient food system, by
          sourcing fresh food from local, organic and sustainable farmers and
          delivering it directly to families – and supporting our whole
          community in the process.
        </p>
        <h2>Our Story</h2>
        <p>
          Growing Together teaches gardening and nutrition, plants trees, greens
          schoolyards, and connects students with nature in the Oakland Unified
          Schools District (OUSD).
        </p>
        <p>
          Last school year, we were also running produce stands at three OUSD
          schools – bringing fresh food to our families and giving our students
          hands-on lessons in financial literacy and entrepreneurship. With help
          from our school communities, Mandela Partners produce distributors,
          and our donors including the Numi Foundation and Clorox, these produce
          stands were a great success. We sold approximately 1,000 pounds of
          fresh produce every week and our kids and families loved the stands.
        </p>
        <p>
          After the pandemic hit in March of 2020, schools were closed, and many
          people began to lose their jobs. Like many other organizations, we
          quickly realized that our students, families, and even the farmers we
          had been working with, were going to need support throughout this
          time. We decided to come together as a community to connect local
          farmers with families who needed fresh food. We started by working
          with our three original schools and Mandela Partners, with support
          from the Clorox Foundation, to deliver fresh produce to 200 families
          in Oakland.
        </p>
        <p>
          In partnership with the Numi Foundation, we added an additional
          supplier, Pacific Rim Produce, and expanded the service. We were then
          given generous donations from the Salesforce Foundation, Eat Learn
          Play Foundation, and the TomKat Foundation. That enabled us to partner
          further with OUSD and expand our program from 400 families a week to
          3,200 families a week over the summer. We were also able to support
          our community by purchasing from several local organic and sustainable
          farms owned by women and people of color, and hiring more OUSD family
          members to pack and deliver the food.
        </p>
        <p>
          We expanded our produce procurement as well, working with Full Harvest
          to order from Epic Farmshop, Asian Business Institute and Resource
          Center, and more. From mid-April to mid-August we delivered 263,452
          pounds of fresh produce! Since the 2020 – 2021 school year started,
          Growing Together has been working with OUSD to deliver free and
          reduced lunches to our families, as well as produce boxes purchased
          from Coke Farms with support from SalesForce Foundation and Eat Learn
          Play. We now deliver to over 6,000 families a week, and have over 35
          parents hired at a good wage ($35/hr) to pack and delivery food.
        </p>
        <p>
          In order for us to make this initiative long-term and sustainable, we
          are now restructuring as Farms to Communities and transitioning to a
          mutual aid approach that allows everyone in Oakland to get involved
          and become part of the solution.
        </p>
        <p>
          Please sign up for delivery of fresh produce to your door, and support
          your community!
        </p>
        <p>Thank you so much,</p>
        <p>Farms to Communities and the Growing Together Team</p>
      </div>
      <div className={styles["intro-images"]}>
        <img
          src={packedGreens}
          alt="packed greens"
          className={styles["intro-images-img"]}
        />
        <img
          src={broccoliKid}
          alt="kid picking broccoli"
          className={styles["intro-images-img"]}
        />
        <img
          src={tomatoKids}
          alt="kids examining a juicy tomato"
          className={styles["intro-images-img"]}
        />
      </div>
    </div>
  );
};

export default Intro;
