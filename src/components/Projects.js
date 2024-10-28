import websiteImg1 from '../assets/1.png';
import websiteImg2 from '../assets/2.png';
import websiteImg3 from '../assets/3.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Laboratory booking system. React ts, Tailwind css, and spring boot',
                link: 'https://github.com/SathurshanPrabaharan/CO2-lab-booking-app-frontend'
            },
            {
                image: websiteImg2,
                description: 'This is an e-commerce website built with Flutter and Firebase. It provides a smooth shopping experience, secure user authentication, and efficient management. The platform is optimized for fast performance and scalability.',
                link: 'https://github.com/UZAIR025/FlutteApps.git'
            },
            {
                image: websiteImg3,
                description: 'This is a Smart Home Interface mobile app built using Flutter. It allows users to control and monitor home appliances remotely with real-time status updates and scheduling features. ',
                link: 'https://github.com/UZAIR025/Smart_home.git'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}