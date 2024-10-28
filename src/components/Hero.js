import MyImg from '../assets/My11.png';
import {  AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: {
            title: 'Full-stack developer',
            description: 'I am a third-year undergraduate of the Faculty of Engineering, University of Jaffna. I am reading for a BSc. (Hons.) Degree in Computer Engineering.'

        },
        social: {
            github: 'https://github.com/UZAIR025',
            facebook: 'https://web.facebook.com/mohamed.uzair.37/',
            linkedin: 'https://www.linkedin.com/in/uwais-mohamed-uzair-a46030230'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col justify-center '>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Mohamed</span> Uzair 
                <p className='text-black text-6xl font-hero-font'>{config.subtitle.title}</p>
                <p className='text-2xl'>{config.subtitle.description}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3 h-1/4 ' src={MyImg} />
    </section>
}
