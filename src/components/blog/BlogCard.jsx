import React from "react"

const BlogCard = ({ blogTitle, description, tags, blogImageUrl, date }) => {
  return (
    <>
      <div>
        <div className="bg-cover bg-center w-full h-56  lg:h-96" style={{ backgroundImage: `url(${blogImageUrl})` }}></div>
      </div>
      <div className="border border-[#6e6e6e] border-t-0">
        <h2 className="">{blogTitle}</h2>
        <p>{description}</p>
        <div>
          {tags.map(tag => (
            <span>{tag}</span>
          ))}
        </div>
        <p>{date}</p>
      </div>
    </>
  )
}

export default BlogCard
