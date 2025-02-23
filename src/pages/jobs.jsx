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
                <div className="flex items-center justify-between">
                <h2>{data.job_title}</h2>
                <h6>{data.site}</h6>
                </div>
                {
                data.links.map((link)=>(
                    <a className='inline-block mx-4' target='__blank' href={link.link}>{link.title}</a>
                ))
                }
            </a>
   
        ))

        }
    </div>
    </section>
  )
}

export default Jobs