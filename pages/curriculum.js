import { ImBooks } from 'react-icons/im'
import { ImSearch } from 'react-icons/im'
import { BiMedal } from 'react-icons/bi'
import { GiDiploma, GiStack } from 'react-icons/gi'

import {SiBootstrap, SiCplusplus, SiCss3, SiFastapi, SiFedora, SiHtml5, SiJava, SiJavascript, SiLatex, SiLinux, SiLinuxmint, SiMacos, SiManjaro, SiMongodb, SiNextdotjs, SiNumpy, SiOcaml, SiOverleaf, SiPandas, SiPopos, SiPostgresql, SiPython, SiPytorch, SiReact, SiRedis, SiUbuntu, SiGraphql, SiVisualstudiocode} from 'react-icons/si'

const Stack = () => {
    return (
        
        <div>

        <div className='card justify-items-center border-white'>
            <h3 className='align-middle' style={{'paddingLeft':'1rem'}}><span style={{'fontSize':'2rem'}}><GiStack/></span> Stack</h3>
            <hr style={{'paddingTop':'0rem'}}/>
            
        </div>


            <div className='container' style={{'fontSize':'4rem'}}>
                <div className='d-flex justify-content-center'>
                    <span style={{'paddingLeft':'1rem'}}><SiPython/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiJavascript/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiCplusplus/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiOcaml/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiJava/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiMongodb/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiRedis/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiPostgresql/></span>
                </div>
                <div className='d-flex justify-content-center'>
                    <span style={{'paddingLeft':'1rem'}}><SiNumpy/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiPandas/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiPytorch/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiFastapi/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiNextdotjs/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiReact/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiGraphql/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiHtml5/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiCss3/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiBootstrap/></span>
                </div>
                <div className='d-flex justify-content-center'>
                    <span style={{'paddingLeft':'1rem'}}><SiMacos/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiLinux/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiUbuntu/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiManjaro/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiPopos/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiLinuxmint/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiFedora/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiVisualstudiocode/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiOverleaf/></span>
                    <span style={{'paddingLeft':'1rem'}}><SiLatex/></span>
                </div>
            </div>

        </div>
    )
}





const intro = 'I am a computer scientist and engineer who loves to solve problems. In the past, I worked with several machine learning areas, such as computer vision and natural language processing. At the present time, I am leaning towards cloud, back end and data engineering challenges.'

const university = [
    {
        'start' : 2019,
        'end' : 2022,
        'name' : 'Master\'s Degree in Computer Science and Engineering',
        'institution' : 'Universidade da Beira Interior'
    },
    {
        'start' : 2016,
        'end' : 2019,
        'name' : 'Bachelor\'s Degree in Computer Science and Engineering',
        'institution' : 'Universidade da Beira Interior'
    },
]

const research = [
    {
        'start' : 2020,
        'end' : 2021,
        'position' : 'Graduate Researcher',
        'institution' : 'NOVA-LINCs',
        'description' : 'Research on state-of-the-art methods that optimize resource utilization on neural networks used for semantic segmentation',
        'tags' : [
            'Semantic Segmentation', 'Computer Vision', 'Neural Networks', 'Deep Learning',
            'Machine Learning', 'Data Science', 'PyTorch', 'Python'
        ]
    }
]

const competitions = [
    {
        'year' : 2018,
        'name' : 'SWERC 2018',
        'location' : 'Paris, France'
    },
    {
        'year' : 2018,
        'name' : 'MIUP\'18',
        'location' : 'Covilhã, Portugal'
    }
]

const certificates = [
    {'date':'Sep 22', 'name':'2022 Python for Machine Learning & Data Science Masterclass', 'platform':'Udemy'},
    {'date':'Sep 22', 'name':'Data Science: Natural Language Processing (NLP) in Python', 'platform':'Udemy'},
    {'date':'Nov 22', 'name':'Fundamentals of AWS', 'platform':'Educative, Inc.'},
    {'date':'Aug 22', 'name':'M22P: MongoDB for Python Developers', 'platform':'MongoDB University'},
    {'date':'Aug 22', 'name':'M320: Data Modeling', 'platform':'MongoDB University'},
    {'date':'Sep 22', 'name':'Intro to AI Ethics', 'platform':'Kaggle'},
    {'date':'Sep 22', 'name':'Understanding Data Engineering', 'platform':'DataCamp'},
    {'date':'Sep 22', 'name':'Understanding Data Science', 'platform':'DataCamp'},
    {'date':'Sep 22', 'name':'Understanding Data Machine Learning', 'platform':'DataCamp'},
    {'date':'Sep 22', 'name':'Introduction To SQL', 'platform':'DataCamp'},
    {'date':'Sep 22', 'name':'Introduction To Python', 'platform':'DataCamp'},

]


