import React from 'react'

const SkillCard = ({name, description, logoUrl}) => {
    return (
        <div className="" >
            <img src={logoUrl} alt={`${name}-logo`} />
            <h2 className="text-2xl">{name}</h2>
            <p className="">{description}</p>
        </div>
    )
}   

export default SkillCard