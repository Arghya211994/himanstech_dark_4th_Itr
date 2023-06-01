import React from 'react'
import styles from './Portfolio.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <>
   <section className={styles.portfolio} id='portfolio'>
      <p className={styles.heading}>Our <span style={{color:"#5abc2e"}}>Portfolio</span></p>

      <main className={styles.portfolio_content}>
        <div className={styles.portfolio_content_item}>
        <Link href='https://www.himanstech.com/'>
        <Image src="/portfolio__1.png" alt="" width={1000} height={300} className={styles.img}/>
        </Link>
           
        </div>
        <div className={styles.portfolio_content_item}>
          <Link href='https://financehut.in/'>
          <Image src="/portfolio__2.png" alt="" width={1000} height={300} className={styles.img}/>
          </Link>
         
        </div>
        <div className={styles.portfolio_content_item}>
          <Link href='https://next-portfolio-2-opal.vercel.app/'>
          <Image src="/portfolio__3.png" alt="" width={1000} height={300} className={styles.img}/>
          </Link>
           
        </div>

        <div className={styles.portfolio_content_item}>
          <Link href='http://real-estate.himanstech.com/'>
          <Image src="/portfolio__4.png" alt="" width={1000} height={300} className={styles.img}/>
          </Link>
           
        </div>

        <div className={styles.portfolio_content_item}>
        <Link href='https://www.sumitspot.com/'>
        <Image src="/portfolio__7.png" alt="" width={1000} height={300} className={styles.img}/>
          </Link>
            <Image src="/portfolio__7.png" alt="" width={1000} height={300} className={styles.img}/>
        </div>

        <div className={styles.portfolio_content_item}>
          <Link href='https://ecommerce-sanity-stripe-xllv.vercel.app/'>
          <Image src="/portfolio__6.png" alt="" width={1000} height={300} className={styles.img}/>
          </Link>
           
        </div>
            
        <div className={styles.portfolio_content_item}>
          <Link href='https://tccrealogics.com/'>
          <Image src="/portfolio__8.png" alt="" width={1000} height={300} className={styles.img}/>
          </Link>
           
        </div>
       

      </main>
      </section>
    </>
  )
}

export default Portfolio