const Curriculum = () => {
    return (
        <div className='container text-left' style={{'fontFamily':'Georgia'}}>

            <div className='container' style={{'paddingTop':'3rem', 'paddingLeft':'1rem'}}/>

            <div className='card bg-dark text-white text-left rounded justify-items-center'>
                <p className='card-text align-middle' style={{'padding':'2rem', 'fontSize':'1.5rem'}}>{intro}</p>
            </div>

            <div className='container' style={{'paddingTop':'3rem', 'paddingLeft':'1rem'}}/>




            <Stack/>




            <div className='container' style={{'paddingTop':'3rem', 'paddingLeft':'1rem'}}/>


            <div className='card justify-items-center border-white'>
            <h3 className='align-middle' style={{'paddingLeft':'1rem'}}><span style={{'fontSize':'2rem'}}><ImBooks/></span> Education</h3>
            <hr style={{'paddingTop':'0rem'}}/>
            <ul className='list-group'>
                {university.map(course => {
                    return  <li className='list-group-item border-0' key={(Math.random()*10000).toString()}>
                        <p className='align-middle' style={{'paddingLeft':'1rem'}} key={course.name}>
                            <strong>{course.name}</strong>, {course.institution}, {course.start}-{course.end}.
                        </p>
                    </li>
                })}
            </ul>
            </div>


            <div className='card justify-items-center border-white'>
            <h3 className='align-middle' style={{'paddingLeft':'1rem'}}><span style={{'fontSize':'2rem'}}><ImSearch/></span> Research</h3>
            <hr style={{'paddingTop':'0rem'}}/>
            <ul className='list-group list-group-flush'>
                {research.map(job => {
                    return <li className='list-group-item border-0' key={(Math.random()*10000).toString()}>
                        <p className='align-middle' style={{'paddingLeft':'1rem'}} key={job.position}>
                            <strong>{job.position}</strong>, {job.description}, {job.institution}, {job.start}-{job.end}.
                        </p>
                        <p style={{'paddingLeft':'1rem'}}>{job.tags.map(xs=>{return (<span className='badge bg-dark' key={(Math.random()*10000).toString()} style={{'margin':'0.25rem'}}>{xs}</span>)})}</p>
                    </li>
                })}
            </ul>
            </div>



            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card justify-items-center border-white'>
                            <h3 className='align-middle' style={{'paddingLeft':'1rem'}}><span style={{'fontSize':'2rem'}}><GiDiploma/></span> Certificates</h3>
                            <hr style={{'paddingTop':'0rem'}}/>
                            <div style={{'max-height':'30vh', 'overflowY':'scroll'}}>
                                <ul className='list-group'>
                                    {certificates.map(cert => {
                                        return  <li key={(Math.random()*10000).toString()} className='list-group-item border-0' style={{'height':'8vh'}}>
                                            <p className='text-left align-middle' style={{'paddingLeft':'1rem'}} key={cert.name}>
                                                <strong>{cert.name}</strong>, {cert.platform}, {cert.date}.
                                            </p>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card justify-items-center border-white'>
                            <h3 className='align-middle' style={{'paddingLeft':'1rem'}}><span style={{'fontSize':'2rem'}}><BiMedal/></span> Competitions</h3>
                            <hr style={{'paddingTop':'0rem'}}/>
                            <ul className='list-group'>
                                {competitions.map(comp => {
                                    return  <li className='list-group-item border-0' key={(Math.random()*10000).toString()}>
                                        <p className='align-middle' key={(Math.random()*10000).toString()} style={{'paddingLeft':'1rem'}}>
                                            <strong>{comp.name}</strong>, {comp.location}, {comp.year}.
                                        </p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>








        </div>
    )
}

export default Curriculum