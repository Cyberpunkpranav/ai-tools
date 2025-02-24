import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../styles/jobs.module.css'
const Jobs = () => {
    const [jobs,setjobs] = useState(null)
    const fetch = async()=>{
        const res  = await axios.get('http://localhost:8085/api/jobs')
        setjobs(res.data.response)
    }
    useEffect(()=>{
        fetch()
    },[])
    const scrapnew=async()=>{
        const res  = await axios.get('http://localhost:8085/api/scrap/jobs')
        setjobs(res.data.response)
    }
    console.log(jobs)
  return (
    <section className='container mx-auto mt-10'>
    <button onClick={()=>scrapnew()}>refresh jobs</button>
    <div className='flex flex-wrap gap-10 p-5'>
        {
        jobs&&jobs.map((data)=>(
            <a target='__blank' href={data.url} className={styles.card}>
                <div className="justify-between">
                <h2>{data.job_title}</h2>
                <h6>{data.site}</h6>
                <h5>{data.location}</h5>
                <p>{data.experience}</p>
                <p>{data.salary_package}</p>
                {
                    data.stats.map((stat)=>(
                        <div className='flex items-center'>
                        <span>{stat.label}{stat.value}</span>
                        </div>
                    ))
                }
                {
                    data.key_skills.map((skills)=>(
                        <button className='mx-5'>{skills}</button>
                    ))
                }
                <h5>About company</h5>
                {/* <a target='__blank' href={data.review.url}>{data.ratings?data.ratings:'view ratings'}</a> */}
                </div>
            </a>
        ))
        }

    </div>
    </section>
  )
}

export default Jobs