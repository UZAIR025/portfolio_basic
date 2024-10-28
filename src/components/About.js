import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'I am a fourth-year Computer Engineering undergraduate with a passion for building innovative software solutions. From front-end design to back-end logic, I specialize in Full-Stack Development, ensuring every project I work on is scalable, efficient, and user-friendly. With a focus on clean and maintainable code, I am committed to following industry best practices, such as SOLID principles and Agile methodologies.',
        line2: 'Throughout my academic journey, I have honed my skills by leading and collaborating on multiple projects, including a Laboratory Booking System and a Hotel and Flight Booking Platform. These projects enhanced my expertise in React, Flutter, Spring Boot, and Firebase. I also have hands-on experience with databases, implementing ACID-compliant MySQL systems to guarantee reliable transactions. My ability to integrate APIs and use modern frameworks ensures seamless development workflows and optimal performance.',
        line3: 'Looking ahead, I aim to contribute meaningfully to dynamic software development teams, where I can apply my problem-solving mindset and continuously grow my technical abilities. My goal is to develop impactful software solutions that align with business needs and improve user experiences. I am always eager to explore new technologies and embrace challenges that foster both personal and professional growth.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}