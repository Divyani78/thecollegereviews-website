
import "./SinglePost.css";
import Blog1 from '../Assets/Blog1.jpg';
import Picture1 from '../Assets/Picture1.png';
import Picture2 from '../Assets/Picture2.png';
import Picture3 from '../Assets/Picture3.png';
import Picture4 from '../Assets/Picture4.png';
import Picture5 from '../Assets/Picture5.png';
import Picture6 from '../Assets/Picture6.png';
import FlashMessage from '../Flashmessage/Flashmessage';
import { useEffect, useRef, useState } from 'react';

export default function SinglePost() {
    const [showFlashMessage, setShowFlashMessage] = useState(false);
    const futureReferenceRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setShowFlashMessage(entry.isIntersecting);
          });
        },
        { threshold: 1 } // Trigger when the entire element is visible
      );
  
      const futureReferenceElement = futureReferenceRef.current;
      if (futureReferenceElement) {
        observer.observe(futureReferenceElement); }

        return () => {
          if (futureReferenceElement) {
            observer.unobserve(futureReferenceElement);
          }
        };
      }, []);

  return (
    <div className="singlePost">
              {showFlashMessage && <FlashMessage message="Stay tuned to The College Reviews where your CAT Sahayak unlocks higher education, one 
          honest review at a time!" type="custom" />}
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={Blog1} alt=""
        />
        <h1 className="singlePostTitle">
        Unlocking Higher Education: A Comprehensive Review of the Best 
        MBA/PGDM Colleges in Delhi/NCR Under 85 Percentile
        </h1>
        <p className="singlePostDesc">
          <span className="firstLetter">H</span>ere I am before you, your CAT SAHAYAK, ready to guide you through the rollercoaster of 
          emotions that comes with the journey of higher education. Just like LIC, I'm here for you, 
          whether it's CAT KE SAATH BHI or CAT KE BAAD BHI. Let's embark on this journey 
          together and unlock the doors to your dream colleges, focusing on institutions catering to 
          students with a CAT percentile below 85. From program details to placement records and 
          scholarships, let's dive deep into each institution to provide you with honest reviews and 
          valuable insights.
          <br />
          <br />
        </p>
        <p className="singlePostDesc1">
          <h2>FORE School of Management</h2>
          <span className="firstLetter">F</span>ORE School of Management shines with its PGDM, Executive PGDM, and Fellowship 
          programs. Nestled in the heart of South Delhi, the institution has carved a niche for itself, 
          ranked 12th among private colleges. With an impressive ROI and merit-based scholarships, 
          it ensures a rewarding educational experience for its students. The shorter and intense nature of 
          PGDM programs, along with their accessibility, makes them a practical choice for aspiring managers.
          <br />
          <br />
        </p>
        <p className="singlePostDesc2">
          <h2>Lal Bahadur Shastri College</h2>
          <span className="firstLetter">L</span>BS College offers a range of PGDM specializations, including Financial Management, 
          Research & Business Analytics, and AI & Data Science. Situated in the bustling Delhi NCR 
          region, the college boasts a strong ranking and a robust placement record. With scholarships 
          catering to various criteria, LBS College provides ample opportunities for deserving 
          candidates. The value and hands-on learning experience offered by PGDM programs make 
          them an attractive alternative to traditional MBA courses.
          <br />
          <br />
        </p>
        <p className="singlePostDesc3">
          <h2>BIMTECH</h2>
          <span className="firstLetter">B</span>IMTECH's array of PGDM programs, including IBM, Retail, and International Business, 
          caters to diverse career aspirations. Positioned among the top B-schools, it offers a conducive 
          learning environment in Greater Noida and Delhi. With attractive placement packages and 
          academic scholarships, it ensures a rewarding journey for management enthusiasts. The 
          flexibility and intense nature of PGDM programs make them well-suited for students seeking 
          practical experience and quick adaptation to industry needs.
          <br/>
          <br />
        </p>
        <p className="singlePostDesc4">
          <h2>Fostiima</h2>
          <span className="firstLetter">F</span>ostiima stands out with its diverse range of PGDM programs, covering Marketing, Finance, 
          HRM, and Analytics & Operations. Located in the vibrant surroundings of South Delhi, it 
          boasts a stellar reputation, ranking 6th among top B-Schools in North India. With a 100% 
          placement success rate and attractive academic scholarships, it offers a compelling 
          proposition for management aspirants. Additionally, the emphasis on practical experience 
          through hands-on learning makes PGDM a preferred choice over traditional MBA programs. 
          <span> Notably, Fostiima's average placement package ranges between 8.50 and 9 lakhs, reflecting 
          its strong industry connections and student competence. Moreover, Fostiima is known for 
          filling its seats quickly, closing admissions as early as April 20th last year.</span>
        </p>
        <p className="singlePostDesc5">
          <h2>GL Bajaj</h2>
          <span className="firstLetter">W</span>ith its flagship PGDM program and a focus on International Business, GL Bajaj offers a 
          balanced blend of academic excellence and affordability. Situated in Greater Noida and Delhi, 
          the college provides ample opportunities for students to explore innovation and culture. <span>GL 
          Bajaj's average placement packages range from 8.25 to 8.75 lakhs, showcasing its effective 
          placement strategies and industry relevance. </span> A remarkable placement record, coupled with 
          government scholarships, makes it a preferred choice for many aspiring managers. 
          <span>Furthermore, GL Bajaj is AIU approved, making its PGDM equivalent to an MBA but at a 
          lower fee. This college is also known for quickly filling its seats, with admissions closing by 
          May 5th last year. </span>The flexibility and relevance of PGDM programs make them an attractive 
          option for students looking to adapt quickly to industry needs. <span>Both GL Bajaj and Fostiima 
          offer practical-oriented education under a 10-lakh budget, making them ideal for students 
          with a constrained financial plan.</span>

          Choosing the right business school is a significant milestone in one's academic journey. Each 
          institution reviewed in this guide offers unique opportunities and experiences. Whether it's 
          FORE School of Management's executive education, LBS College's specialization options, or 
          BIMTECH's diverse career-focused programs, aspiring managers have a plethora of options 
          to explore. By considering factors such as location, reputation, ROI, and scholarships, 
          students can make informed decisions and embark on a successful career path in management.
          <br/>
          <br/>
          <br/>
        </p>
        <h4 ref={futureReferenceRef}>For Future Reference</h4>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="singlePostImages">
             <img src={Picture1} alt="" />
             <img src={Picture2} alt="" />
             <img src={Picture3} alt="" />
             <img src={Picture4} alt="" />
             <img src={Picture5} alt="" />
             <img src={Picture6} alt="" />
        </div>
      </div>
    </div>
  );
}