import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
  line1: "I am a fresh Computer Engineering graduate with a strong passion for building reliable and innovative software solutions. I have a solid foundation in Full-Stack Development, working across both front-end interfaces and back-end logic to create scalable, efficient, and user-friendly applications. I prioritize clean, maintainable code and consistently follow industry best practices, including SOLID principles and Agile development methodologies.",

  line2: "During my academic journey, I gained hands-on experience by leading and collaborating on several projects such as a Laboratory Booking System and a Hotel and Flight Booking Platform. These projects strengthened my technical skills in React, Flutter, Spring Boot, and Firebase. I also worked extensively with databases, implementing ACID-compliant MySQL systems to ensure data integrity and reliable transactions, while integrating RESTful APIs for smooth system communication.",

  line3: "As a fresh graduate, I am highly motivated to begin my professional career in a dynamic software development environment where I can contribute effectively while continuing to grow as a developer. I aim to apply my problem-solving abilities to build impactful software solutions that align with business objectives and enhance user experience. I am eager to learn new technologies, adapt quickly, and take on challenges that support both personal and professional growth."
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
