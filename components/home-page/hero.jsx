import classes from './Hero.module.css';
import Image from 'next/image'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/vedran.png"
                    alt="An image showing Vedran"
                    width={300} height={300}
                />
            </div>
            <h1>I am Vedran</h1>
            <p>Here is where I blog...</p>
        </section>
    )
}

export default Hero;