import { Link } from "react-router-dom";
import "./Post.css";
import { useEffect, useRef } from "react";

export default function Post({ img }) {
  const postRef = useRef(null);

  useEffect(() => {
    const currentPostRef = postRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentPostRef) {
      observer.observe(currentPostRef);
    }

    return () => {
      if (currentPostRef) {
        observer.unobserve(currentPostRef);
      }
    };
  }, []);

  return (
    <div className="post-container">
      <Link to="/post/SinglePost" className="link">
        <div className="post" ref={postRef}>
          <img className="postImg" src={img} alt="" />
          <div className="postInfo">
            <span className="postTitle">
              Unlocking Higher Education: A Comprehensive Review of the Best
              MBA/PGDM Colleges in Delhi/NCR Under 85 Percentile
            </span>
            <hr />
            <p className="postDesc">
              Here I am before you, your CAT SAHAYAK, ready to guide you through
              the rollercoaster of emotions that comes with the journey of
              higher education. Just like LIC, I'm here for you, whether it's
              CAT KE SAATH BHI or CAT KE BAAD BHI.Let's embark on this journey
              together and unlock the doors to your dream colleges, focusing on
              institutions catering to students with a CAT percentile below 85.
              From program details to placement records and scholarships, let's
              dive deep into each institution to provide you with honest reviews
              and valuable insights.
            </p>
          </div>
        </div>
        </Link>
    </div>
  );
}