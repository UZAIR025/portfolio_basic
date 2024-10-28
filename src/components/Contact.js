import {  AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";


export default function Contact () {

    const config = {
        email : 'uzair5275@gmail.com',
        phone: '+94 71 89 1000 7',
        subtitle: 'Im a Full-stack developer and Computer Engineer',
        social: {
            github: 'https://github.com/UZAIR025',
            facebook: 'https://web.facebook.com/mohamed.uzair.37/',
            linkedin: 'https://www.linkedin.com/in/uwais-mohamed-uzair-a46030230'
        }
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
        <div className='flex  py-3 justify-center'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
    
    </section>
}